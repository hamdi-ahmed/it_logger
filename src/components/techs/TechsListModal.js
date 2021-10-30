import React, { useState, useEffect } from 'react'
import Preloader from '../layouts/Preloader'
import TechItem from './TechItem'

const TechsListModal = () => {
	// State
	const [techs, setTechs] = useState([])
	const [loading, setLoading] = useState(false)

	// Use Effect
	useEffect(() => {
		getTechs()
		// eslint-disables-next-line
	}, [])

	// Fetch Data
	const getTechs = async () => {
		setLoading(true)
		const res = await fetch('/techs')
		const data = await res.json()
		setTechs(data)
		setLoading(false)
	}

	if (loading) {
		return <Preloader />
	}

	//console.log(techs)

	return (
		<div id="techs-list-modal" className="modal">
			<div className="modal-content">
				<h4>Technician List</h4>
				<ul className="collection">
					{!loading &&
						techs !== null &&
						techs.map((tech) => <TechItem tech={tech} key={tech.id} />)}
				</ul>
			</div>
		</div>
	)
}

export default TechsListModal
