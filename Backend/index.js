
require("dotenv").config();

const express = require("express");
const app = express();
const all_routes = require("./routes/userRoutes");
const  connect_DB  = require("./config/db");
const cors = require('cors');
const error_handler = require("./middleware/error_handler");


app.use(cors());

app.use(express.json());

connect_DB();

app.use(all_routes);

app.use(error_handler)

app.listen(process.env.PORT, () => {
  console.log("server is listening, Port:5000");
});