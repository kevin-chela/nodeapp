require("dotenv").config();
const express = require('express');
const cors = require("cors");

const app = express();
app.use(cors());

const port = process.env.PORT;

app.get('/', (req, res) => {
  res.send('Hello, Node.js!');
});

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
