const express = require('express')
const app = express()
const pizzasrouter = require('./routes/pizzasRoutes')

app.use('/pizzas', pizzasrouter)
app.listen(3030)