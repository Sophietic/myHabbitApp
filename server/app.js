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
const app = express();

require("./configs/passport.configs");

mongoose
  .connect(process.env.MongoDB_URI, {
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

// Middleware Setup
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(
  cors({
    origin: ["http://localhost:3000"],
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

const index = require("./routes/index");
app.use("/api", index);
const router = require("./routes/auth.routes");
app.use("/api", router);
const habits = require("./routes/habits.routes");
app.use("/api", habits);

app.use(
  "/static",
  express.static(path.join(__dirname, "../client/build/static"))
);
app.use("/", express.static(path.join(__dirname, "../client/build/")));
app.get("*", function (request, response) {
  response.sendFile("index.html", {
    root: path.join(__dirname, "../client/build/"),
  });
});

module.exports = app;
