const express = require("express");
const app = express();
const port = 5000;
const berita = require("./routes/berita");

try {
  await mongoose.connect("", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
  });

  console.log("MongoDB Connected...");
} catch (err) {
  console.error(err.message);
  //Exit process
  process.exit(1);
}

app.use("/news", berita);

app.listen(port, () => console.log(`Aplikasi berjalan pada ${port}!`));
