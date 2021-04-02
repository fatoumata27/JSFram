const http = require('http');
const configuration = require('./Backend/config/app');
const {hostname,port} = configuration.server;

const app = require('./Backend/app');
const server = http.createServer(app);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

