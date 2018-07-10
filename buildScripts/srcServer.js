var express = require('express');
var open = require('open');

/* eslint-disable no-console */

const port = 3000;
const app = express();

app.get('/',function(req, res){
    res.sendFile('/Users/lihonghan/git/learn_group/index.html')
});
app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    open('http://localhost:' + port);
  }
});