const express = require('express')
const cors = require('cors')
const connectDB = require('./config/db');
require('dotenv').config();

connectDB()
let app = express()

app.use(cors());

app.use(express.json());

app.get('/test', (req,res,next)=> {
    res.send('Job Search API')
})

app.use('/api/v1/auth', require('./routes/auth'));
app.use('/api/v1/user', require('./routes/user'));

let port = process.env.PORT || 4000

app.listen(port, (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log(`Listening on port:${port}`)
    }
})