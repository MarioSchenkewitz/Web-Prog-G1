// wir benötigen http funktionen
const express = require("express");
// wird benötigt um formular daten lesen zu können
const bodyParser = require("body-parser");
//cookies
const cookieParser = require("cookie-parser");
//unique identifier for users
const {
  v4: uuidv4
} = require("uuid");
const { redirect } = require("express/lib/response");

// wir machen unsere applikation bekannt
const app = express();
const port = 8080;

app.use(cookieParser());

// express js muss wissen, dass es den body-parser verwenden soll
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(bodyParser.urlencoded({
  extended: true
}));

const userlist = [];


function userCheck(req, res, next) {
  let user = {
    id: "",
    name: "",
    kommentare: [],
    favoriten: [],
    funfacts: 0,
    catwatch: 0,
    katzenspielzeug: 0
  };

  if (!req.cookies.username) {
    user.id = uuidv4()

    console.log("logging in");
    res.cookie("username", user.id, {
      maxAge: 900000,
      httpOnly: true,
      secure: true
    })
    userlist.push(user);
    // console.log("userlist:");
    // console.log(userlist);
  } else {
    if (!userlist.find(user => user.id === req.cookies.username)) {
      user.id = req.cookies.username;
      userlist.push(user);
    }   
  }
  next()
}
function addVisit(req, res, next){
  var currentUrl = req.url.toString().replace(/\//g, "").replace(/.html/g,"");

  if(currentUrl === "funfacts" || currentUrl === "catwatch" || currentUrl === "katzenspielzeug"){
    for (const obj of userlist) {
      if (obj.id === req.cookies.username) {
        obj[currentUrl]++;
        break;
      }
    }
  }
  next();
}

app.use("/", userCheck, addVisit, express.static("./public"))

// und starte den server und lausche auf Port 8080
app.listen(port, () => {
  console.log(`Katzopedia app listening on port ${port}`);
});

app.get("/funfacts/comment", userCheck, getComment);
app.post("/funfacts/comment", userCheck, addComment);

app.get("/catwatch/comment", userCheck, getComment);
app.post("/catwatch/comment", userCheck, addComment);

app.get("/katzenspielzeug/comment", userCheck, getComment);
app.post("/katzenspielzeug/comment", userCheck, addComment);

const comments = {
  funfactscomment: [],
  catwatchcomment: [],
  katzenspielzeugcomment: []
};

function addComment(req, res) {
  var currentUrl = req.url.toString().replace(/\//g, "");
  var name;
  if (req.body.name) {
    name = req.body.name;
  } else {
    name = "Anonymous";
  }
  if (req.body.kommentar) {
    //add comment to user
    for (const obj of userlist) {
      if (obj.id === req.cookies.username) {
        obj.kommentare.push(name + ": " + req.body.kommentar)
        break;
      }
    }
    //add comment to commentslist
    comments[currentUrl].push(name + ": " + req.body.kommentar)
    console.log(comments)
  }

  res.redirect('back');
  res.send();
}

function getComment(req, res) {
  var currentUrl = req.url.toString().replace(/\//g, "")
  res.json(comments[currentUrl]);
}

//für favoriten vllt ein userobjekt anlegen mit ID, favoriten als array und kommentare als array.
//dann ein array aus user objekten?

app.get('/funfacts/fav', getFav);
app.post('/funfacts/fav', addFav);

app.get("/catwatch/fav", getFav);
app.post("/catwatch/fav", addFav);

app.get("/katzenspielzeug/fav", getFav);
app.post("/katzenspielzeug/fav", addFav);

function addFav(req, res) {
  var currentUrl = req.url.toString().replace(/\/fav/g, ".html");
  //const click = {clickTime: new Date()};
  //console.log(click);
  let user = userlist.find(user => user.id === req.cookies.username)
  if (user) {
    if (!user.favoriten.includes(currentUrl)) {
      for (const obj of userlist) {
        if (obj.id === req.cookies.username) {
          obj.favoriten.push(currentUrl)
          break;
        }
      }
      res.json('Favorit entfernen')
    } else {
      for (const obj of userlist) {
        if (obj.id === req.cookies.username) {
          const index = obj.favoriten.indexOf(currentUrl)
          obj.favoriten.splice(index, 1)
          break;
        }
      }
      res.json('Favorit hinzufügen')
    }
  }
};

function getFav(req, res) {
  var currentUrl = req.url.toString().replace(/\/fav/g, ".html");
  let user = userlist.find(user => user.id === req.cookies.username)
  if (user) {
    if (user.favoriten.includes(currentUrl)) {
      res.json('Favorit entfernen')
    } else {
      res.json('Favorit hinzufügen')
    }
  }
};

app.get('/favs', (req, res) => {
  var currentUrl = req.url.toString().replace(/\/fav/g, ".html");
  let user = userlist.find(user => user.id === req.cookies.username)

  if (user) {
    res.json(user.favoriten);
  }
});

function getMostVisited(req, res) {
  let mostVisited = []

  let user = userlist.find(user => user.id === req.cookies.username)
  if (user) {
    mostVisited.push("funfacts: " + user.funfacts);
    mostVisited.push("catwatch: " + user.catwatch);
    mostVisited.push("katzenspielzeug: " + user.katzenspielzeug);
  }
  res.json(mostVisited)
};

app.get("/mostVisited", getMostVisited);