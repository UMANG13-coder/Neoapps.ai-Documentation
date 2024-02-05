# Stage 1: Build the Docusaurus site
FROM node:18 AS build

# Set working directory
WORKDIR /app

# Copy project file
COPY . .

# Install dependencies and build the website
RUN npm install && npm run build

# Stage 2: Serve the site with Nginx
FROM nginx:alpine

# Copy static assets from builder stage
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80 to the outer world
EXPOSE 80

# Start Nginx and serve the static site
CMD ["nginx", "-g", "daemon off;"]
