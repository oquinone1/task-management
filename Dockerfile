# Use lightweight Node image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the code
COPY . .

# Expose Vite dev server port
EXPOSE 3000

# Run Vite dev server
CMD ["npm", "run", "dev"]