import 'mocha'
import * as chai from 'chai'
import chaiHttp = require('chai-http')
import server from './../src/server'

chai.use(chaiHttp)

describe('server', async () => {
	describe('get server time', async () => {
		it('should fetch serverTime as expected', async () => {
			// post message with correct paramameters and reasonable values
			const oServerTimeResponse = await chai
				.request(server)
				.post('/graphql')
				.send({
					query: `
			  {
				serverTime
			  }`,
				})

			chai.expect(oServerTimeResponse.body.data.serverTime).to.be.an(
				'number',
			)
			chai.expect(oServerTimeResponse.body.data.serverTime).to.be.above(0)
		})
	})
})
