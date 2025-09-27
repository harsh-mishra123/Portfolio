# 🚀 Harsh Mishra's Portfolio

A modern, responsive portfolio website built with React (frontend) and Node.js + Express + MongoDB (backend). Features a dark gradient design, smooth animations, and a fully functional contact form.

## 🌟 Features

### Frontend
- **Modern Design**: Dark gradient backgrounds with trendy UI components
- **Responsive**: Mobile-first design using Tailwind CSS
- **Animations**: Smooth scroll animations using AOS library
- **Typing Effect**: Interactive hero section with react-typed
- **Interactive Sections**: Skills, Projects, Education, and Contact
- **Contact Form**: Fully functional contact form with backend integration

### Backend
- **RESTful API**: Express.js server with MongoDB integration
- **Contact Management**: Store and retrieve contact form submissions
- **Input Validation**: Server-side validation for contact form data
- **Error Handling**: Comprehensive error handling and responses
- **CORS Enabled**: Cross-origin resource sharing for frontend integration

## 🛠️ Tech Stack

### Frontend
- React 18
- Tailwind CSS
- AOS (Animate On Scroll)
- React Typed
- Axios

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- CORS
- dotenv

## 📂 Project Structure

```
portfolio/
├── frontend/                 # React application
│   ├── public/              # Static assets
│   ├── src/
│   │   ├── components/      # React components
│   │   │   ├── Navbar.js
│   │   │   ├── Hero.js
│   │   │   ├── Skills.js
│   │   │   ├── Projects.js
│   │   │   ├── Education.js
│   │   │   ├── Contact.js
│   │   │   └── Footer.js
│   │   ├── utils/           # Utility files
│   │   │   └── api.js
│   │   ├── App.js
│   │   ├── index.js
│   │   └── index.css
│   ├── package.json
│   └── tailwind.config.js
└── backend/                 # Node.js application
    ├── config/
    │   └── db.js           # Database configuration
    ├── models/
    │   └── Contact.js      # Contact model
    ├── routes/
    │   └── contactRoutes.js # Contact routes
    ├── controllers/
    │   └── contactController.js # Contact controller
    ├── server.js           # Main server file
    └── package.json
```

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local installation or MongoDB Atlas)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd portfolio
   ```

2. **Setup Backend**
   ```bash
   cd backend
   npm install
   
   # Create .env file and add your MongoDB connection string
   # Edit .env file with your MongoDB URI
   
   # Start the backend server
   npm run dev
   ```

3. **Setup Frontend**
   ```bash
   cd ../frontend
   npm install
   
   # Start the frontend development server (will auto-open browser)
   npm run dev
   ```

4. **Access the application**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5000

## ⚙️ Configuration

### Backend Environment Variables (.env)
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/portfolio
# For MongoDB Atlas:
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/portfolio?retryWrites=true&w=majority
```

### Frontend Environment Variables (.env)
```env
REACT_APP_API_URL=http://localhost:5000/api
# For production:
# REACT_APP_API_URL=https://your-backend-domain.com/api
```

## 📱 Sections

### 1. **Navigation Bar**
- Sticky navigation with smooth scrolling
- Responsive mobile menu
- Clean and modern design

### 2. **Hero Section**
- Animated typing effect with personal introduction
- Call-to-action buttons
- Social media links
- Scroll indicator

### 3. **Skills Section**
- Categorized skill display (Frontend, Backend, Web3)
- Progress bars with animations
- Technology pills
- Interactive hover effects

### 4. **Projects Section**
- Featured and regular project cards
- Technology stack badges
- GitHub and demo links
- Responsive grid layout

### 5. **Education Section**
- Timeline-style education history
- Achievements and certifications
- Interactive cards with hover effects
- Learning philosophy section

### 6. **Contact Section**
- Functional contact form
- Real-time form validation
- Success/error messaging
- Contact information cards
- Social media integration

### 7. **Footer**
- Quick navigation links
- Social media icons
- Contact information
- Back to top functionality

## 🎨 Customization

### Colors and Styling
- Edit `tailwind.config.js` to customize colors and animations
- Modify gradient backgrounds in components
- Update color schemes in CSS variables

### Content Updates
- Update personal information in components
- Modify skills, projects, and education data
- Change social media links and contact information

### API Endpoints
- The backend provides RESTful API endpoints:
  - `POST /api/contact` - Submit contact form
  - `GET /api/contact` - Retrieve all contact messages (admin)

## 🚀 Deployment

### Frontend (Netlify/Vercel)
1. Build the project: `npm run build`
2. Deploy the `build` folder to your hosting provider
3. Update environment variables for production

### Backend (Heroku/Railway/DigitalOcean)
1. Set up MongoDB Atlas for production database
2. Configure environment variables on hosting platform
3. Deploy the backend directory

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

**Harsh Mishra**
- Email: harsh.mishra@example.com
- LinkedIn: [linkedin.com/in/harshmishra](https://linkedin.com/in/harshmishra)
- GitHub: [github.com/harshmishra](https://github.com/harshmishra)
- Portfolio: [your-portfolio-url.com](https://your-portfolio-url.com)

---

⭐ If you found this project helpful, please give it a star!

Built with ❤️ by Harsh Mishra