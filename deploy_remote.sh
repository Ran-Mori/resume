#!/bin/bash

# Configuration
# Default values (can be overridden by arguments)
SERVER_IP="${1:-a.b.c.d}"
SERVER_USER="root"
REMOTE_DIR="/var/www/resume"

# Colors for output
GREEN='\033[0;32m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Check if IP is provided or default
if [ "$SERVER_IP" == "a.b.c.d" ]; then
    echo -e "${RED}Error: Server IP address not configured.${NC}"
    read -p "Please enter your server IP address: " INPUT_IP
    if [ -n "$INPUT_IP" ]; then
        SERVER_IP="$INPUT_IP"
    else
        echo -e "${RED}No IP address provided. Exiting.${NC}"
        exit 1
    fi
fi

echo -e "${GREEN}Starting deployment to $SERVER_USER@$SERVER_IP...${NC}"

# Ensure remote directory exists
echo -e "${GREEN}Creating remote directory...${NC}"
ssh "$SERVER_USER@$SERVER_IP" "mkdir -p $REMOTE_DIR"

# 1. Sync files to the server
echo -e "${GREEN}Syncing files...${NC}"
# Exclude heavy/unnecessary folders
rsync -avz --delete \
    --exclude 'node_modules' \
    --exclude '.next' \
    --exclude '.git' \
    --exclude '.env' \
    --exclude '.DS_Store' \
    ./ "$SERVER_USER@$SERVER_IP:$REMOTE_DIR"

# 2. Run remote commands
echo -e "${GREEN}Running remote setup and build...${NC}"
ssh "$SERVER_USER@$SERVER_IP" << EOF
    set -e # Exit on error

    # Update package list and install prerequisites
    echo "Updating system packages..."
    apt-get update -y
    apt-get install -y curl build-essential git

    # Install Node.js (v20) if not installed
    if ! command -v node &> /dev/null; then
        echo "Installing Node.js..."
        curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
        apt-get install -y nodejs
    else
        echo "Node.js is already installed: \$(node -v)"
    fi

    # Install PM2 globally if not installed
    if ! command -v pm2 &> /dev/null; then
        echo "Installing PM2..."
        npm install -g pm2
    else
        echo "PM2 is already installed."
    fi

    # Navigate to project directory
    cd "$REMOTE_DIR"

    # Install dependencies
    echo "Installing project dependencies..."
    npm install

    # Build the Next.js app
    echo "Building the application..."
    npm run build

    # Start/Restart the application with PM2 on port 80
    echo "Configuring PM2..."
    
    # Stop and delete existing application instance to ensure clean state
    echo "Stopping existing application..."
    pm2 delete resume-app || true

    echo "Starting application instance..."
    # Start the app on port 80
    PORT=80 pm2 start npm --name "resume-app" -- start

    # Save PM2 process list so it restarts on reboot
    pm2 save
    # Setup startup script (idempotent)
    pm2 startup systemd || true

    echo "Deployment complete!"
EOF

echo -e "${GREEN}Deployment finished successfully! Access your resume at http://$SERVER_IP${NC}"
