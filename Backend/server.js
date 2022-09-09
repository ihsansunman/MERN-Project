const express = require("express");
const cors = require("cors")
const dotenv = require("dotenv").config();
const { hataYakala } = require("./middlewares/errorMiddleware");
const baglan = require("./config/db");
const colors = require("colors");

const PORT = process.env.PORT;

const app = express();
app.use(cors())

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api/notlar", require("./routes/notRoute"));
app.use('/api/kullanicilar',require('./routes/kullaniciRoute'));
app.use(hataYakala);
baglan();

console.log(dotenv);

app.listen(PORT, () =>
  console.log(`Server ${PORT} üzerinden yayında.`.magenta.italic)
);
