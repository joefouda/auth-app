const express = require('express')
const app = express()
const cors = require('cors')
const port = 3000
const mongoose = require('mongoose')
const morgan = require("morgan")

const userRouter = require('./modules/users/userRouter')

app.use(cors())

// middleware to move between middlewares without next
app.use(morgan('combined'))

// middlewares to handle request body
app.use(express.json());
app.use(express.urlencoded())
mongoose.connect('mongodb://localhost:27017/user-auth');

app.use('/users', userRouter)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})