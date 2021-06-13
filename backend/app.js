const express = require('express');
const app = express();
const PORT = 3030;
// Middleware to make sure json is used
app.use(express.json());

app.listen(PORT, () => console.log(`port is live on http://localhost:${PORT}`));
