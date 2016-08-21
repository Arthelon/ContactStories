import {connect} from 'react-redux'
import ContactList from '../components/contact/ContactList'
import {toggleContactComposer} from '../actions/UIActions'
import {bindActionCreators} from 'redux'
import * as contactActionCreators from '../actions/ContactActions'

const mapStateToProps = (state) => {
	return {
		contacts: state.main.get('contacts').toJS(),
		selectedContact: state.main.get('selectedContactId')
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		...bindActionCreators(contactActionCreators, dispatch),
		toggleComposer: () => {
			dispatch(toggleContactComposer())
		}
	}
}

const ContactListContainer = connect(mapStateToProps, mapDispatchToProps)(ContactList)

export default ContactListContainer