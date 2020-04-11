const express = require('express');

const app = new express();

// eslint-disable-next-line no-magic-numbers
const PORT = process.env.PORT || 5001;

app.get('/', (req, res) => {
  res.send('Hello from Server!');
});

app.get('/hello', (req, res) => {
  res.send('Hello, hello!');
});

app.listen(PORT, () => {
  console.log(`Server started in port: ${PORT}`)
});

module.exports = {
  app,
};
