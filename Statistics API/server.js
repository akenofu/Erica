const express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const connectDB = require('./utils/db')
const morgan = require('morgan')
const cors = require('cors')

dotenv.config('.env')
connectDB();


const app = express()
app.use(express.json())
app.use(morgan('combined'))
app.use(cors('*'));


const PORT = process.env.PORT || 5000

app.listen(PORT, ()=> {
    console.log(`Server started on port ${PORT}`)
})


app.use('/api/v1/ericaservers', require('./routes/ericaservers'))
app.use('/api/v1/submit', require('./routes/submit'))

