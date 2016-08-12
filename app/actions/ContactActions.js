import {ADD_CONTACT, REMOVE_CONTACT, SET_CONTACTS, SELECT_CONTACT} from '../constants/ContactConstants'
import {fetchStories} from './StoryActions'
import {batchActions} from 'redux-batched-actions'
import db from "../config/database"

export function addContact(name, image) {
	return async function(dispatch) {
		let document = await db.insert({
			name,
			image
		})
		return dispatch({
			type: ADD_CONTACT,
			contact: document
		})
	}
}

export function removeContact(id) {
	return async function(dispatch) {
		try {
			await db("contacts").removeById(id)
			await db("stories").removeWhere({contactId: id})
			return dispatch({
				type: REMOVE_CONTACT,
				id
			})
		} catch(err) {
			console.log(err)
		}
	}
}

export function setContacts(contacts) {
	return {
		type: SET_CONTACTS,
		contacts
	}
}

export function fetchContacts() {
	return async function(dispatch) {
		try {
			let contacts = await db("contacts").value()
			return dispatch(setContacts(contacts))
		} catch (err) {
			console.log(err)
		}
	}
}

export function selectContact(id) {
	return batchActions([{
			type: SELECT_CONTACT,
			id
		}, fetchStories(id)])
}