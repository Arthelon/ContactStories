import {TOGGLE_STORY_COMPOSER, TOGGLE_CONTACT_COMPOSER} from '../constants/UIConstants'

export function toggleStoryComposer() {
	return {
		type: TOGGLE_STORY_COMPOSER
	}
}

export function toggleContactComposer() {
	return {
		type: TOGGLE_CONTACT_COMPOSER
	}
}