import { fromJS } from 'immutable';
import {
	ADD_NOTIFICATION_ENTRY,
	ADD_NOTIFICATION_ENTRY_COMPLETED,
	ADD_NOTIFICATION_ENTRY_FAILED,
	GET_NOTIFICATIONS,
	GET_NOTIFICATIONS_COMPLETED,
	GET_NOTIFICATIONS_FAILED,
	GET_NOTIFICATION_BY_ID,
	GET_NOTIFICATION_BY_ID_COMPLETED,
	GET_NOTIFICATION_BY_ID_FAILED
} from './actionTypes';

export const initialState = fromJS({
	addEntry: {
		error: '',
		isLoading: false
	},
	notificationList: {
		data: [],
		error: '',
		hasBeenLoaded: false,
		isLoading: false
	},
	selectedNotification: {
		data: [],
		error: '',
		hasBeenLoaded: false,
		isLoading: false
	}
});

export const timelineReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_NOTIFICATIONS:
			return state.setIn('notificationList.isLoading'.split('.'), true);

		case GET_NOTIFICATIONS_COMPLETED:
			return state
				.setIn('notificationList.isLoading'.split('.'), false)
				.setIn('notificationList.hasBeenLoaded'.split('.'), true)
				.setIn('notificationList.data'.split('.'), action.payload);

		case GET_NOTIFICATIONS_FAILED:
			return state
				.setIn('notificationList.error'.split('.'), action.payload)
				.setIn('notificationList.isLoading'.split('.'), false)
				.setIn('notificationList.data'.split('.'), []);

		case GET_NOTIFICATION_BY_ID:
			return state.setIn('selectedNotification.isLoading'.split('.'), true);

		case GET_NOTIFICATION_BY_ID_COMPLETED:
			return state
				.setIn('selectedNotification.isLoading'.split('.'), false)
				.setIn('selectedNotification.hasBeenLoaded'.split('.'), true)
				.setIn('selectedNotification.data'.split('.'), action.payload);

		case GET_NOTIFICATION_BY_ID_FAILED:
			return state
				.setIn('selectedNotification.error'.split('.'), action.payload)
				.setIn('selectedNotification.isLoading'.split('.'), false);

		case ADD_NOTIFICATION_ENTRY:
			return state.setIn('addEntry.isLoading'.split('.'), true);

		case ADD_NOTIFICATION_ENTRY_COMPLETED:
			return state.setIn('addEntry.isLoading'.split('.'), false);

		case ADD_NOTIFICATION_ENTRY_FAILED:
			return state
				.setIn('addEntry.isLoading'.split('.'), false)
				.setIn('addEntry.error'.split('.'), action.payload);

		default:
			return state;
	}
};
