const { DB_HOST, MYSQL_PASSWORD } = process.env

export default {
	host: DB_HOST,
	port: 3306,
	username: 'root',
	password: MYSQL_PASSWORD,
	dialect: 'mysql',
	dialectOptions: {
		charset: 'utf8',
		decimalNumbers: true,
	},
	logging: false,
}
