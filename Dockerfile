FROM node:16

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

COPY . .

# 5000 for HTTP
EXPOSE 5000
CMD [ "node", "app.js" ]