const mongoose = require('mongoose')

const imieSchema = {
    imie: String,
    nazwisko: String
}

const Imie = mongoose.model("Imie", imieSchema)

module.exports = Imie