import * as storyConstants from '../constants/StoryConstants'
import * as contactConstants from '../constants/ContactConstants'

import {Map, OrderedMap} from 'immutable'


const initialState = Map({
	contacts: OrderedMap({}),
	stories: OrderedMap({}),
	selectedContactId: ''
})

export default function MainReducer(state = initialState, action) {
	switch (action.type) {
		case contactConstants.ADD_CONTACT:
			return state.setIn(["contacts", action.contact._id], {
				_id: action.contact._id,
				name: action.contact.name,
				image: action.contact.image,
			})
		case contactConstants.REMOVE_CONTACT:
			return state.deleteIn(["contacts", action.id])
		case contactConstants.SET_CONTACTS:
			let contacts = OrderedMap(action.contacts.map(contact => {
				return [contact._id, contact]
			}))
			return state.set("contacts", contacts)
		case contactConstants.SELECT_CONTACT:
			return state.set('selectedContactId', action.id)
		case storyConstants.ADD_STORY:
			console.log(action)
			return state.setIn(["stories", action.story.id], action.story)
		case storyConstants.REMOVE_STORY:
			return state.deleteIn(["stories", action.id])
		case storyConstants.SET_STORIES:
			let stories = action.stories.map(story => {
				return [story.id, story]
			})
			return state.set("stories", OrderedMap(stories))
		default:
			return state
	}
}