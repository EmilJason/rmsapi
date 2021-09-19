const router = require("express").Router();

const data = [];

router.post("/person", (req, res) => {
  let person = {
    name: req.body.name,
    age: req.body.age,
  };
  data.push(person);
  res.json(data);
});

module.exports = router;
