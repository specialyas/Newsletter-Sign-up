const express = require('express')
const bodyParser = require('body-parser')
const app = express()


app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true}))


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/signup.html')
})

app.post('/', (req, res) => {
    let firstName = req.body.fname
    let lastName = req.body.lname
    let email = req.body.email
    console.log(firstName);
    console.log(lastName);
    console.log(email);
})


PORT = 3000
app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}`)
})