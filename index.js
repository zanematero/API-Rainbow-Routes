// Get the environment variables
require('dotenv').config()

// Require needed node modules
const express = require('express')

// Initialize your application by calling the function returned by the express module
const app = express()

// Declare routes that people can visit on the application
app.get('/', function (req, res) {
    res.send(`
        <div>
            <h1>Hello World</h1>
        </div>
    `)
})

// Listen to a port number defined by a local environment variable
app.listen(process.env.PORT)