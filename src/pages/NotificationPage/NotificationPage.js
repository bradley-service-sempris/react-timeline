import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Timeline from '../Timeline/Timeline';
import { withStyles } from '@material-ui/styles';
import Notifications from './Notifications';
import { timelineActions } from '../../containers/Timeline';

const styles = (theme) => ({
	root: {
		display: 'flex',
		justifyContent: 'center',
		height: '100vh'
	}
});

const NotificationPage = (props) => {
	const {
		classes,
		hasLoadedList,
		hasLoadedEntries,
		isLoadingEntries,
		isLoadingList,
		listOfNotifications,
		selectedNotification
	} = props;
	const { root } = classes;

	return (
		<div className={root}>
			<Notifications
				parentData={listOfNotifications}
				hasLoadedList={hasLoadedList}
				isLoadingList={isLoadingList}
			/>
			<Timeline
				data={selectedNotification}
				hasLoadedEntries={hasLoadedEntries}
				isLoadingEntries={isLoadingEntries}
			/>
		</div>
	);
};

NotificationPage.propTypes = {
	classes: PropTypes.object,
	hasLoadedEntries: PropTypes.bool,
	hasLoadedList: PropTypes.bool,
	isLoadingEntries: PropTypes.bool,
	isLoadingList: PropTypes.bool,
	listOfNotifications: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
	selectedNotification: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
};

const mapStateToProps = (state) => {
	return {
		hasLoadedList: state.timelineReducer
			.get('notificationList')
			.get('hasBeenLoaded'),
		hasLoadedEntries: state.timelineReducer
			.get('selectedNotification')
			.get('hasBeenLoaded'),
		isLoadingEntries: state.timelineReducer
			.get('selectedNotification')
			.get('isLoading'),
		isLoadingList: state.timelineReducer
			.get('notificationList')
			.get('isLoading'),
		listOfNotifications: state.timelineReducer
			.get('notificationList')
			.get('data'),
		selectedNotification: state.timelineReducer
			.get('selectedNotification')
			.get('data')
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		getNotifications: () => {
			dispatch(timelineActions.getNotifications());
		}
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(withStyles(styles)(NotificationPage));
