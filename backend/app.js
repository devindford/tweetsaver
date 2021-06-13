const express = require('express');
require('dotenv').config();
const app = express();
// Middleware to make sure json is used
app.use(express.json());

// Setting headers
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  next();
});

// Routes

app.use('/dev', require('./app/routes/dev.routes.js'));
app.use('/dev', require('./app/routes/users.routes.js'));

app.listen(process.env.PORT, () =>
  console.log(`port is live on http://localhost:${process.env.PORT}`)
);
