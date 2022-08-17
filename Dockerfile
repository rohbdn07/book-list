#  Dockerfile for Node Express Backend
FROM node:18.7-alpine

# Create App Directory
RUN mkdir -p /app
WORKDIR /app

#Copy
COPY package*.json ./

# Install Dependencies
RUN npm ci

# Copy app source code
COPY . .

# # remove the stuff you don't want
# RUN rm -Rf /client

# Exports
EXPOSE 5000

CMD ["npm","run","dev"]