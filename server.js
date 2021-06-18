const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");

const PORT = 3000;

const app = express();

app.use(morgan("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect("mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

// Tell the app to use the specified routes
app.use(require("./routes/api.js"));
app.use(require("./routes/home.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
