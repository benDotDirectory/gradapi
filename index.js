// IF PRODUCTION, 1
process.env.production = 0;

const express = require("express");
const path = require("path");
const rateLimit = require("express-rate-limit");

const app = express();

const port = 3000;

var gradapi = require(__dirname + "/gradapi.js");

// Reminder if we are in dev mode
if (process.env.production == 0) {
    console.log("-- Alert: we are in DEV MODE! Be sure to change before pushing to production! --");
}

// If we are in development, show the index helper page
if (process.env.production == 0) {
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname + "/index.html"));
    });
}

// Make sure we are in production to enable rate-limiting
if (process.env.production == 1) {
    app.set("trust proxy", 1);

    const limiter = rateLimit({
        windowMs: 3600000, // 1 hour
        max: 1 // 1 request per hour
    });

    app.use(limiter);
}

app.get("/api/v1/generate_linear_gradient", function(req, res) {
    res.json(gradapi.generateLinearGradient()).end();
});

app.get("/api/v1/generate_transparent_linear_gradient", function(req, res) {
    res.json(gradapi.generateTransparentLinearGradient()).end();
});

app.get("/api/v1/generate_radial_gradient", function(req, res) {
    res.json(gradapi.generateRadialGradient()).end();
})

app.listen(port, function() {
    console.log("gradapi-server listening @ port " + port);
});
