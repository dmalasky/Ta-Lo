const express = require("express");
const mongoose = require("mongoose");

//Import the config file
const CONFIG = require("./configVariables");

//Routers
const mainRoutes = require("./routes/mainRouter");

const app = express();

//Register a body parser
app.use(express.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "OPTIONS, GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});


app.use(mainRoutes);

//Set the connection
mongoose
  .connect(CONFIG.db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected Port! -> 8000')
    app.listen(8000);
  })
  .catch((err) => {
    console.log(err);
  });