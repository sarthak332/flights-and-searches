const express = require("express");
const {PORT} = require("./config/ServerConfig")
const bodyParser = require("body-parser");
const ApiRoutes = require("./routers/index");
const setUpAndStartServer = () => {
  // creating object of express
  const app = express();
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use("/api", ApiRoutes);
  app.listen(PORT,async () => {
    console.log(`start Listning on port number ${PORT}`);
  });

};

setUpAndStartServer();
