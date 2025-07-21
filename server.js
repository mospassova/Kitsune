const express = require('express');
const http = require('http');
const app = express();

app.use(express.static(__dirname));

// Serve the index.html file
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Handle the button press request
app.get('/button', (req, res) => {
  http.get('http://192.168.228.40/button', (httpRes) => {
    let data = '';
    httpRes.on('data', (chunk) => {
      data += chunk;
    });
    httpRes.on('end', () => {
      console.log(data);
      res.send('Button pressed!');
    });
  }).on('error', (err) => {
    console.error(`Error: ${err.message}`);
    res.status(500).send('Error sending button press request');
  });
});

// Return a 404 error for other requests
app.use((req, res) => {
  res.status(404).send('404 - Page not found');
});

// Start the server
const port = 8080;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
