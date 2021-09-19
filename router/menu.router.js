const router = require("express").Router();

router.get("/menu", (req, res) => {
  res.send("Your in Menu Page");
});

module.exports = router;
