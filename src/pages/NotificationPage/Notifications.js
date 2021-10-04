import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import { timelineActions } from '../../containers/Timeline';

import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import Typography from '@material-ui/core/Typography';

const styles = (theme) => ({
	card: {
		margin: '10px 5px 10px 5px',
		padding: '5px 10px 5px 10px'
	},
	cardContent: {
		display: 'flex',
		justifyContent: 'space-between'
	},
	header: {
		display: 'flex',
		justifyContent: 'center'
	},
	root: {
		width: '25vw',
		height: '100vh',
		border: '2px solid lightgrey'
	}
});

const Notifications = (props) => {
	const {
		classes,
		getNotifications,
		getNotificationById,
		hasLoadedList,
		isLoadingList,
		parentData
	} = props;
	const { card, cardContent, header, root } = classes;

	useEffect(() => {
		if (!hasLoadedList && !isLoadingList) {
			getNotifications();
		}
	}, [getNotifications, hasLoadedList, isLoadingList]);

	const typeOptionColors = (type) => {
		switch (type) {
			case 'Severe':
				return { color: '#e00429' };
			case 'Info':
				return { color: '#74B72E' };
			case 'Warning':
				return { color: '#dbc202' };
			default:
				break;
		}
	};

	return (
		<div className={root}>
			<Typography className={header} variant="h5">
				Notifications
			</Typography>
			{isLoadingList ? (
				<Typography variant="h5">Loading...</Typography>
			) : (
				<div>
					{parentData.map((entry) => {
						return (
							<Card className={card} key={entry.timestamp}>
								<CardActionArea onClick={() => getNotificationById(entry.id)}>
									<Typography
										style={typeOptionColors(entry.type)}
										variant="caption"
									>
										{entry.type}
									</Typography>
									<div className={cardContent} style={{ marginBottom: '10px' }}>
										<Typography>{entry.title}</Typography>
										<Typography variant="body2">{entry.timestamp}</Typography>
									</div>
									<div className={cardContent}>
										<div>
											<Typography variant="caption">Latest Entry:</Typography>
											<Typography variant="subtitle2">
												{entry.lastEntry ? entry.lastEntry.description : null}
											</Typography>
										</div>
										<Chip
											avatar={
												<Avatar
													alt={
														entry.assigned
															? entry.assigned.username
															: 'Unassigned'
													}
													src={
														entry.assigned
															? entry.assigned.avatar
															: 'Unassigned'
													}
												/>
											}
											size="small"
											label={
												entry.assigned ? entry.assigned.username : 'Unassigned'
											}
											variant="outlined"
										/>
									</div>
								</CardActionArea>
							</Card>
						);
					})}
				</div>
			)}
		</div>
	);
};

Notifications.propTypes = {
	classes: PropTypes.object,
	getNotifications: PropTypes.func,
	getNotificationById: PropTypes.func,
	hasLoadedList: PropTypes.bool,
	isLoadingList: PropTypes.bool,
	parentData: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
};

const mapStateToProps = (state) => {
	return {};
};

const mapDispatchToProps = (dispatch) => {
	return {
		getNotifications: () => {
			dispatch(timelineActions.getNotifications());
		},
		getNotificationById: (id) => {
			dispatch(timelineActions.getNotificationsById(id));
		}
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(withStyles(styles)(Notifications));
