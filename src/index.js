const express = require("express");
const {PORT} = require("./config/ServerConfig")
const bodyParser = require("body-parser");
const {
  create,
  updateCity,
  deleting,
  getCity,
  getingAll
}  = require("./controller/cityController");
const setUpAndStartServer = () => {
  // creating object of express
  const app = express();
  app.use(bodyParser.json());
  app.use(express.json()); 
  app.use(bodyParser.urlencoded({ extended: true }));
  
  app.post("/create", create);
  app.get("/getALL", getingAll);
  app.listen(PORT,async () => {
    console.log(`start Listning on port number ${PORT}`);
  });

};

setUpAndStartServer();
