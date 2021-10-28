import React, { useState, useEffect } from 'react'
import LogItem from './LogItem'

const Logs = () => {
	// State
	const [logs, setLogs] = useState([])
	const [loading, setLoading] = useState(false)

	// Use Effect
	useEffect(() => {
		getLogs()
		// eslint-disables-next-line
	}, [])

	// Fetch Data
	const getLogs = async () => {
		setLoading(true)
		const res = await fetch('/logs')
		const data = await res.json()
		setLogs(data)
		setLoading(false)
	}

	return (
		<ul className="collection with-header">
			<li className="collection-header">
				<h4 className="center">System Logs</h4>
			</li>
			{!loading && logs.length === 0 ? (
				<p className="center">No Logs</p>
			) : (
				logs.map((log) => <LogItem key={log.id} log={log} />)
			)}
		</ul>
	)
}

export default Logs
