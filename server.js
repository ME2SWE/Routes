const express = require('express');
const path = require('path');
const app = express();

//parses req data
// app.use(express.json());
app.use( express.static(path.join(__dirname, './public')));

app.listen(8080, console.log('Server listening on 3000'));