import * as React from 'react'
import { connect } from 'react-redux'
import './../node_modules/semantic-ui-css/semantic.min.css'
import './App.css'

import { ServerTime } from '@shared/declarations'
import { Store } from 'src/redux/store'

interface IAppProps {
	nServerTime: ServerTime
}

class App extends React.Component<IAppProps, {}> {
	constructor(props: any) {
		super(props)
	}

	public render() {
		const { nServerTime } = this.props

		return (
			<div className="App ui container">
				<h1>fullstack typescript starter</h1>
				<p>{nServerTime === null ? '[time unknown]' : nServerTime}</p>
			</div>
		)
	}
}

const mapStateToProps = (state: Store.App) => {
	const { nServerTime } = state
	return {
		nServerTime,
	}
}

export default connect(mapStateToProps)(App)
