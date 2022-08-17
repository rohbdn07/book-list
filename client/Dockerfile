# Dockerfile for React client
# Build react client
FROM node:18.7-alpine

# Working directory be app
WORKDIR /app

COPY package*.json ./

# Install Dependencies
RUN npm ci

# copy local files to app folder
COPY . .

EXPOSE 3000

CMD ["npm","start"]