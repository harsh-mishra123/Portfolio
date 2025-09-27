#!/bin/bash

echo "🚀 Portfolio Application Status Check"
echo "=====================================\n"

# Check if backend is running
echo "📡 Checking Backend Server..."
if curl -s http://localhost:5001 > /dev/null; then
    echo "✅ Backend server is running on port 5001"
else
    echo "❌ Backend server is not responding"
fi

# Check if frontend is running  
echo "\n🖥️  Checking Frontend Server..."
if curl -s http://localhost:3000 > /dev/null; then
    echo "✅ Frontend server is running on port 3000"
else
    echo "❌ Frontend server is not responding"
fi

echo "\n🔗 Application URLs:"
echo "   Frontend: http://localhost:3000"
echo "   Backend:  http://localhost:5001"
echo "   API:      http://localhost:5001/api"

echo "\n📋 Quick Commands:"
echo "   Backend:  cd backend && npm run dev"
echo "   Frontend: cd frontend && npm run dev"