import React, {Component} from 'react'
import Contact from './Contact'
import {List, MakeSelectable} from 'material-ui/List'
import Subheader from 'material-ui/Subheader'

let SelectableList = MakeSelectable(List)

function wrapState(ComposedComponent) {
  return class SelectableList extends Component {
    static propTypes = {
      children: React.PropTypes.node.isRequired,
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
		return (
			<div>
				<Subheader>Contacts</Subheader>
				<SelectableList>
					{Object.keys(this.props.contacts).map(key => {
						let contact = this.props.contacts[key];
						<Contact
							name={contact.name} 
							image={contact.image}  
							handleClick={this.props.selectContact.bind(this, contact.id)}
						/>
					})}
				</SelectableList>
			</div>
		)
	}
}