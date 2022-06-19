const express = require('express')
const bodyParser = require('body-parser')
const https = require('https')

const app = express()


app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true}))


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/signup.html')
})

app.post('/', (req, res) => {
})


PORT = 3000
app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}`)
})

// Api key
// ab54f746523c7521dba685b8960765cc-us9

//list ID
// b429ec06a4