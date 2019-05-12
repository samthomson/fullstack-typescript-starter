import { Action } from './actions'
import { Store } from './store'

const initialState: Store.App = {
	nServerTime: null,
}

export function appReducers(
	state: Store.App = initialState,
	action: Action,
): Store.App {
	switch (action.type) {
		case 'GET_SERVERTIME_SUCCEEDED' || 'GET_SERVERTIME_FAILED':
			return {
				...state,
				nServerTime: action.nServerTime,
			}
	}

	return state
}
