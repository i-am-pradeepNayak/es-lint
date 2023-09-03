const http = require("http");
const app = require("./app");

let httpServer = http.createServer(app);
let  data =httpServer.listen(3001, () => {
  console.log("server up and running: ", 3001);
});
