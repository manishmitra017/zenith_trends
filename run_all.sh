#!/bin/bash

# Zenith Trends Website Runner
# This script sets up and runs the website locally

set -e

echo "🚀 Starting Zenith Trends Website..."
echo ""

# Kill any process on port 3000
if lsof -ti:3000 > /dev/null 2>&1; then
    echo "🔄 Killing existing process on port 3000..."
    lsof -ti:3000 | xargs kill -9 2>/dev/null || true
    echo "✅ Port 3000 cleared!"
    echo ""
fi

# Check if pnpm is installed
if ! command -v pnpm &> /dev/null; then
    echo "❌ pnpm is not installed!"
    echo "📦 Installing pnpm..."
    npm install -g pnpm
    echo "✅ pnpm installed successfully!"
    echo ""
fi

cd frontend

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    pnpm install
    echo "✅ Dependencies installed!"
    echo ""
fi

echo "🌐 Starting development server..."
echo "📍 Open http://localhost:3000 in your browser"
echo ""

pnpm dev
