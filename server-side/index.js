const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const fileUpload = require('express-fileupload');

mongoose.connect('mongodb://localhost/server_side', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log('connected to the database')
})

const routes = require('./routes/routes')

app = express()

app.use(fileUpload());
app.use(cookieParser())
app.use(cors({
    credentials: true,
    origin: ['http://localhost:3000']
}))

app.use(express.json())

app.use('/api', routes)

app.listen(8000)
