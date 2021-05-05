/* 
*   index.js
*   --------
*   Main entry point for gradadpi.
*   Run: 'npm start'
*/

/*
*   Imports & config
*/

const express = require("express");
const path = require("path");
const rateLimit = require("express-rate-limit");
const winston = require("winston");
const app = express();
var gradapi = require(__dirname + "/gradapi.js");
require("dotenv").config({ path: path.join(__dirname, ".env") });

const port = process.env.port || 3000;

const logger = winston.createLogger({
    transports: [
        new winston.transports.File({ json: false, filename: "server.log" })
    ],
    exitOnError: false
});


// IF PRODUCTION, 1
var productionEnabled = process.env.production || 0; // Production off by default


/*
*   Dev/production-specific code
*/
//  Display reminder if dev mode
if (productionEnabled) {

    // Set winston to log to console
    logger.add(new winston.transports.Console());

    logger.info("** [!]: You are in DEV MODE! Be sure to change before pushing to production! **");
    logger.info("Test page enabled at: http://localhost:" + port);
}

// If we are in development, show the index helper page
if (process.env.production == 0) {
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname + "/index.html"));
    });
}

// Enable rate-limiting if in production
if (process.env.production == 1) {
    app.set("trust proxy", 1);

    const limiter = rateLimit({
        windowMs: 3600000, // 1 hour
        max: process.env.hits_per_hr || 10 // 10 request per hour
    });

    app.use(limiter);
}

/*
*   Map endpoints
*/
app.get("/api/v1/generate_linear_gradient", function(req, res) {
    logger.info("Revieved 'generate_linear_gradient' request");
    res.json(gradapi.generateLinearGradient()).end();
});

app.get("/api/v1/generate_transparent_linear_gradient", function(req, res) {
    logger.info("Revieved 'generate_transparent_linear_gradient' request");
    res.json(gradapi.generateTransparentLinearGradient()).end();
});

app.get("/api/v1/generate_radial_gradient", function(req, res) {
    logger.info("Revieved 'generate_transparent_linear_gradient' request");
    res.json(gradapi.generateRadialGradient()).end();
});

// Listen
app.listen(port, function() {
    logger.info("gradapi-server listening @ port " + port);
});