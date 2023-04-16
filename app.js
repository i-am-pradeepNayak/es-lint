const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const fileUpload = require("express-fileupload");

const app = express();
const name="pradeep";

app.use(express.json({ limit: "500mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));

app.use(cors());

// set the view engine to ejs
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");


app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, UPDATE, DELETE, OPTIONS"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, api_key, Accept, Authorization"
  );
  res.header("Content-Type", "application/json");
  next();
});

app.set("port",3001);
app.set("trust proxy", true);

app.use(morgan("dev"));
app.use(fileUpload());

app.use("/test", require("./routes/routes"));

module.exports = app;
