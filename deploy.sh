#!/bin/bash

echo "🚀 Portfolio Deployment Helper Script"
echo "======================================"

# Build frontend
echo "📦 Building frontend..."
cd frontend
npm run build

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "✅ Frontend build successful!"
    echo "📁 Build files are in: frontend/build/"
    echo ""
    echo "🌐 You can now:"
    echo "   1. Upload 'build' folder to any static hosting (Netlify, Vercel, etc.)"
    echo "   2. Or run locally with: npx serve -s build"
else
    echo "❌ Frontend build failed!"
    exit 1
fi

# Return to root
cd ..

echo ""
echo "🔧 Backend deployment checklist:"
echo "   1. Ensure .env file has correct MONGODB_URI"
echo "   2. Deploy backend folder to Render/Railway/Heroku"
echo "   3. Update frontend .env.production with backend URL"
echo ""
echo "📝 Next steps:"
echo "   1. Push code to GitHub"
echo "   2. Deploy backend first (get URL)"
echo "   3. Update REACT_APP_API_URL in frontend"
echo "   4. Deploy frontend"
echo ""
echo "🎉 Your portfolio is ready for the world!"