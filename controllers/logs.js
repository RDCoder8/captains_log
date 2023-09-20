const express = require("express")
const router = express.Router()
const Logs = require('../models/logs')
const seedLogs = require('../seed/seedLogs')

//Seed route
router.get('/logs/seed', async (req, res) => {
    try {
        const createdLog = await Logs.create(seedLogs)
        res.status(201).send(createdLog)
    } catch (error) {
        res.status(400).send(error)
    }
    
})

//Index
router.get("/logs", async (req, res) => {
    try {
        const foundLogs = await Logs.find({})
        res.render("Index", {logs: foundLogs})
    } catch (error) {
        res.status(400).send(error)
    }
    
})

//New
router.get('/logs/new', (req, res) => {
    res.render('New')
})

//Delete
router.delete('/logs/:id', async (req, res) => {
    try {
        await Logs.findByIdAndDelete(req.params.id)
        res.status(200).redirect("/logs")
    } catch (error) {
        res.status(400).send(error)
    }
})

//Update
router.put('/logs/:id', async (req, res) => {
    try {
        req.body.shipIsBroken = req.body.shipIsBroken === "on"
        const updatedLog = await Logs.findByIdAndUpdate(req.params.id, req.body, {new: true})
        res.status(201).redirect("/logs")
    } catch (error) {
        res.status(400).send(error)
    }
})

//Create
router.post('/logs', async (req, res) => {
    try {
        req.body.shipIsBroken = req.body.shipIsBroken === "on"
        const createdLog = await Logs.create(req.body)
        res.status(201).redirect("/logs")
    } catch (error) {
        res.status(400).send(error)
    }
    
})

//Edit
router.get('/logs/:id/edit', async (req, res) => {
    try {
        const foundLog = await Logs.findById(req.params.id)
        res.status(200).render('Edit', {log : foundLog})
    } catch (error) {
        res.status(400).send(error)
    }
})

//Show
router.get('/logs/:id', async (req, res) => {
    try {
        const foundLog = await Logs.findById(req.params.id)
        res.status(200).render("Show", {log : foundLog})
    } catch (error) {
        res.status(400).send(error)
    }
})

//Catch all
router.get('*', (req, res) => {
    res.redirect('/logs')
})

module.exports = router