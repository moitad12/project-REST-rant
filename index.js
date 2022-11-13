require('dotenv').config()
const express = require('express')
const app = express()
const router = require('./controllers/places')

app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))

router.get('/new', (req, res) => {
  res.render('places/new')
})

app.use('/places', router)

app.get('/', (req, res) => {
    res.render('home')
  })  

app.get('*', (req, res) => {
  res.render('error404')
})

app.listen(process.env.PORT)
