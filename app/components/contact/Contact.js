import React, {Component} from 'react'
import {ListItem} from 'material-ui/List'
import Avatar from 'material-ui/Avatar'


export default class Contact extends Component {


	render() {
		return (
			<ListItem
				key={this.props.id}
				primaryText={this.props.name}
				leftAvatar={<Avatar src={this.props.imgUrl}/>}
				onClick={this.props.handleClick}
			/>
		)
	}
}

Contact.propTypes = {
	name: React.PropTypes.string,
	imgUrl: React.PropTypes.string,
	handleClick: React.PropTypes.func,
	id: React.PropTypes.string
}