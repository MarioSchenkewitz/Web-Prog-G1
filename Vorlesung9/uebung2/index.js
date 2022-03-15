const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", express.static(__dirname + "/public"));

const player = { state: "paused" };

app.get("/player", (_, res) => res.json(player));
app.put("/player", (req, res) => {
  console.log(JSON.stringify(req.body));
  player.state = req.body.state || player.state;
  player.seek = req.body.seek || (req.body.seek === 0 ? 0 : player.seek);
  res.json(player);
});

app.listen(3000);
