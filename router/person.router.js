const router = require("express").Router();

const data = [];

//creating new person
router.post("/person/new", (req, res) => {
  let person = {
    name: req.body.name,
    age: req.body.age,
  };
  data.push(person);
  res.json(data);
});

//getting the list of all persons' record
router.get("/person", (req, res) => {
  res.json(data);
});

module.exports = router;
