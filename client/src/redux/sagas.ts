import { all, put, takeLatest } from 'redux-saga/effects'

import { InMemoryCache } from 'apollo-cache-inmemory'
import ApolloClient from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import gql from 'graphql-tag'
import { getServerTimeFailed, getServerTimeSucceded } from 'src/redux/actions'

const client = new ApolloClient({
	link: createHttpLink({
		uri: `http://localhost:3100/graphql`,
		credentials: 'include',
	}),
	cache: new InMemoryCache(),
})

function* getServerTime() {
	try {
		const data = yield client.query({
			query: gql`
				query GetServerTime {
					serverTime
				}
			`,
		})

		if (data && data.data && data.data.serverTime) {
			const { serverTime } = data.data

			yield put(getServerTimeSucceded(serverTime))
		} else {
			console.log('getting server time failed')
			put(getServerTimeFailed())
		}
	} catch (e) {
		console.log('error getting servertime? ', e.message)
	}
}

function* watchGetServerTime() {
	yield takeLatest('GET_SERVERTIME', getServerTime)
}

export default function* rootSaga() {
	yield all([watchGetServerTime()])
}
