const express = require("express");
const {
  registerKullanici,
  loginKullanici,
  getKullanici,
} = require("../controllers/kullaniciController");

const router = express.Router();

router.post("/", registerKullanici);
router.post("/login", loginKullanici);
router.get("/kullanici", getKullanici);

module.exports = router;
