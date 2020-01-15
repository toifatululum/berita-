const express = require("express");
const app = express();
const port = 5000;
const berita = require("./routes/berita");
const mongoose = require('mongoose')
var bodyParser = require('body-parser')

try {
  mongoose.connect("mongodb://DESKTOP-H8H8051:27019?replicaSet=rs", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  });

  console.log("Mongodb terhubung ...");
} catch (err) {
  console.error(err.message);
  process.exit(1);
}
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use("/api/news", berita);

app.listen(port, () => console.log(`Aplikasi berjalan pada ${port}!`));
