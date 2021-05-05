
# gradapi
Homemade API designed to generate CSS gradients

## About
This API generates JSON responses with values to create gradients in CSS. 

## Install
```
$ git clone https://github.com/benDotDirectory/gradapi.git gradapi
$ cd gradapi
$ npm install
```

## Start
```$ npm start```

## Configure
Create a ```.env``` file in the directory, with the following contents
```
production=0 #Enable (set to 1  for console logging and 'api-server/index.html' test page
port=3000 # Port for express server
hits_per_hr=100 # Rate limiter
```


This server uses [express-rate-limit](https://www.npmjs.com/package/express-rate-limit) to rate limit requests. 

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


