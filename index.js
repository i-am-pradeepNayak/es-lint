const http = require("http");
const app = require("./app");

const httpServer = http.createServer(app);
const data = httpServer.listen(3001, () => {
    console.log("server up and running: ", 3001);
});
