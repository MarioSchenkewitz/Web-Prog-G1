const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", express.static(__dirname + "/public"));

const player = { duration: 0, currentTime: 0 };

app.get("/player", (_, res) => res.json(player));
app.put("/player", (req, res) => {
  console.log(JSON.stringify(req.body));
  player.duration = req.body.duration || 0;
  player.currentTime = req.body.currentTime || 0;
  res.send();
});

app.listen(3000);
