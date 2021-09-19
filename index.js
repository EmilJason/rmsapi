const express = require("express");
const cors = require("cors");
const app = express();

let PORT = process.env.PORT || 1995;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(require("./router/menu.router"));
app.use(require("./router/person.router"));
app.get("/", (req, res) => {
  res.send("Your in homepage");
});

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
