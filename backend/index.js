const connectToMongo = require('./db');
const express = require('express')

connectToMongo();
const app = express()
const port = 8000

app.use(express.json())

// Available Routes
app.use('/api/auth',require('./routes/auth'))
app.use('/api/jewellery',require('./routes/jewellery'))

app.listen(port,()=>{
    console.log(`Example app listening at http://localhost:${port}`)
})