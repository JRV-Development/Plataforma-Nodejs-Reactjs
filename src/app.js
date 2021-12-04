const express = require("express");
const morgan = require("morgan");

//Initializations
const app = express();

//Settings
app.set("port", process.env.PORT);

//Middleware
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Routes
app.use(require("./routes/index.routes"));

module.exports = app;
