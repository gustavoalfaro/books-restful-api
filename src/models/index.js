import Sequelize from 'sequelize'

import BooksModel from './book'

import config from '../../config/config'

const sequelize = new Sequelize(config.database, config.username, config.password, config)

sequelize.authenticate().then(() => {
  console.log('Database connection has been established successfully.') // eslint-disable-line no-console
}).catch((error) => {
  console.log('Unable to connect to the database: ', error) // eslint-disable-line no-console
})

const Books = BooksModel(sequelize, Sequelize)

// eslint-disable-next-line
export { Books }
