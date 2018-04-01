// Import the model to use its database functions.
var path = require("path");
var db = require("../models");

// Auth Packages
var jwt = require("jsonwebtoken");

module.exports = function (app) {

  // HTML ROUTES
  //=================================================================================

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads home.html
  app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });

  // login route loads login.html
  app.get("/login", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  // register route loads register.html
  app.get("/register", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/register.html"));
  });

  // API ROUTES
  //=================================================================================

  // creates new character
  app.post("/api/register", function (req, res) {

    // 01 - Brute | Tank Build
    // 02 - Tinkerer
    // 03 - Spellweaver
    // 04 - Scoundrel

    var class_id = null;

    if (req.body.class) {
        switch(req.body.class) {
            case "Brute":
                class_id = 1;
                break;
            case "Tinkerer":
                class_id = 2;
                break;
            case "Spellweaver":
                class_id = 3;
                break;
            case "Scoundrel":
                class_id = 4;
                break;
        }
    }

    // store new char into db
    db.Character.create({
      name: req.body.name,
      class_id: class_id,
      xp: 0,
      gold: 0,
      notes: 0
    }).then(function () {
        res.json({ success: true });
    }).catch(function (err) {
      res.json({ error: err.message });
    });
  });

  // allows user to login
  app.post("/api/login", function (req, res) {
    console.log(req.body);
    if (!req.body.name) {
        res.json({ error: "We didn't get anything from your browser!" });
    } else {
     
        // find character with input name
        db.Character.findOne({ where: { name: req.body.name} }).then(function (data) {
            console.log(data);

            if (!data) {
                res.json({
                    success: false,
                    error: 'Character not found.',
                });
            } else {
                res.json({
                    success: true,
                    message: 'Character found.',
                    id: data.id
                });
            }
        });

    }

  });

} // close module export function
