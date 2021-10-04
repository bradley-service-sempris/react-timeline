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

export const addNotificationEntry = (id, payload) => ({
	type: ADD_NOTIFICATION_ENTRY,
	id,
	payload
});

export const addNotificationEntryCompleted = (payload) => ({
	type: ADD_NOTIFICATION_ENTRY_COMPLETED,
	payload
});

export const addNotificationEntryFailed = (payload) => ({
	type: ADD_NOTIFICATION_ENTRY_FAILED,
	payload
});

export const getNotifications = (payload) => ({
	type: GET_NOTIFICATIONS,
	payload
});

export const getNotificationsCompleted = (payload) => ({
	type: GET_NOTIFICATIONS_COMPLETED,
	payload
});

export const getNotificationsFailed = (payload) => ({
	type: GET_NOTIFICATIONS_FAILED,
	payload
});

export const getNotificationsById = (id) => ({
	type: GET_NOTIFICATION_BY_ID,
	id
});

export const getNotificationsByIdCompleted = (payload) => ({
	type: GET_NOTIFICATION_BY_ID_COMPLETED,
	payload
});

export const getNotificationsByIdFailed = (payload) => ({
	type: GET_NOTIFICATION_BY_ID_FAILED,
	payload
});
