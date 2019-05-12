import { ServerTime } from 'src/declarations'

export type Action =
	| {
			type: 'GET_SERVERTIME'
	  }
	| {
			type: 'GET_SERVERTIME_SUCCEEDED'
			nServerTime: ServerTime
	  }
	| {
			type: 'GET_SERVERTIME_FAILED'
			nServerTime: ServerTime
	  }

export const getServerTime = (): Action => {
	return {
		type: 'GET_SERVERTIME',
	}
}

export const getServerTimeSucceded = (nServerTime: number): Action => {
	return {
		type: 'GET_SERVERTIME_SUCCEEDED',
		nServerTime,
	}
}

export const getServerTimeFailed = (): Action => {
	return {
		type: 'GET_SERVERTIME_FAILED',
		nServerTime: null,
	}
}
