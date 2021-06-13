const express = require('express');
const app = express();

require('dotenv').config();
// Middleware to make sure json is used
app.use(express.json());

// Setting headers
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  next();
});

// Routes

app.use('/dev', require('./routes/dev.routes.js'));
app.use('/users', require('./routes/users.routes.js'));

app.listen(process.env.PORT, () =>
  console.log(`port is live on http://localhost:${process.env.PORT}`)
);
