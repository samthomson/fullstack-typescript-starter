import * as fs from 'fs'
import * as path from 'path'
import * as Sequelize from 'sequelize'
import dbBlank from './connections/blank'
import dbFull from './connections/full'

const { MYSQL_DATABASE, MYSQL_DATABASE_TESTING, NODE_ENV } = process.env

const migrate = async () => {
	// ensure testing db exists
	const sDBToCreate =
		NODE_ENV === 'testing' ? MYSQL_DATABASE_TESTING : MYSQL_DATABASE
	const sRaw: string = `CREATE DATABASE IF NOT EXISTS \`${sDBToCreate}\`;`
	await dbBlank.query(sRaw)

	await dbBlank.close()

	// create table if not exist - migrations
	const Migration = await dbFull
		.define('migrations', {
			filename: {
				type: Sequelize.STRING,
			},
		})
		.sync()

	// read all run migrations
	const asDBMigrations = await Migration.findAll().map(
		(oMigration: { filename: string }) => oMigration.filename,
	)
	console.log('past migrations', asDBMigrations)

	// read list of migration files that should be run
	// get path of file to import
	const sImportDir: string = path.resolve(
		path.dirname(__filename),
		'migrations',
	)
	let asFiles: string[] = fs.readdirSync(sImportDir)
	// only sql files
	asFiles = asFiles.filter(sPath => sPath.endsWith('.sql'))
	// run in order
	asFiles.sort()

	if (asFiles.length < 1) {
		console.log('\n\nno migrations found\n\n')
		return
	}

	// compare which have and have not been run
	const asNewMigrations: string[] = asFiles.filter(
		x => !asDBMigrations.includes(x),
	)
	console.log(`\n\n ${asNewMigrations.length} new migrations\n`)
	asNewMigrations.forEach(sM => {
		console.log(`	- ${sM}`)
	})

	// run those that have not against the db connection
	for (const sPath of asNewMigrations) {
		const sRawPath = path.resolve(
			path.dirname(__filename),
			'migrations',
			sPath,
		)
		const sRawQuery = fs.readFileSync(sRawPath).toString()
		await dbFull.query(sRawQuery)

		await Migration.build({
			filename: sPath,
		}).save()
	}

	dbFull.close()
}
migrate()
