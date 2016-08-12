import {ADD_STORY, REMOVE_STORY, SET_STORIES} from '../constants/StoryConstants'
import db from '../config/database'

export function removeStory(storyId) {
	return async function(dispatch) {
		try {
			await db("stories").removeById(storyId)
			return dispatch({
				type: REMOVE_STORY,
				id: storyId
			})
		} catch (err) {
			console.log(err)
		}
	
	}
}

export function addStory(contactId, text) {
	return async function(dispatch) {
		try {
			let story = await db("stories").insert(contactId, {
				contactId,
				text
			})
			return dispatch({
				type: ADD_STORY,
				story
			})
		} catch (err) {
			console.log(err)
		}
	}
}

export function setStories(stories) {
	return {
		type: SET_STORIES,
		stories
	}
}

export function fetchStories(contactId) {
	return async function() {
		try {
			let stories = await db("stories").filter({contactId}).value()
			return dispatch(setStories(stories))
		} catch (err) {
			console.log(err)
		}
	}
}