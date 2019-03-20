const express = require('express')
const app = express()
var path = require('path');
// import React, { Component } from 'react';
// import Particles from 'react-particles-js';
const port = 3000

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/pages/index.html'));
});

app.get('/programs', function(req, res) {
  res.sendFile(path.join(__dirname + '/pages/programs.html'));
});



app.listen(port, () => console.log(`Example app listening on port ${port}!`))