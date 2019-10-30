require('dotenv').config({
  silent: true
});

const ENV = process.env.NODE_ENV || "development";
const port = process.env.PORT || 12001;

const express = require('express');
const http = require('http');
const bodyParser = require('body-parser')
const app = express();
const server = http.createServer(app);

app.use(bodyParser.json());

app.use((req, res, next) => {
  console.log(`Placeholder for validating and sanitizing input params for ${req.path}`);
  next();
});

app.get('/', async (req, res) => {
  res.send('Hello');
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send(err.message);
});

server.listen(port, function listening() {
  console.info(`Listening on ${server.address().port}`);
});
