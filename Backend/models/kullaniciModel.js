const mongoose = require("mongoose");

const kullaniciSchema = mongoose.Schema(
  {
    kullaniciAd: {
      type: String,
      required: [true, "Kullanıcı adı belirleyiniz."],
    },
    email: {
      type: String,
      required: [true, "Lütfen E-Posta Belirleyiniz."],
      unique: true,
    },
    parola: {
      type: String,
      required: [true, "Lütfen Parola Belirleyiniz"],
    },
  },
  {
    timestramps: true,
  }
);

module.exports = mongoose.model("Kullanici", kullaniciSchema);
