const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/health') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ status: 'healthy', marker: 'DEPLOYIGO_PF1_X' }));
    return;
  }
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ status: 'live', marker: 'DEPLOYIGO_PF1_X', timestamp: new Date().toISOString() }));
});

const port = process.env.PORT || 8080;
server.listen(port, () => {
  console.log(`E2E fixture listening on port ${port}`);
});
