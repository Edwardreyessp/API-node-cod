const { Router } = require("express")
const app = Router()
const _ = require('underscore')
const guns = require('../sample.json')

app.get('/', (req, res) => {
    res.json(guns)
})

app.post('/', (req, res) => {
    const {name, type} = req.body
    
    if(name && type) {
        const id = guns.length + 1
        const newGun = {id, ...req.body}
        guns.push(newGun)
        res.json('Saved');
    }
    else
        res.status(500).json("Wrong request");
})

app.put('/', (req, res) => {
    const {id} = req.body
    const {name, type} = req.body

    if(id && name && type) {
        _.each(guns, (gun, i) => {
            if(gun.id == id) {
                gun.name = name
                gun.type = type
            }
        })
        res.json('Changed')
    }
    else
        res.status(500).json("Wrong request")
})

app.delete('/', (req, res) => {
    const {id} = req.body
    
    if(id) {
        _.each(guns, (gun, i) => {
            if(gun.id == id)
                guns.splice(i, 1)
        })
        res.json('Deleted')
    }
    else
        res.status(500).json("Wrong request");
})

module.exports = app