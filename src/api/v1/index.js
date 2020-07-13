import express from 'express'

import defineBooks from './resolvers/books'

function createV1(app) {
  const v1 = express.Router()

  defineBooks(v1)

  app.use('/api/v1', v1)
  app.use('/api/', v1)
}
export default createV1
