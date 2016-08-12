import * as uiActions from '../constants/UIConstants'
import {Map} from 'immutable'

const initialState = Map({
	storyComposerShown: false,
	contactComposerShown: false,
	selectedContactId: ''
})

export default function UIReducer(state = initialState, action) {
	switch (action.type) {
		case uiActions.TOGGLE_CONTACT_COMPOSER:
			return state.set('contactComposerShown', !state.get('contactComposerShown'))
		case uiActions.TOGGLE_STORY_COMPOSER:
			return state.set('storyComposerShown', !state.get('storyComposerShown'))
		default:
			return state
	}
}