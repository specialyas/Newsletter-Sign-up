const express = require('express')
const bodyParser = require('body-parser')
const app = express()


app.use(express.static('public'))


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/signup.html')
})

app.post('/', (req, res) => {
    console.log('Post sucessfull')
})


PORT = 3000
app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}`)
})