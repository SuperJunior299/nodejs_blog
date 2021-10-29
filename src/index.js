const express = require('express')
const app = express()
const port = 3000
const morgan = require('morgan')
const handlebars = require('express-handlebars')
const path = require('path')

const route = require('./route');

app.use(express.static(path.join(__dirname,'public')));

// Template engine + already exchange extname(.duoi)
app.engine('.hbs', handlebars({extname: '.hbs'}));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname,'resources/views'));
// extend libary

app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());

// HTTP logger (view report require)
app.use(morgan('combined'))

// trang init

route(app);

// app.get('/home', (req, res) => {
//   res.render('home');
// })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})



