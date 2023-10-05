# Use the official Node.js runtime as the base image for building the Angular app
FROM node:16 AS build

WORKDIR /app

# Copy package.json and package-lock.json (if using npm)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your app's source code from your host to your image filesystem.
COPY . .

CMD ["./node_modules/.bin/ng", "serve", "--host", "0.0.0.0"]
