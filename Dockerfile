# Use the official Node.js base image
FROM node:latest as node

# Set the working directory inside the Docker image
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package.json package-lock.json ./


# Install the dependencies
RUN npm install 

# Copy the entire Angular app to the Docker image
COPY . .

# Build the Angular app
RUN npm run build --prod

#STAGE2
FROM nginx:alpine

COPY --from=node /app/dist/zylon /usr/share/nginx/html
# Expose the port on which the Angular app will run (default is 80)
EXPOSE 80

# Set the startup command to run the Angular app
CMD ["nginx", "-g", "daemon off;"]
