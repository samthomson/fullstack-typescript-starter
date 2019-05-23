import * as Sequelize from 'sequelize'
import oBaseConfig from './baseConfig'

// @ts-ignore
const db = new Sequelize(oBaseConfig)

db.authenticate().catch(() => {
	console.log('Could not connect to database!')
})

export default db
