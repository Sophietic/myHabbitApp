require("dotenv").config();

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const express = require("express");
const favicon = require("serve-favicon");
const mongoose = require("mongoose");
const logger = require("morgan");
const path = require("path");
const cors = require("cors");
const passport = require("passport");
const session = require("express-session");

require("./configs/passport.configs");
// process.env.MONGO_ATLAS_URI || 
// const { MONGO_ATLAS, MONGO_LOCAL, NODE_ENV } = process.env;

// // Function to run database connection
// const connectDb = (mongoUri) =>
//   mongoose
//     .connect(mongoUri, {
//       useCreateIndex: true,
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//       useFindAndModify: false,
//     })
//     .then((x) => {
//       console.log(
//         `Connected to Mongo! Database name: "${x.connections[0].name}"`
//       );
//     })
//     .catch((err) => {
//       console.error("Error connecting to mongo", err);
//     });

// // Check if development environment is 
// NODE_ENV === "development" ? connectDb(MONGO_LOCAL) : connectDb(MONGO_ATLAS);

mongoose
  .connect(process.env.MONGO_ATLAS_URI|| "mongodb://localhost/server", {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then((x) => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch((err) => {
    console.error("Error connecting to mongo", err);
  });

const app = express();

// Middleware Setup
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(
  cors({
    origin: ["http://localhost:3000"], //address of the new place goes here
    //origin: ["http://localhost:3000", "netlifyblablab"]
    credentials: true,
  })
);
app.use(
  session({
    secret: process.env.SESS_SECRET,
    resave: true,
    saveUninitialized: true,
  })
);
app.use(passport.initialize());
app.use(passport.session());

// Express View engine setup
app.use(
  require("node-sass-middleware")({
    src: path.join(__dirname, "public"),
    dest: path.join(__dirname, "public"),
    sourceMap: true,
  })
);

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");
app.use(express.static(path.join(__dirname, "public")));
app.use(favicon(path.join(__dirname, "public", "images", "favicon.ico")));

// default value for title local
app.locals.title = "Express - Generated with IronGenerator";

const index = require("./routes/index");
app.use("/api", index);
const router = require("./routes/auth.routes");
app.use("/api", router);
const habits = require("./routes/habits.routes");
app.use("/api", habits);

// Setting up environments
if (process.env.NODE_ENV === "production") {
  // set ability to get static values from client build folder
  // static files include all javascript and css files
  app.use(express.static("client/build"));

  // get the index.html that will be rendered on the browser
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname + "../client", "build", "index.html"));
  });
}



module.exports = app;
