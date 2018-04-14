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

        // ID's for Every Class
        //-------------------------------
        // 01 - Brute
        // 02 - Tinkerer
        // 03 - Spellweaver
        // 04 - Scoundrel
        // 05 - Cragheart
        // 06 - Mindthief
        
        // 07 - Sun
        // 08 - Three Spears
        // 09 - Concentric Circles
        // 10 - Moon/Eclipse
        // 11 - Cthulhu
        // 12 - Lightning Bolt
        // 13 - Music Note
        // 14 - Spiky/Angry Face
        // 15 - Saw
        // 16 - Triforce
        // 17 - Two-Mini

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
                case "Cragheart":
                    class_id = 5;
                    break;
                case "Mindthief":
                    class_id = 6;
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
            res.json({ error: "We didn't get your name from your browser!" });
        } else {
        
            // find character with input name
            db.Character.findOne({ where: { name: req.body.name} }).then(function (data) {
                if (!data) {
                    res.json({
                        success: false,
                        error: 'Character not found.',
                        id: null
                    });
                } else {
                    res.json({
                        success: true,
                        message: 'Character found.',
                        id: data.id
                    });
                }
            }).catch(function (err) {
                res.json({ error: err.message });
            });;

        }
    });

    // Get route for getting a single user's posts that they created
    app.get("/api/characterinfo", function (req, res) {

        var token = req.headers.authorization;

        //find all of the posts to this user
        db.Character.findOne({ 
            where: { id: token }
        }).then(function (data) {

            if (!data) {
                res.json({
                    success: false,
                    error: 'Character info not found.'
                });
            } else {
                data.success = true;
                res.json(data);
            }

        }).catch(function (err) {
            res.json({ error: err.message });
        });;

    });

    // update character info
    app.put("/api/characterinfo", function (req, res) {
        db.Character.update({
            name: req.body.name,
            xp: req.body.xp,
            gold: req.body.gold,
            notes: req.body.notes,
            perk_1: req.body.perk_1,
            perk_2: req.body.perk_2,
            perk_3: req.body.perk_3,
            perk_4: req.body.perk_4,
            perk_5: req.body.perk_5,
            perk_6: req.body.perk_6,
            perk_7: req.body.perk_7,
            perk_8: req.body.perk_8,
            perk_9: req.body.perk_9,
            perk_10: req.body.perk_10,
            perk_11: req.body.perk_11,
            perk_12: req.body.perk_12
        }, {
            where: {
                id: req.body.id
            }
        }).then(function (data) {
            if (!data) {
                res.json({
                    success: false,
                    error: 'Character info not found.'
                });
            } else {
                data.success = true;
                res.json(data);
            }
        }).catch(function (err) {
            res.json({ error: err.message });
        });
    });

} // close module export function
