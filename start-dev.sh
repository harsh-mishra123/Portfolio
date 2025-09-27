#!/bin/bash

# Portfolio Development Startup Script
echo "🚀 Starting Harsh Mishra's Portfolio Development Servers"
echo "======================================================="

# Function to start backend
start_backend() {
    echo "📡 Starting Backend Server..."
    cd backend && npm run dev &
    BACKEND_PID=$!
    echo "   Backend PID: $BACKEND_PID"
}

# Function to start frontend
start_frontend() {
    echo "🖥️  Starting Frontend Server..."
    cd frontend && npm run dev &
    FRONTEND_PID=$!
    echo "   Frontend PID: $FRONTEND_PID"
}

# Start both servers
start_backend
sleep 3
start_frontend

echo ""
echo "✅ Both servers are starting up!"
echo ""
echo "🌐 URLs:"
echo "   Frontend: http://localhost:3000"
echo "   Backend:  http://localhost:5001"
echo "   API:      http://localhost:5001/api"
echo ""
echo "⏹️  To stop both servers, press Ctrl+C"
echo ""

# Wait for both processes
wait