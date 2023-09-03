"use strict";
const http = require("http");
const app = require("./app"),
    httpServer = http.createServer(app);
httpServer.listen(3001);
