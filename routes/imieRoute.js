const express = require('express')
const router = express.Router()
const User = require('./models/imie.js')

router.route('/create').post((req, res) => {
    const imie = req.body.imie;
    const nazwisko = req.body.nazwisko;
    const newUser = new User({
        imie,
        nazwisko
    })

    newUser.save()

})

module.exports = router;