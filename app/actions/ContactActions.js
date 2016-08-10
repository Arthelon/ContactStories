import {ADD_CONTACT, REMOVE_CONTACT} from '../constants/ContactConstants'

export function addContact(name, img) {
	return {
		type: ADD_CONTACT,
		name: name,
		image: img
	}
}

export function removeContact(index) {
	return {
		type: REMOVE_CONTACT,
		index: index
	}
}