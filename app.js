/* eslint-disable no-console */
const express = require('express');
const cors = require('cors');
const path = require('path');
const proxy = require('http-proxy-middleware');

const app = express();

app.use(cors());
app.use('/api/**',
  proxy({
    target: 'https://king-kong-ah-backend-staging.herokuapp.com/',
    changeOrigin: true,
  }));


app.use(express.static(path.join(__dirname, './dist')));

app.get('*', (req, res) => {
  res.header('X-XSS-Protection', 0);
  res.status(200).sendFile(path.join(__dirname, './dist/index.html'));
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on ${port}`));
