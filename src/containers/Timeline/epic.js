import { ofType } from 'redux-observable';
import { of, merge } from 'rxjs';
import { mergeMap, switchMap, catchError } from 'rxjs/operators';

import {
	addNotificationEntryCompleted,
	addNotificationEntryFailed,
	getNotificationsCompleted,
	getNotificationsFailed,
	getNotificationsByIdCompleted,
	getNotificationsByIdFailed
} from './actions';
import {
	ADD_NOTIFICATION_ENTRY,
	GET_NOTIFICATION_BY_ID,
	GET_NOTIFICATIONS
} from './actionTypes';
import __TEST__notificationsById from './__TEST__notificationsById';

export const addNotificationEntryEpic = (action$) =>
	action$.pipe(
		ofType(ADD_NOTIFICATION_ENTRY),
		mergeMap(async (action) => {
			// make call here
		}),
		switchMap((res) => [addNotificationEntryCompleted(res)]),
		catchError((error, source) =>
			merge(of(addNotificationEntryFailed(error.message)), source)
		)
	);

export const getNotificationsEpic = (action$) =>
	action$.pipe(
		ofType(GET_NOTIFICATIONS),
		mergeMap(async (action) => {
			return [
				{
					id: 2,
					title: 'FISERV Value Plus Is Past Compliance',
					type: 'Severe',
					timestamp: '08/13/21 - 8:57AM',
					assigned: {
						username: 'Justin G.',
						avatar:
							'https://i.pinimg.com/originals/82/7f/a9/827fa9354957d19a1ad9d8426e286ab2.jpg'
					},
					lastEntry: {
						parentId: 2,
						title: 'FISERV - Value Plus',
						type: 'Resolved',
						timestamp: '08/13/21 - 4:44PM',
						description: 'I have resolved the issue',
						author: 'Justin G.'
					}
				},
				{
					id: 6,
					title: 'Fun Source May Have An Issue',
					type: 'Warning',
					timestamp: '08/19/21 - 11:19AM',
					assigned: {
						username: 'Judith P.',
						avatar: ''
					},
					lastEntry: {
						parentId: 6,
						type: 'Resolved',
						timestamp: '08/19/21 - 1:15PM',
						description: 'Simple discrepancy, all sorted out now',
						author: 'Judith P.'
					}
				},
				{
					id: 3,
					title: 'Terms Have Changed On Gift Card Connect',
					type: 'Info',
					timestamp: '08/07/21 - 10:10AM',
					assigned: null,
					lastEntry: {
						parentId: 3,
						type: 'Resolved',
						timestamp: '08/07/21 - 1:30PM',
						description: 'Found a simple mistake on the report!',
						author: 'Becky K.'
					}
				}
			];
		}),
		switchMap((res) => [getNotificationsCompleted(res)]),
		catchError((error, source) =>
			merge(of(getNotificationsFailed(error.message)), source)
		)
	);

export const getNotificationsByIdEpic = (action$) =>
	action$.pipe(
		ofType(GET_NOTIFICATION_BY_ID),
		mergeMap(async (action) => {
			const filteredNotifications = __TEST__notificationsById.filter(
				(notification) => notification.parentId === action.id
			);
			return filteredNotifications;
		}),
		switchMap((res) => [getNotificationsByIdCompleted(res)]),
		catchError((error, source) =>
			merge(of(getNotificationsByIdFailed(error.message)), source)
		)
	);
