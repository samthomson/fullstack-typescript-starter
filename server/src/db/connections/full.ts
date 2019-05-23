import * as Sequelize from 'sequelize'
import oBaseConfig from './baseConfig'

const { MYSQL_DATABASE, MYSQL_DATABASE_TESTING, NODE_ENV } = process.env

export const oFullConnection = {
	...oBaseConfig,
	database: NODE_ENV === 'testing' ? MYSQL_DATABASE_TESTING : MYSQL_DATABASE,
}

// @ts-ignore
const db = new Sequelize(oFullConnection)

db.authenticate().catch(() => {
	console.log('Could not connect to database!')
})

export default db
