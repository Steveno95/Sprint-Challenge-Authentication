const express = require('express');
const cors = require('cors');
const cookie = require('cookie-session');


const configureRoutes = require('./config/routes');

const server = express();
const corsOptions = {
  // If you're moving onto the stretch problem you'll need to set this obj with the appropriate fields
  // ensure that your client's URL/Port can achieve a Handshake
  // then pass this object to the cors() function
};

server.use(express.json());
server.use(cors({ origin: 'http://localhost:3000', credentials: true }));
server.use(cookie({ name: 'Name', secret: 'fjdhkskfjh', maxAge: 1000 * 60 * 5 }));
configureRoutes(server);

module.exports = {
  server,
};
