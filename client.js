const net=require('net');
const stdin=process.stdin;
const readline = require('readline');
const client=net.createConnection({
  host:'localhost',
  port:3000
});
client.setEncoding('utf8');
client.on('connect',function(){
  console.log('I have connected');
});
// const rl=readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });
stdin.on('data', function(input){
    client.write(input.toString().slice(0,-1));
});
client.on('data',function(data){
  console.log("server sent back: ",data);
})