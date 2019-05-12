import 'mocha'
import axios from 'axios'
import * as chai from 'chai'
import chaiHttp = require('chai-http')

chai.use(chaiHttp)

describe('server', async () => {
	describe('get server time', async () => {
		it('should fetch serverTime as expected', async () => {
			// post message with correct paramameters and reasonable values
			const oServerTimeResponse = await axios.post(
				'http://server:3100/graphql',
				{
					query: `
			  {
				serverTime
			  }`,
				},
			)

			chai.expect(oServerTimeResponse.data.data.serverTime).to.be.an(
				'number',
			)
			chai.expect(oServerTimeResponse.data.data.serverTime).to.be.above(0)
		})
	})
})
