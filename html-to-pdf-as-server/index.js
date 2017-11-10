const http = require('http');
const convert = require('./convert');
var url = require('url');

const hostname = '127.0.0.1';
const port = 3000;

// only happy flow covered
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/pdf');

  const html = url.parse(req.url, true).query.html;
  convert(html).then(stream => stream.pipe(res));
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});