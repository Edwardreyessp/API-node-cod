const { Router } = require("express")
const router = Router()
const _ = require('underscore')
const characters = require('../sample.json')

router.get('/', (req, res) => {
    res.json(characters)
})

router.post('/', (req, res) => {
    const {name, user} = req.body
    
    if(name && user) {
        const id = characters.length + 1
        const newCharacter = {id, ...req.body}
        characters.push(newCharacter)
        res.json('Saved');
    }
    else
        res.status(500).json("Wrong request");
})

router.put('/', (req, res) => {
    const {id} = req.body
    const {name, user} = req.body

    if(id && name && user) {
        _.each(characters, (character, i) => {
            if(character.id == id) {
                character.name = name
                character.user = user
            }
        })
        res.json('Changed')
    }
    else
        res.status(500).json("Wrong request")
})

router.delete('/', (req, res) => {
    const {id} = req.body
    
    if(id) {
        _.each(characters, (character, i) => {
            if(character.id == id)
                characters.splice(i, 1)
        })
        res.json('Deleted')
    }
    else
        res.status(500).json("Wrong request");
})

module.exports = router