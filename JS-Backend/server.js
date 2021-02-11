const express = require("express");
const app = express();
const cors = require("cors");
const registerRoute = require("./Components/Users/RegisterRoute");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
//const MongoClient = require("mongodb").MongoClient;

dotenv.config();
//const <route name> = require("route path")

const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());
app.use("/User/register", registerRoute);

//app.use("<route custom name>", const <route name>)
//app.use("/", (req, res) => {});

app.listen(port, () => console.log("Server is up on port " + port));