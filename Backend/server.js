const { request, response } = require("express");
const express = require("express");
const dotenv = require("dotenv").config()

const PORT = process.env.PORT;

const app = express();

app.get(`/api/notlar`,(request, response)=>{
    // response.send(`Notlar`)
    var not ={
        ad:`İlk Not`,
        icerik: `İlk içerik`,
        oncelik: 3
    }
    response.status(200).json(not)
})

app.listen(PORT, ()=> console.log(`Server ${PORT} üzerinden yayında.`));
