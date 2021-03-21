const http = require('http');

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Alt gong-si bot');
});

server.listen(8043, 'localhost', () => {
});
