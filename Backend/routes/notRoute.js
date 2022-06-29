const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({ mesat: "get notlar" });
});

router.post('/', (req, res)=>{
    res.status(200).json({mesaj: 'post not'})
})

router.put('/:id', (req,res)=>{
    res.status(200).json({mesaj: `put ${req.params.id} idli not`})
})

router.delete('/:id',(req,res)=>{
    res.status(200).json({mesaj: `delete ${req.params.id} idli not`})
})

module.exports = router;
