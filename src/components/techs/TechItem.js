import React from 'react'
import PropTypes from 'prop-types'

const TechItem = ({ tech }) => {
	//console.log(tech)
	const { firstName, lastName } = tech
	return (
		<li className="collection-item">
			<div>
				{firstName} {lastName}
				<a href="#!" className="secondary-content">
					<i className="material-icon gray-text">delete</i>
				</a>
			</div>
		</li>
	)
}

TechItem.propTypes = {
	tech: PropTypes.object.isRequired,
}

export default TechItem
