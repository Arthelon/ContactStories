import {ADD_STORY, REMOVE_STORY, SET_STORIES} from '../constants/StoryConstants'
import db from '../config/database'

export function removeStory(contactId, storyId) {
	return async function(dispatch) {
		try {
			let contact = await db.get(contactId)
			contact.stories = contact.stories.filter((story) => {
				return story.id != storyId
			})
			db.put(contact)
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
			let contact = await db.get(contactId)
			let story = {
				id:  uuid.v1(),
				text
			}
			contact.stories.push(story)
			db.put(contact)
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
	return async function(dispatch) {
		try {
			let contact = db.get(contactId)
			return dispatch(setStories(contact.stories))
		} catch (err) {
			console.log(err)
		}
	}
}