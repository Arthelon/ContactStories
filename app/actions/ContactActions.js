import {ADD_CONTACT, REMOVE_CONTACT, SET_CONTACTS, SELECT_CONTACT} from '../constants/ContactConstants'
import {fetchStories} from './StoryActions'
import {batchActions} from 'redux-batched-actions'
import db from "../config/database"

export function addContact(name, image, type) {
	return async function(dispatch) {
		if (type == 'jpg') {
			type = 'jpeg'
		}
		let document = await db.post({
			name,
			_attachments: {
				contactImage: {
					content_type: 'text/'+type,
					data: image
				}
			}
		})
		console.log(document)
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
	return batchActions([{
			type: SELECT_CONTACT,
			id
		}, fetchStories(id)])
}