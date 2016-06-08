var express = require('express');
var app = express();
var server = app.listen(process.env.PORT || 8080,function(){
  console.log ("your server is listening, darling...");
});
//base url
app.get('/', function (req,res){
  console.log('hello from base url get');
  res.write('we are in base path and it is so pretty here!' );
  res.end();
  
});
