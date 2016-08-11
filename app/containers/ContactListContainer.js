import {connect} from 'react-redux'
import ContactList from '../components/ContactList'
import {selectContact} from '../actions/UIActions'
import {bindActionCreators} from 'redux'
import * as contactActionCreators from '../actions/ContactActions'

const mapStateToProps = (state) => {
	return {
		contacts: state.main.get('contacts').toJS(),
		selectedContact: state.ui.get('selectedContact')
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		...bindActionCreators(contactActionCreators),
		...bindActionCreators({selectContact})
	}
}

const ContactListContainer = connect(mapStateToProps, mapDispatchToProps)(ContactList)

export default ContactListContainer