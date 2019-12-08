const express = require("express");
const cors = require("cors");
const path = require("path");
// const bodyParser = require("body-parser");
const db = require("./config/keys").ModuleURI;
const mongoose = require("mongoose");
const route = require("./routes/index");
const passport = require("passport");
const strategy = require("./passport/strategy");
const app = express();
strategy(passport);
// Middlewares
app.use(express.json());
app.use(cors());
app.use(passport.initialize());

// MongoDB
mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("db connected..."))
  .catch(err => console.log(err));

// routes
app.use("/user", route);

app.use(express.static(path.resolve(__dirname, "../server")));

// Port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("Server is listening on " + PORT));
