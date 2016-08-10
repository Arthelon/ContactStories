import {connect} from 'react-redux'
import {ContactList} from '../components/ContactList'
import {bindActionCreators} from 'redux'
import * as contactActionCreators from '../actions/ContactActions'

const mapStateToProps = (state) => {
	return {
		contacts: state.contacts.toJS()
	}
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators(contactActionCreators)
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactList)