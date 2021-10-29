import React, { Fragment, useEffect } from 'react'
import SearchBar from './components/layouts/SearchBar'
import Logs from './components/logs/Logs'
import AddBtn from './components/layouts/AddBtn'
import AddLogModal from './components/logs/AddTechForm'
import EditLogModal from './components/logs/EditLogModal'

import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css/dist/js/materialize.min.js'
import './App.css'

function App() {
	useEffect(() => {
		// Init JS
		M.AutoInit()
	})
	return (
		<Fragment>
			<SearchBar />
			<div className="container">
				<AddBtn />
				<AddLogModal />
				<EditLogModal />
				<Logs />
			</div>
		</Fragment>
	)
}

export default App
