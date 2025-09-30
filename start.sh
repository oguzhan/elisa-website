#!/bin/bash

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${BLUE}   Elisa Website - Development Server Starter${NC}"
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo ""

# Check if pnpm is installed
if ! command -v pnpm &> /dev/null
then
    echo -e "${YELLOW}⚠️  pnpm is not installed${NC}"
    echo -e "${BLUE}📦 Installing pnpm...${NC}"
    npm install -g pnpm
    if [ $? -eq 0 ]; then
        echo -e "${GREEN}✓ pnpm installed successfully!${NC}"
    else
        echo -e "${RED}✗ Failed to install pnpm. Please install it manually:${NC}"
        echo -e "${YELLOW}   Run: npm install -g pnpm${NC}"
        exit 1
    fi
fi

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo -e "${BLUE}📦 Installing dependencies (this may take a few minutes)...${NC}"
    pnpm install
    if [ $? -eq 0 ]; then
        echo -e "${GREEN}✓ Dependencies installed successfully!${NC}"
    else
        echo -e "${RED}✗ Failed to install dependencies${NC}"
        exit 1
    fi
else
    echo -e "${GREEN}✓ Dependencies already installed${NC}"
fi

echo ""
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${GREEN}🚀 Starting development server...${NC}"
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo ""
echo -e "${GREEN}Your website will open at: ${BLUE}http://localhost:3000${NC}"
echo -e "${YELLOW}Press CTRL+C to stop the server${NC}"
echo ""
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo ""

# Start the development server
pnpm dev
