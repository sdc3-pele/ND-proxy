const express = require('express');
const app = express();
const PORT = 3000;
const httpProxy = require('http-proxy');
const proxy = httpProxy.createProxyServer();

const photos = 'http://localhost:3001';
const itemSummary = 'http://localhost:3002';
const relatedProducts = 'http://localhost:3003';
const reviews = 'http://localhost:3004';


app.use('/:id', express.static('./public'));

app.all('/api/photos/:id', (req, res) => {
  proxy.web(req, res, { target: photos })
  console.log('Connected to Photos!');
});

app.all('/api/product/:pid', (req, res) => {
  proxy.web(req, res, { target: relatedProducts })
  console.log('Connected to Related Products!');
});

app.all('/api/itemSummary/:id', (req, res) => {
  proxy.web(req, res, { target: itemSummary })
  console.log('Connected to Items!');
});

app.all('/api/reviews/:id', (req, res) => {
  proxy.web(req, res, { target: reviews })
  console.log('Connected to Reviews!');
});

app.listen(PORT, () => console.log(`Proxy server running on port ${PORT}`));

/*
proxy: 3000
mike: 3001
matt: 3002
garrett: 3003
galina: 3004
*/
