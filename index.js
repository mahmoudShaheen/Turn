var Turn = require('node-turn');
const PORT = process.env.PORT || 3478;
console.log(PORT);
console.log("hello");
var server = new Turn({
  // set options
  authMech: 'none',
  debugLevel: 'ALL',
  listeningIps: ['0.0.0.0'],
  listeningPort: `${PORT}`
});
server.start();
