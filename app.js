const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.get('/', (req, res) => {
    res.send("Hello")
})


PORT = 3000
app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}`)
})