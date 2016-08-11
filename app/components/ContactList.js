import React, {Component} from 'react'
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
	render() {
		return (
			<div>
				<Subheader>Contacts</Subheader>
				<SelectableList>
					{this.props.contacts.map((contact, index) => {
						<Contact
							name={contact.name} 
							image={contact.image}  
							handleClick={this.props.selectContact.bind(this, index)}
						/>
					})}
				</SelectableList>
			</div>
		)
	}
}