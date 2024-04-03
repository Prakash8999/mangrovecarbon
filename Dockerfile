# Use the official Node.js image as base
FROM node:14-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files to the working directory
COPY . .

# Expose port 3000 for the React application
EXPOSE 3000

# Define the command to run the React application
CMD ["npm", "start"]
