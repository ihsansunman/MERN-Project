const express = require("express");
const {
  getNotlar,
  setNotlar,
  updateNotlar,
  deleteNotlar,
} = require("../controllers/notController");
const router = express.Router();

const {kullaniciKontrol} = require('../middlewares/authMiddleware')

router.route('/').get(kullaniciKontrol, getNotlar).post(kullaniciKontrol, setNotlar)
router.route('/:id').put(kullaniciKontrol, updateNotlar).delete(kullaniciKontrol, deleteNotlar)

module.exports = router;
