const express = require('express')
const cors = require('cors')
const env = require('dotenv').config()

const port = process.env.PORT || 5000
const app = express()

app.use(cors())
app.use(express.json())

app.listen(port, ()=> console.log(`Server is Running on PORT ${port}...`))