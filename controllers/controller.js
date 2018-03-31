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

} // close module export function
