var Turn = require('node-turn');
const PORT = process.env.PORT;
console.log("Hello Heroku");
console.log("App Port: " + PORT);
var server = new Turn({
  // set options
  authMech: 'none',
  debugLevel: 'ALL',
  listeningIps: ['0.0.0.0'],
  listeningPort: `${PORT}`
});
server.start();
