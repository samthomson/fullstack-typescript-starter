import { ServerTime } from 'src/declarations'

export enum ActionType {
	GET_SERVERTIME = 'GET_SERVERTIME',
	GET_SERVERTIME_SUCCEEDED = 'GET_SERVERTIME_SUCCEEDED',
	GET_SERVERTIME_FAILED = 'GET_SERVERTIME_FAILED',
}

export type Action =
	| {
			type: ActionType.GET_SERVERTIME
	  }
	| {
			type: ActionType.GET_SERVERTIME_SUCCEEDED
			nServerTime: ServerTime
	  }
	| {
			type: ActionType.GET_SERVERTIME_FAILED
			nServerTime: ServerTime
	  }

export const getServerTime = (): Action => {
	return {
		type: ActionType.GET_SERVERTIME,
	}
}

export const getServerTimeSucceded = (nServerTime: number): Action => {
	return {
		type: ActionType.GET_SERVERTIME_SUCCEEDED,
		nServerTime,
	}
}

export const getServerTimeFailed = (): Action => {
	return {
		type: ActionType.GET_SERVERTIME_FAILED,
		nServerTime: null,
	}
}
