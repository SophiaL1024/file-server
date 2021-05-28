const net = require('net');
const fs = require('fs');
// const stdin = process.stdin;
const server = net.createServer();
server.on('connection', function(conn) {
  console.log("someone has connected.");
  conn.setEncoding('utf8');
  conn.on('data', function(message) {
    console.log(`Message received from client: ${message}`);
    fs.readFile(message,'utf8' ,(err,data) => {
      // server.write(file);
      if (err) throw err;
      conn.write(data);
    })
  })
});
server.listen(3000, () => {
  console.log("server is listening on port 3000.");
});