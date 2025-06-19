const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT;
const AUTH_SERVICE_PATH = process.env.AUTH_SERVICE_PATH
module.exports = {PORT, AUTH_SERVICE_PATH};