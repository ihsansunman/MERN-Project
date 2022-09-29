const hataYakala = (err, res) => {
  const statusCode = res.statusCode ? res.statusCode : 500;

  res.status(statusCode);
  res.json({
    mesaj: err.message,
    aciklama: process.env.NODE_ENV=="production" ? null : err.stack
  });
};

module.exports={
    hataYakala
}