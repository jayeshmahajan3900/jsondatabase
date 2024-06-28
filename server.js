const express = require('express');
const path = require('path');
const jsonServer = require('json-server');
const app = express();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

const port = process.env.PORT || 3000;

// Use JSON server middleware
app.use('/api', middlewares, router);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
