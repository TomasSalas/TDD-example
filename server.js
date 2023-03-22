import express from 'express'
import post from './endpoints/index.js'
import parser from 'body-parser'
import axios from 'axios'
import authenticate from './middleware/index.js'

const app = express()
const port = 3000

app.use(parser.urlencoded({extended: false}))
app.use(parser.json())

const postHandler = post({axios})

app.post('/', authenticate , postHandler.post)

app.listen(port , () => {
  console.log("Server Up")
})

export default app