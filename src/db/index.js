//////////////////////////////////////////////////////////////////////////////
import Sequelize from 'sequelize'
import messageModel from './models/message.model.js'
//////////////////////////////////////////////////////////////////////////////

const config = {
  dialect: 'sqlite',
  storage: process.env.NODE_ENV == 'production' ? 'src/db/data/database.sqlite' : ':memory:',
  logging: false,
  dialectOptions: {
    dateStrings: true,
    typeCast: true,
    timezone: '-05:00'
  }
}

const sequelize = new Sequelize( config )
const db = { sequelize,Message : messageModel(sequelize,Sequelize.DataTypes) }
db.Message.sync({ force: true })
 
//////////////////////////////////////////////////////////////////////////////
export default db
//////////////////////////////////////////////////////////////////////////////