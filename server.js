require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT || 5000

app.set('view engine', 'ejs')
app.use(express.static('public'))

app.get('/', (req,res) => {
    res.render('index', {plant: null, message: null})
})

app.listen(PORT, () => {
    console.log(`Connected on port ${PORT}`)
})