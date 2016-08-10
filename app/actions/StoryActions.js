import {ADD_STORY, REMOVE_STORY} from '../constants/StoryConstants'

export function removeStory(index, contactIndex) {
	return {
		type: REMOVE_STORY,
		index,
		contactIndex
	}
}

export function ADD_STORY(text, contactIndex) {
	return {
		type: ADD_STORY,
		text,
		contactIndex
	}
}