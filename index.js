// index.js

const http = require('http');

const PORT = 3000;

// Create HTTP server
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello from Node.js HTTP server!\n');
});

// Start server
server.listen(PORT, () => {
  console.log(`✅ Server is running at http://localhost:${PORT}`);
});

// Background worker task every 5 seconds
setInterval(() => {
  console.log(`🔁 Node Worker: Task running at ${new Date().toISOString()}`);
}, 5000);
