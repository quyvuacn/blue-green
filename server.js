const http = require("http");
require("dotenv").config();

const PORT = process.env.PORT || 3000;
const VERSION = process.env.VERSION;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end(`Hello World! This is ${VERSION} server`);
});

server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}/`);
});
