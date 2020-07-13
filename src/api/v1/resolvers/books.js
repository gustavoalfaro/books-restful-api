import { Books } from '../../../models'

function defineBooks(router) {
  router.route('/books').get(async (req, res) => {
    const { query } = req
    const { limit, offset } = query
    const books = await Books.findAll({ limit, offset })

    res.json(books)
  })

  router.route('/books/:id').get(async (req, res) => {
    const userId = Number(req.params.id)
    const book = await Books.findOne({ where: { id: userId } })

    res.json(book)
  })

  router.route('/books').post(async (req, res) => {
    const { name } = req.body
    const book = await Books.create({ name })

    res.json(book)
  })
}


export default defineBooks
