# Use the official Node.js image
FROM node:18

# Create and set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install # Install a package

# Copy all source files
COPY . .

# Expose port 3000
EXPOSE 3000

#Start the server
CMD ["node", "app.js"]