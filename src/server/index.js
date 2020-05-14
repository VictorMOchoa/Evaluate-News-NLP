const dotenv = require('dotenv');
dotenv.config();

var path = require('path')
var aylien = require("aylien_textapi")
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')

const app = express()
app.use(express.json());
const cors = require('cors')
app.use(cors())
app.use(express.static('dist'))

var textapi = new aylien({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
});

console.log(__dirname)

app.get('/', function (req, res) {
  // for prod...
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

app.post('/getSentiment', function (req, res) {
  let url = req.body.urlFromInput;
  return textapi.sentiment( { 'url': url },
    (error, response) => {
      if (error) {
        console.log("Received an error: ")
        return error;
      } else {
        res.send(response);
      }
  });
})
