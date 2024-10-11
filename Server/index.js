const ws = require('ws');
const jf = require('jsonfile');

const wss = new ws.Server({ port: 2010 });
let profile = jf.readFileSync("world.json");

wss.on('connection', function connection(ws) {
  ws.on('message', function message(data) {
    console.log('received: %s', data);
  });
  console.log("connection");
  ws.send(JSON.stringify({"action": "worldInit", "data": JSON.stringify(profile)}));
});