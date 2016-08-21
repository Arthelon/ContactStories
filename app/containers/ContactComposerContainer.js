import {connect} from 'react-redux'
import {toggleContactComposer} from '../actions/UIActions'
import {addContact, fetchContacts} from '../actions/ContactActions'
import {bindActionCreators} from 'redux'
import ContactComposer from '../components/composers/ContactComposer'

const mapStateToProps = (state) => {
	return {
		isShowingComposer: state.ui.get("contactComposerShown")
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		toggleComposer: () => {
			dispatch(toggleContactComposer())
		},
		...bindActionCreators({addContact, fetchContacts}, dispatch)
	}	
}

const ContactComposerContainer = connect(mapStateToProps, mapDispatchToProps)(ContactComposer)

export default ContactComposerContainer