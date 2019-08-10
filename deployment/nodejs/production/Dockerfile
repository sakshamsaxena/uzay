FROM node:lts-alpine as builder

WORKDIR /usr/src/app

# Install dependencies
COPY package*.json ./
RUN npm ci --only=production

# Add source code
COPY . .

# Run the server
CMD [ "npm", "run", "start" ]
