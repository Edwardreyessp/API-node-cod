const { Router } = require('express')
const router = Router()

router.get('/test', (req, res) => {
    const data = {
        "name": "Edward",
        "website": "none"
    }
    res.json(data)
})

module.exports = router