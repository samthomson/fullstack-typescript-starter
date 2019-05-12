import * as express from 'express'
import * as cors from 'cors'
import * as expressGraphQL from 'express-graphql'
import * as bodyParser from 'body-parser'
import schema from './schema'

import { Application, Response } from 'express'

const app: Application = express()

// enable cors
var corsOptions = {
	origin: 'http://localhost:3000',
	credentials: true, // <-- REQUIRED backend setting
}
app.use(cors(corsOptions))

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', ({}, response: Response) => {
	response.send('root')
})

// set up graphql
app.use(
	'/graphql',
	expressGraphQL({
		schema,
		graphiql: true,
	}),
)

app.listen(3100)

export default app
