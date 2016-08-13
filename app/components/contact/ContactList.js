import React, {Component} from 'react'
import Contact from './Contact'
import {List, MakeSelectable, ListItem} from 'material-ui/List'
import Subheader from 'material-ui/Subheader'
import Divider from 'material-ui/Divider';
import reactCSS from 'reactcss'
import ContentAdd from 'material-ui/svg-icons/content/add'
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

let SelectableList = MakeSelectable(List)

function wrapState(ComposedComponent) {
	return class SelectableList extends Component {
		static propTypes = {
			children: React.PropTypes.node.isRequired
		};

		render() {
			return (
				<ComposedComponent
				value={this.props.selectedContact}
				>
				{this.props.children}
				</ComposedComponent>
				);
		}
	};
}

SelectableList = wrapState(SelectableList);

export default class ContactList extends Component {

	componentWillMount() {
		this.props.fetchContacts()
	}

	render() {
		const styles = reactCSS({
			"default": {
				sidebar: {
					height: "100%",
					width: "30%",
					display: "inline-block"
				}
			}
		})
		return (
			<div style={styles.sidebar}>
			<Subheader>Contacts</Subheader>
			<SelectableList>
				{this.props.contacts.length ? Object.keys(this.props.contacts).map(key => {
					let contact = this.props.contacts[key];
					<Contact
					name={contact.name} 
					image={contact.image}  
					handleClick={this.props.selectContact.bind(this, contact.id)}
					/>
				}) : 
					<ListItem value={-2} primaryText="No contacts found..."/>
				}
			</SelectableList>
			<Divider/>
			<List>
				<ListItem leftIcon={<ContentAdd/>} 
					primaryText="Add contact"
					onClick={() => {
						this.props.toggleComposer()
					}}
				/>
			</List>
		</div>
		)
	}
}