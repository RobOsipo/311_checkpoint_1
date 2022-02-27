const express = require('express')
const bodyParser = require("body-parser");
const app = express()
const userRoutes = require('./routes/users.js');
const port = process.env.PORT || 4000

// My Middleware
app.use(bodyParser.json()); 
app.use(userRoutes)

// Error handling #1
//if any route besides users is used for get, post, put request it sends back error message
app.all("*", (req, res) => {
  res.status(404).send('<h1 style="font-size: 50px">Resource not found, incorrect end-point</h1>')
})

// My base route 
app.get('/', (req, res) => res.send('default route'))

app.listen(port, () => {
  console.log('app is listening on:', port)
})