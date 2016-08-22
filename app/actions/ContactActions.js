import {ADD_CONTACT, REMOVE_CONTACT, SET_CONTACTS, SELECT_CONTACT} from '../constants/ContactConstants'
import {fetchStories} from './StoryActions'
import {batchActions} from 'redux-batched-actions'
import db, { BASE_URL } from "../config/database"
import fs from "fs"

export function addContact(name, imageUrl) {
	return async function(dispatch) {
		let imageParts = imageUrl.split('/')
		let newImageUrl = BASE_URL + imageParts[imageParts.length - 1]
		console.log(newImageUrl)
		fs.renameSync(imageUrl, newImageUrl)
		let document = await db.post({
			name,
			newImageUrl,
			stories: []
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
			let contact = db.get(id)
			db.remove(contact)
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
			let contacts = await db.allDocs({
				attachments: true,
				include_docs: true
			})
			contacts = contacts.rows.map(contact => {
				return contact.doc
			})
			return dispatch(setContacts(contacts))
		} catch (err) {
			console.log(err)
		}
	}
}

export function selectContact(id) {
	return async function(dispatch) {
		dispatch(batchActions([{
			type: SELECT_CONTACT,
			id
		}, fetchStories(id)(dispatch)]))
	}
}