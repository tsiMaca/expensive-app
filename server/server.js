const path = require('path')
const express = require('express');
const buildPath = path.join(__dirname, '..', 'build')
const app = express();
const port = 8080;
app.use(express.static(path.join(buildPath)));
app.get('*', (req, response)=>{
  response.sendFile(path.join(buildPath,'index.html'))
});

app.listen(port, ()=> {
console.log('Init express from port 8080')});