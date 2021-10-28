import React, { useEffect } from 'react'
import SearchBar from './components/layouts/SearchBar'
import Logs from './components/logs/Logs'

import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css/dist/js/materialize.min.js'
import './App.css'
import { Fragment } from 'react'

function App() {
	useEffect(() => {
		// Init JS
		M.AutoInit()
	})
	return (
		<Fragment>
			<SearchBar />
			<div className="container">
				<Logs />
			</div>
		</Fragment>
	)
}

export default App
