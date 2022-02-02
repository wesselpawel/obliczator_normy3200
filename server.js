const express = require('express')

const app = express()

const cors = require('cors')

const mongoose = require('mongoose')

const port= 3001

mongoose.connect(" ") 

app.use("/", require("./routes/imieRoute"))

app.use(cors())

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello World!')
  })

app.listen(port, () => {
    console.log('Serwer uruchomiony na porcie 3001')
})

