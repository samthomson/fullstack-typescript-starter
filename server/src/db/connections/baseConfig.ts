const { MYSQL_HOST, MYSQL_PASSWORD, MYSQL_USER } = process.env

export default {
	host: MYSQL_HOST,
	port: 3306,
	username: MYSQL_USER,
	password: MYSQL_PASSWORD,
	dialect: 'mysql',
	dialectOptions: {
		charset: 'utf8',
		decimalNumbers: true,
	},
	logging: false,
}
