import React from 'react';
// import { connect } from 'react-redux';
import {
	BrowserRouter as Router,
	// Redirect,
	Route,
	Switch
} from 'react-router-dom';
import NotificationPage from '../../pages/NotificationPage/NotificationPage';

// const parentNotifications = [
// 	{
// 		id: 2,
// 		title: 'FISERV Value Plus Is Past Compliance',
// 		type: 'Severe',
// 		timestamp: '08/13/21 - 8:57AM',
// 		assigned: {
// 			username: 'Justin G.',
// 			avatar:
// 				'https://i.pinimg.com/originals/82/7f/a9/827fa9354957d19a1ad9d8426e286ab2.jpg'
// 		},
// 		lastEntry: {
// 			parentId: 2,
// 			title: 'FISERV - Value Plus',
// 			type: 'Resolved',
// 			timestamp: '08/13/21 - 4:44PM',
// 			description: 'I have resolved the issue',
// 			author: 'Justin G.'
// 		}
// 	},
// 	{
// 		id: 6,
// 		title: 'Fun Source May Have An Issue',
// 		type: 'Warning',
// 		timestamp: '08/19/21 - 11:19AM',
// 		assigned: {
// 			username: 'Judith P.',
// 			avatar: ''
// 		},
// 		lastEntry: {
// 			parentId: 6,
// 			type: 'Resolved',
// 			timestamp: '08/19/21 - 1:15PM',
// 			description: 'Simple discrepancy, all sorted out now',
// 			author: 'Judith P.'
// 		}
// 	},
// 	{
// 		id: 3,
// 		title: 'Terms Have Changed On Gift Card Connect',
// 		type: 'Info',
// 		timestamp: '08/07/21 - 10:10AM',
// 		assigned: null,
// 		lastEntry: {
// 			parentId: 3,
// 			type: 'Resolved',
// 			timestamp: '08/07/21 - 1:30PM',
// 			description: 'Found a simple mistake on the report!',
// 			author: 'Becky K.'
// 		}
// 	}
// ];

// const listOfNotifications = [
// 	{
// 		parentId: 2,
// 		title: 'FISERV - Value Plus',
// 		type: 'Alert',
// 		timestamp: '08/13/21 - 2:13PM',
// 		description: 'I am currently looking into the issue',
// 		author: {
// 			username: 'Justin G.',
// 			avatar:
// 				'https://i.pinimg.com/originals/82/7f/a9/827fa9354957d19a1ad9d8426e286ab2.jpg'
// 		}
// 	},
// 	{
// 		parentId: 2,
// 		title: 'FISERV - Value Plus',
// 		type: 'Escalation',
// 		timestamp: '08/13/21 - 3:52PM',
// 		description: 'I have sent out the problem for fixing',
// 		author: {
// 			username: 'Justin G.',
// 			avatar:
// 				'https://i.pinimg.com/originals/82/7f/a9/827fa9354957d19a1ad9d8426e286ab2.jpg'
// 		}
// 	},
// 	{
// 		parentId: 2,
// 		title: 'FISERV - Value Plus',
// 		type: 'Assigned',
// 		timestamp: '08/13/21 - 4:11PM',
// 		description: 'I have assigned the task to Heather',
// 		author: {
// 			username: 'Justin G.',
// 			avatar:
// 				'https://i.pinimg.com/originals/82/7f/a9/827fa9354957d19a1ad9d8426e286ab2.jpg'
// 		}
// 	},
// 	{
// 		parentId: 2,
// 		title: 'FISERV - Value Plus',
// 		type: 'Blocked',
// 		timestamp: '08/13/21 - 4:12PM',
// 		description:
// 			'I am unavailable to take on this issue at this time, please consider me in the future',
// 		author: 'Heather P.'
// 	},
// 	{
// 		parentId: 2,
// 		title: 'FISERV - Value Plus',
// 		type: 'Resolved',
// 		timestamp: '08/13/21 - 4:44PM',
// 		description: 'I have resolved the issue',
// 		author: 'Justin G.'
// 	},
// 	{
// 		parentId: 3,
// 		type: 'Assigned',
// 		timestamp: '08/07/21 - 11:33AM',
// 		description: 'Becky K. has claimed the issue',
// 		author: 'Becky K.'
// 	},
// 	{
// 		parentId: 3,
// 		type: 'Resolved',
// 		timestamp: '08/07/21 - 1:30PM',
// 		description: 'Found a simple mistake on the report!',
// 		author: 'Becky K.'
// 	},
// 	{
// 		parentId: 6,
// 		type: 'Blocked',
// 		timestamp: '08/19/21 - 11:41AM',
// 		description:
// 			'I do not have the clearance to resolve this issue. I will be escalating it to Judith',
// 		author: 'Cloris L.'
// 	},
// 	{
// 		parentId: 6,
// 		type: 'Escalation',
// 		timestamp: '08/19/21 - 11:44AM',
// 		description: 'I have escalated the issue to Judith',
// 		author: 'Cloris L.'
// 	},
// 	{
// 		parentId: 6,
// 		type: 'Assigned',
// 		timestamp: '08/19/21 - 12:11PM',
// 		description: 'I have initialized the issue on my end - looking into it now',
// 		author: {
// 			username: 'Judith P.',
// 			avatar: ''
// 		}
// 	},
// 	{
// 		parentId: 6,
// 		type: 'Resolved',
// 		timestamp: '08/19/21 - 1:15PM',
// 		description: 'Simple discrepancy, all sorted out now',
// 		author: {
// 			username: 'Judith P.',
// 			avatar: ''
// 		}
// 	}
// ];

const AppRouter = () => {
	return (
		<Router>
			<Switch>
				<Route
					exact
					path="/"
					render={(props) => <NotificationPage {...props} />}
				/>
			</Switch>
		</Router>
	);
};

export default AppRouter;
