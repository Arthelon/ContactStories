import React, {Component} from 'react'
import Contact from './Contact'


export default class Contact extends Component {
	render() {
		return (
			<Contact
				handleClick={() => {
					console.log(this)
				}}
			/>
		)
	}
}