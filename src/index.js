import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

import createV1 from './api/v1'

const app = express()

app.use(express.json())
app.use(cors())

dotenv.config()
createV1(app)

const { PORT } = process.env

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`) // eslint-disable-line no-console
})
