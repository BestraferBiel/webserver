const express = require('express')
const hbs = require('hbs');
require ("dotenv").config();

const app = express()
const port = process.env.PORT;




// Handelbars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');



// Servir contenido estatico 
app.use(express.static("public"));


app.get('/index', (req, res) => {
  res.render("home", {
    nombre: "Gabriel Cabrera",
    titulo: "Curso de Node"
  })


})

app.get('/generic', (req, res) => {
  res.render("generic", {
    nombre: "Gabriel Cabrera",
    titulo: "Curso de Node"
  })


})

app.get('/elements', (req, res) => {
  res.render("elements", {
    nombre: "Gabriel Cabrera",
    titulo: "Curso de Node"
  })


})





// app.get('/generic', (req, res) => {
//   res.sendFile(__dirname + "/public/generic.html")


// })
// app.get('/elements', (req, res) => {
//   res.sendFile(__dirname + "/public/elements.html")
// })


// app.get("*", (req, res) => {
//   res.sendFile(" 404 | Page not fond")
// })


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})