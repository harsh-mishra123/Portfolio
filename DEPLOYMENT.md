# Portfolio Deployment Guide

This portfolio consists of a React frontend and Node.js backend that need to be deployed separately.

## 🚀 Quick Deployment Options

### Frontend Deployment (Choose one):

#### Option 1: Vercel (Recommended)
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your GitHub repository
4. Set build command: `npm run build`
5. Set output directory: `build`
6. Deploy!

#### Option 2: Netlify
1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Import your GitHub repository
4. Set build command: `npm run build`
5. Set publish directory: `build`
6. Deploy!

### Backend Deployment (Choose one):

#### Option 1: Render (Recommended)
1. Push your backend code to GitHub
2. Go to [render.com](https://render.com)
3. Create a new Web Service
4. Connect your GitHub repository
5. Set environment variables:
   - `MONGODB_URI`: Your MongoDB Atlas connection string
   - `PORT`: 5001 (or leave blank, Render will auto-assign)
6. Deploy!

#### Option 2: Railway
1. Push your backend code to GitHub
2. Go to [railway.app](https://railway.app)
3. Import your GitHub repository
4. Set environment variables:
   - `MONGODB_URI`: Your MongoDB Atlas connection string
5. Deploy!

#### Option 3: Heroku
1. Install Heroku CLI
2. Push your backend code to GitHub
3. Create Heroku app
4. Set environment variables
5. Deploy via Git

## 🔧 Environment Variables

### Backend (.env):
```
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/portfolio
PORT=5001
```

### Frontend:
Update the API URL in your frontend to point to your deployed backend:
```javascript
const API_URL = 'https://your-backend-deployment-url.com/api'
```

## 📝 Pre-deployment Checklist

- [ ] MongoDB Atlas database is set up and accessible
- [ ] Backend .env file contains correct MongoDB URI
- [ ] Frontend API calls point to correct backend URL
- [ ] Both frontend and backend build successfully
- [ ] CORS is properly configured for your frontend domain

## 🌐 Post-deployment Steps

1. Update frontend API URL to match your deployed backend
2. Test contact form functionality
3. Verify all animations and features work in production
4. Set up custom domain (optional)

## 🔄 Continuous Deployment

Both Vercel and Netlify support automatic deployments from GitHub:
- Every push to main branch triggers a new deployment
- Preview deployments for pull requests
- Rollback capabilities

## 📞 Support

If you encounter any issues during deployment, check:
1. Build logs for error messages
2. Environment variables are correctly set
3. MongoDB connection string is valid
4. CORS settings allow your frontend domain