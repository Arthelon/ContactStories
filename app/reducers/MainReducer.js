import * as storyConstants from '../constants/StoryConstants'
import * as contactConstants from '../constants/ContactConstants'

import {Map, List} from 'immutable'


const initialState = Map({
	contacts: List()
})

export default function MainReducer(state = initialState, action) {
	switch (action.type) {
		case contactConstants.ADD_CONTACT:
			return state.contacts.push(Map({
				name: action.name,
				image: action.image,
				stories: List()
			}))
		case contactConstants.REMOVE_CONTACT:
			return state.contacts.delete(action.index)
		case storyConstants.ADD_STORY:
			return state.contacts.get(action.contactIndex)
				.stories.push(Map({
					text: action.text,
					completed: false
				}))
		case storyConstants.REMOVE_STORY:
			return state.contacts.get(action.contactIndex)
				.stories.delete(action.index)
		default:
			return state
	}
}