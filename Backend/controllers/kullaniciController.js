const registerKullanici = (req, res) => {
  res.json({ mesaj: "Kullanıcı Register İşlemleri" });
};

const loginKullanici = (req, res) => {
  res.json({ mesaj: "Kullanici Login İşlemleri" });
};

const getKullanici = (req, res) => {
  res.json({ mesaj: "Kullanıcı Get İşlemleri" });
};

module.exports = {
  registerKullanici,
  loginKullanici,
  getKullanici,
};
