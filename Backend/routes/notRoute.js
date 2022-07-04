const express = require("express");
const {
  getNotlar,
  setNotlar,
  updateNotlar,
  deleteNotlar,
} = require("../controllers/notController");
const router = express.Router();

router.route('/').get(getNotlar).post(setNotlar)
router.route('/:id').put(updateNotlar).delete(deleteNotlar)

module.exports = router;
