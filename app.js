//  to controll ur website

const express = require("express");
const app = express();
const port = 5000;
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
const Webprodect = require("./models/webprodectSchema");
const User = require("./models/User");





// for auto refresh
const path = require("path");
const livereload = require("livereload");
const liveReloadServer = livereload.createServer();
liveReloadServer.watch(path.join(__dirname, "public"));

const connectLivereload = require("connect-livereload");
app.use(connectLivereload());

liveReloadServer.server.once("connection", () => {
  setTimeout(() => {
    liveReloadServer.refresh("/");
  }, 100);
});

// mongoose
const mongoose = require("mongoose");

mongoose
.connect(
  "mongodb+srv://mezo:CR7@cluster0.af6ud0j.mongodb.net/mezo?retryWrites=true&w=majority"
)
  .then((result) => {
    app.listen(port, () => {
      console.log(`Example app listening at http://localhost:${port}`);
    });
  })

  .catch((err) => {
    console.log(err);
  });

app.get("/", (req, res) => {
  res.redirect("/all-articles");
});

app.get("/all-articles", (req, res) => {
  // res.render("index", { mytitle: "HOME" });

  // result = Array of objects inside mongo database

  Webprodect.find()
    .then((result) => {
      res.render("index", { mytitle: "HOME", arrArticle: result });
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get("/add-new-article", (req, res) => {
  res.render("add-new-article", { mytitle: "create new article" });
});
app.get("/my_account", (req, res) => {
  res.render("my_account", { mytitle: "create new article" });
});
app.get("/register", (req, res) => {
  res.render("register", { mytitle: "create new article" });
});

app.get("/login", (req, res) => {
  res.render("login", { mytitle: "create new article" });
});

app.get("/signup", (req, res) => {
  res.render("signup", { mytitle: "create new article" });
});

app.post("/all-articles", (req, res) => {
  const user = new User(req.body);

  // console.log(req.body)

  user
    .save()
    .then((result) => {
      res.redirect("/all-articles");
    })
    .catch((err) => {
      console.log(err);
    });
});












/*
app.get("/all-articles/article-details", (req, res) => {
  // result =   object  inside mongo database

  Article.findById("613a9a265e04d99a04ee969e")
    .then((result) => {
      res.render("details", { mytitle: "ARTICLE DETAILS", objArticle: result });
    })
    .catch((err) => {
      console.log(err);
    });
});*/

app.get("/all-articles/:id", (req, res) => {
  // result =   object  inside mongo database

  Webprodect.findById(req.params.id)
    .then((result) => {
      res.render("details", { mytitle: "ARTICLE DETAILS", objArticle: result });
    })
    .catch((err) => {
      console.log(err);
    });
});











//  404
app.use((req, res) => {
  res.status(404).send("Sorry can't find that!");
});
