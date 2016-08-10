import React, {Component} from 'react'
import {ListItem} from 'material-ui/List'


export default class Contact extends Component {
	render() {
		return (
			<div>
				<ListItem
					primaryText={name}
					leftAvatar={profileImage}
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