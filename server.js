const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000

//View Engine
app.set("view engine", 'jsx')
const jsxViewEngine = require('jsx-view-engine')
app.engine("jsx", jsxViewEngine())

//Index
app.get("/logs", (req, res) => {
    res.send("Index")
})

//New
app.get('/logs/new', (req, res) => {
    res.render('New')
})

//Delete

//Update

//Create

//Edit

//Show

//Catch all
app.get('*', (req, res) => {
    res.redirect('/logs')
})

app.listen(PORT, () => {
    console.log(`Incoming messaging on port ${PORT} captain!`)
})
