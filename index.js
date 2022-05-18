

var bodyParser = require('body-parser');

const express = require('express');

const textToImage = require('text-to-image');

const app = express();

// Parses the body for POST, PUT, DELETE, etc.
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/', async function (req, res, next) {

  console.log(req.body);
  
  let text = req.body.text;

  let config = req.body.config;

  const dataUri = await textToImage.generate(text, config);

  res.send({
    url: dataUri
  })

});

app.get('/test', function (req, res, next) {

  res.send({
    Response : 'Working fine'
  })

});

var port = process.env.PORT || 3000;

app.listen(port);