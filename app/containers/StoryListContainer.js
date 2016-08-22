import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { removeStory } from '../actions/StoryActions'
import { toggleStoryComposer } from '../actions/UIActions'
import StoryList from '../components/story/StoryList'

const mapStateToProps = state => {
    return {
        stories: state.main.get("stories").toJS(),
        selectedContactId: state.main.get("selectedContactId")
    }
}

const mapDispatchToProps = dispatch => {
    return {
        ...bindActionCreators({removeStory, toggleStoryComposer}, dispatch)
    }
}

const ContactListContainer = connect(mapStateToProps, mapDispatchToProps)(StoryList)
export default ContactListContainer