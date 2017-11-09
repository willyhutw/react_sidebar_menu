const express = require('express');

let app = express();

app.use('/templates', express.static(__dirname + '/templates'));
app.use('/static', express.static(__dirname + '/static/dist'));
app.use('/fonts', express.static(__dirname + '/static/dist/fonts'));
app.use('/images', express.static(__dirname + '/static/dist/images'));

app.get('/', (req, res)=> {
  res.sendFile(__dirname + '/templates/index.html');
});

app.listen(3001, function() {
  console.log('node app listening on port 3001...')
});

