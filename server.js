require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const mongoose = require('mongoose')
const methodOverride = require('method-override')
const Logs = require('./models/logs')
const seedLogs = require('./seed/seedLogs')
const logRoutes = require('./controllers/logs')

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

app.use("/", logRoutes)

app.listen(PORT, () => {
    console.log(`Incoming messaging on port ${PORT} captain!`)
})
