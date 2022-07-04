const asyncHandler = require("express-async-handler");
const Kullanici = require("../models/kullaniciModel");
const bcrypt = require("bcryptjs");

const registerKullanici = asyncHandler(async (req, res) => {
  const { kullaniciAd, email, parola } = req.body;

  if (!kullaniciAd || !email || !parola) {
    res.status(400);
    throw new Error("Gerekli alanları doldurulunuz.");
  }

  const kullanici = await Kullanici.findOne({ email });

  if (kullanici) {
    res.status(400);
    throw new Error("Bu mail zaten sistemde kayıtlıdır.");
  }

  const salt = await bcrypt.genSalt(10);
  const sifrelenmisParola = await bcrypt.hash(parola, salt);

  const yeniKullanici = await Kullanici.create({
    kullaniciAd,
    email,
    parola: sifrelenmisParola,
  });

  if (yeniKullanici) {
    res.status(201).json({
      _id: yeniKullanici.id,
      kullaniciAd: yeniKullanici.kullaniciAd,
      email: yeniKullanici.email,
    });
  } else {
    res.status(400);
    throw new Error("Geçersiz kullanıcı verisi");
  }

  res.json({ mesaj: "Kullanıcı Register İşlemleri" });
});

const loginKullanici = asyncHandler(async (req, res) => {
  const { email, parola } = req.body;
  const kullanici = await Kullanici.findOne({ email });

  if (kullanici && (await bcrypt.compare(parola, kullanici.parola))) {
    res.json({
      __id: kullanici.id,
      kullaniciAd: kullanici.kullaniciAd,
      email: kullanici.email,
    });
  } else {
    res.status(400);
    throw new Error("Geçersiz Email veya Parola");
  }

  res.json({ mesaj: "Kullanici Login İşlemleri" });
});

const getKullanici = (req, res) => {
  res.json({ mesaj: "Kullanıcı Get İşlemleri" });
};

module.exports = {
  registerKullanici,
  loginKullanici,
  getKullanici,
};
