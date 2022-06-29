const express = require("express");
const {
  getNotlar,
  setNotlar,
  updateNotlar,
  deleteNotlar,
} = require("../controllers/notController");
const router = express.Router();

router.get("/", getNotlar);

router.post("/", setNotlar);

router.put("/:id", updateNotlar);

router.delete("/:id", deleteNotlar);

module.exports = router;
