FROM node
WORKDIR /app/
RUN npm install express --no-save && npm install cors
COPY . .
CMD ["node", "server.js"]