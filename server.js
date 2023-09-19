require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const mongoose = require('mongoose')
const methodOverride = require('method-override')
const Logs = require('./models/logs')
const seedLogs = require('./seed/seedLogs')

////////Database Connection
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  mongoose.connection.once("open", () => {
    console.log("Checking Captain's Data")
  })
  ////////////////////////

//View Engine
app.set("view engine", 'jsx')
const jsxViewEngine = require('jsx-view-engine')
app.engine("jsx", jsxViewEngine())

//Middleware
app.use(express.urlencoded({extended: false}))
app.use(methodOverride('_method'));

//Seed route
app.get('/logs/seed', async (req, res) => {
    try {
        const createdLog = await Logs.create(seedLogs)
        res.status(201).send(createdLog)
    } catch (error) {
        res.status(400).send(error)
    }
    
})

//Index
app.get("/logs", async (req, res) => {
    try {
        const foundLogs = await Logs.find({})
        res.render("Index", {logs: foundLogs})
    } catch (error) {
        res.status(400).send(error)
    }
    
})

//New
app.get('/logs/new', (req, res) => {
    res.render('New')
})

//Delete

//Update

//Create
app.post('/logs', async (req, res) => {
    try {
        req.body.shipIsBroken = req.body.shipIsBroken === "on"
        const createdLog = await Logs.create(req.body)
        res.status(201).send(createdLog)
    } catch (error) {
        res.status(400).send(error)
    }
    
})

//Edit

//Show

//Catch all
app.get('*', (req, res) => {
    res.redirect('/logs')
})

app.listen(PORT, () => {
    console.log(`Incoming messaging on port ${PORT} captain!`)
})
