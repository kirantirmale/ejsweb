require('./config/db')
const express = require('express')
const app = express()
const port = 3000
const router = require('./router')
const session = require('express-session') 
const { errorHandler } = require("./utils/errorHandler"); 

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(session({
  
    secret: 'vcxvbc',
  
    resave: true,
  
    saveUninitialized: true
  }))

app.use("/",router) 
app.use(errorHandler)


app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
})