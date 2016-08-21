import * as storyConstants from '../constants/StoryConstants'
import * as contactConstants from '../constants/ContactConstants'

import {Map, List, OrderedMap} from 'immutable'


const initialState = Map({
	contacts: OrderedMap({}),
	stories: OrderedMap({}),
	selectedContactId: ''
})

export default function MainReducer(state = initialState, action) {
	switch (action.type) {
		case contactConstants.ADD_CONTACT:
			return state.setIn(["contacts", action.contact.id], Map({
				id: action.contact.id,
				name: action.contact.name,
				image: action.contact.image,
				stories: OrderedMap({})
			}))
		case contactConstants.REMOVE_CONTACT:
			return state.deleteIn(["contacts", action.id])
		case contactConstants.SET_CONTACTS:
			let contacts = OrderedMap(action.contacts.map(contact => {
				return [contact._id, contact]
			}))
			return state.set("contacts", contacts)
		case storyConstants.SELECT_CONTACT:
			return state.set('selectedContactId', action.id)
		case storyConstants.ADD_STORY:
			return state.get("stories").set(action.story.id, Map({
				id: action.story.id,
				text: action.story.text
			}))
		case storyConstants.REMOVE_STORY:
			return state.get("stories").delete(action.id)
		case storyConstants.SET_STORIES:
			let stories = action.stories.map(story => {
				return [story.id, story]
			})
			return state.set("stories", OrderedMap(stories))
		default:
			return state
	}
}