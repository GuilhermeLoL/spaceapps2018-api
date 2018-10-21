import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import morgan from 'morgan'
import cors from 'cors'
import routes from './routes'
const app = express()

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

mongoose.connect('mongodb://localhost:27017/spaceapps', { useNewUrlParser: true })
  .then(() => console.log('Connected to database'))
  .catch(() => console.log('Cannot connect to database'))
routes(app)

app.listen(3000, () => console.log('Express has been started'))
