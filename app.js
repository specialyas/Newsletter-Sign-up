const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.get('/', (req, res) => {
    res.send("Hello")
})

app.get('/signup', (req, res) => {
    res.sendFile(__dirname + '/signup.html')
})


PORT = 3000
app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}`)
})