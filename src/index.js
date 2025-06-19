const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const { PORT } = require("./config/ServerConfig");
const bodyParser = require("body-parser");
const ApiRoutes = require("./routers/index");
// const db = require("./models/index");
const setUpAndStartServer = () => {
  // creating object of express
  const app = express();
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use("/api", ApiRoutes);
  app.listen(PORT, async () => {
    console.log(`start Listning on port number ${PORT}`); 
    });
};
setUpAndStartServer();



// const result = await City.findOne({
//   where :{
//     id : 35
//   }
// });
// const requiredData = await result.getAirports();

// // const ans = await result.createAirport({ name: "Kanpur Airport" });

// // console.log(ans.toJSON()); // ✅ This will now work