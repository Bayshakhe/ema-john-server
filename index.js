const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config()
const port = process.env.PORT || 5000;

app.use(cors())
app.use(express.json())

app.get('/', (req,res) => {
    res.send('Ema John is running')
})

app.listen(port, ()=> {
    console.log('Ema John running on port', port)
})