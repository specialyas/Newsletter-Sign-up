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
    const firstName = req.body.fname
    const lastName = req.body.lname
    const email = req.body.email
    
    const data = {
        members: [
            {
            email_address: email,
            status: "subscribed",
            merge_fields: {
                FNAME: firstName,
                LNAME: lastName
            }
        }
    ]
    };

    const jsonData = JSON.stringify(data);

    const url = "https://us9.api.mailchimp.com/3.0/lists/b429ec06a4"

    const options = {
        method: "POST",
        auth: "yusuf1:ab54f746523c7521dba685b8960765cc-us"
    }

    const request = https.request(url, options, (response) => {
        
        if (response.statusCode === 200){
            res.send('failed')
        }else{
            res.sendFile(__dirname + '/failure.html')
        }
        
        response.on("data", (data) => {
            console.log(JSON.parse(data));
        }) 
    })
    // request.write(jsonData)
    request.end()
})

app.post('/failure', (req, res) => {
    res.redirect('/')
})

PORT = 3000
app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}`)
})

// Api key
// ab54f746523c7521dba685b8960765cc-us9

//list ID
// b429ec06a4
