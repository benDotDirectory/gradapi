
# gradapi
Basic homemade API to generate CSS gradients - gradapi: "Gradient API"

## About
This is the first API/API server I've developed. It generates JSON responses with values to create gradients in CSS. This project is experimental and not intended for professional applications. This respository contains:
- ```gradapi.js``` - generates the gradients
- ```index.js``` - express server to handle API requests

## Install
```
git clone https://github.com/bendotbike/gradapi gradapi
cd gradapi
npm install
```

## Start
```node .```

## Configure
All configuration is done in ```index.js``` (@TODO: make seperate config file).
The environment variable ```production``` can be set to ```1``` to enable production-mode, which controls logging and rate-limiting. Enable dev mode (set ```production``` to ```0```) for a test ```index.html``` page to be displayed at ```/```.

This server uses [express-rate-limit](https://www.npmjs.com/package/express-rate-limit) to rate limit requests. Very basic, as this is designed to be a public API (no authentication). Configure it in ```index.js``` as well.

## Usage
Note:
- All API calls reside under ```/api/v1/```.
- All API calls return JSON with values to insert into CSS to create a gradient
- Gradient colors are randomly generated and each API call returns from 2-5 colors

### GET ```/api/v1/generate_linear_gradient```
Example response: 

```{"angle":"333deg","colors":["#10a89d","#2817b8"]}```


### GET ```/api/v1/generate_transparent_gradient```
Example response:

```{"angle":"232deg","colors":["rgba(60,57,45,0.9)","rgba(110,105,219,0.7)","rgba(179,98,207,0.9)","rgba(244,113,123,0.8)","rgba(107,114,154,0.1)"]}```


### GET ```/generate_radial_gradient```
Example response:

```{"shape":"circle","size":"farthest-corner","colors":["#d79416","#87dd8d"]}```
