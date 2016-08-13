import React, {Component} from 'react'
import {ListItem} from 'material-ui/List'


export default class Contact extends Component {
	render() {
		return (
			<div>
				<h1>Test</h1>
				<ListItem
					primaryText={name}
					leftAvatar={image}
					onClick={handleClick}
				/>
			</div>
		)
	}
}

Contact.propTypes = {
	primaryText: React.PropTypes.string,
	leftAvatar: React.PropTypes.string,
	handleClick: React.PropTypes.func
}