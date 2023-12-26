const express = require('express')
const app = express();
require('dotenv').config({path: './config.env'})

const port = process.env.PORT || 8080
const connectDb = require('./db/db')
const userRoutes = require('./routes/userRoutes')
const bookRoutes = require('./routes/bookRoutes')
const cors =  require('cors')
// const vercel = require('./client/dist')
app.use(cors())

// database calll
connectDb()

// middlewere
app.use(express.json())
app.use('/api/user',userRoutes)
app.use('/api/book',bookRoutes)


if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config({path: './config.env'});
  }

app.listen(port, ()=>{
    console.log(`server is runing on ${port}`)
})