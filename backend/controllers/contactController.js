const Contact = require('../models/Contact');

// @desc    Create new contact message
// @route   POST /api/contact
// @access  Public
const createContact = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Validate required fields
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: 'Please provide all required fields: name, email, and message'
      });
    }

    // Trim whitespace from inputs
    const trimmedData = {
      name: name.trim(),
      email: email.trim(),
      message: message.trim()
    };

    // Additional validation for empty strings after trim
    if (!trimmedData.name || !trimmedData.email || !trimmedData.message) {
      return res.status(400).json({
        success: false,
        message: 'Fields cannot be empty or contain only whitespace'
      });
    }

    // Create new contact
    const contact = await Contact.create(trimmedData);

    res.status(201).json({
      success: true,
      message: 'Thank you for your message! I will get back to you soon.',
      data: contact
    });
  } catch (error) {
    console.error('Contact creation error:', error);
    
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map(err => err.message);
      return res.status(400).json({
        success: false,
        message: messages.join('. ')
      });
    }

    res.status(500).json({
      success: false,
      message: 'Something went wrong. Please try again later.'
    });
  }
};

// @desc    Get all contact messages (for admin use)
// @route   GET /api/contact
// @access  Public (in a real app, this should be protected)
const getContacts = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    const contacts = await Contact.find()
      .sort({ createdAt: -1 })
      .limit(limit)
      .skip(skip)
      .lean(); // Use lean() for better performance when not modifying documents
    
    const total = await Contact.countDocuments();

    res.status(200).json({
      success: true,
      count: contacts.length,
      total,
      page,
      pages: Math.ceil(total / limit),
      data: contacts
    });
  } catch (error) {
    console.error('Get contacts error:', error);
    res.status(500).json({
      success: false,
      message: 'Unable to fetch contacts'
    });
  }
};

module.exports = {
  createContact,
  getContacts
};