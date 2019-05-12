import {
	GraphQLObjectType,
	GraphQLSchema,
	GraphQLInt,
} from 'graphql'
import * as moment from 'moment'

const RootQuery = new GraphQLObjectType({
	name: 'RootQueryType',
	fields: () => ({
		serverTime: {
			type: GraphQLInt,
			resolve: async () => moment().unix(),
			description: "The time on the server. Represented in Unix time - the number of seconds since 1970."
		},
	}),
})

export default new GraphQLSchema({
	query: RootQuery,
})
