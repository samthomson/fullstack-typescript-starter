import { ServerTime } from '@shared/declarations'
import { Store } from 'src/redux/store'

export const selectServerTime = (state: Store.App): ServerTime =>
	state.nServerTime
