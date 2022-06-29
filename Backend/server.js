const { request, response } = require("express");
const express = require("express");
const dotenv = require("dotenv").config();

const PORT = process.env.PORT;

const app = express();

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use("/api/notlar", require("./routes/notRoute"));

app.listen(PORT, () => console.log(`Server ${PORT} üzerinden yayında.`));
