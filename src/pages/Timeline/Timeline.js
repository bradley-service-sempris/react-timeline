import React, { Fragment, useCallback, useEffect, useState } from 'react';
import {
	VerticalTimeline,
	VerticalTimelineElement
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { withStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import TimelineModal from './TimelineModal';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';
import CloseIcon from '@material-ui/icons/Close';
import Container from '@material-ui/core/Container';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import HowToRegIcon from '@material-ui/icons/HowToReg';
import IconButton from '@material-ui/core/IconButton';
import NotInterestedIcon from '@material-ui/icons/NotInterested';
import StarIcon from '@material-ui/icons/Star';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import Typography from '@material-ui/core/Typography';

// TODO: use theme colors where applicable

const styles = (theme) => ({
	buttonContainer: {
		display: 'flex',
		alignItems: 'center',
		flexDirection: 'column',
		margin: '10px'
	},
	button: {
		display: 'flex',
		justifyContent: 'center',
		border: '1px solid black',
		background: 'white'
	},
	initialEntry: {
		display: 'flex',
		justifyContent: 'center'
	},
	notificationBox: {
		margin: '5px 0px 5px 0px',
		'& p': {
			margin: 0
		},
		'& button': {
			display: 'flex',
			justifyContent: 'flex-start',
			alignContent: 'flex-end'
		},
		'& button > span > svg': {
			width: '.5em',
			height: '.5em'
		},
		'& .vertical-timeline-element-date': {
			float: 'none',
			padding: 0
		}
	},
	root: {
		width: '25vw',
		height: '100vh',
		border: '2px solid lightgrey',
		background: '#e3e3e3',
		margin: 0
	},
	title: {
		display: 'flex',
		justifyContent: 'space-between',
		height: '1.5em'
	}
});

const Timeline = (props) => {
	const {
		classes,
		data,
		getNotificationById,
		hasLoadedEntries,
		isLoadingEntries,
		parentData
	} = props;
	const {
		button,
		buttonContainer,
		initialEntry,
		notificationBox,
		root,
		title
	} = classes;

	const [open, setOpen] = useState(false);

	const handleClose = () => {
		setOpen(false);
	};

	const renderTimelineTitle = useCallback(
		(id) => {
			let filteredTitle = parentData
				.filter((notification) => notification.id === id)
				.map((notification) => notification.title);
			if (filteredTitle.length) {
				return filteredTitle[0];
			}
			return [];
		},
		[parentData]
	);

	useEffect(() => {
		if (hasLoadedEntries) {
			renderTimelineTitle(data[0].parentId);
		}
	}, [data, hasLoadedEntries, parentData, renderTimelineTitle]);
	// TODO: auth user to make sure that they are capable of manipulating
	// the stream of notifications
	const deleteNotification = (card) => {
		const idx = data.indexOf(card);
		data.splice(idx, 1);
		return data;
	};

	const typeOptionColors = (type) => {
		switch (type) {
			case 'Alert':
				return { color: '#dbc202', background: '#fff' };
			case 'Assigned':
				return { color: '#75bab8', background: '#fff' };
			case 'Blocked':
				return { color: '#e00429', background: '#fff' };
			case 'Escalation':
				return { color: '#f78c19', background: '#fff' };
			case 'Resolved':
				return { color: '#74B72E', background: '#fff' };
			default:
				return { background: '#fff' };
		}
	};

	const typeOptionIcons = (type) => {
		switch (type) {
			case 'Alert':
				return <ErrorOutlineIcon />;
			case 'Assigned':
				return <HowToRegIcon />;
			case 'Blocked':
				return <NotInterestedIcon />;
			case 'Escalation':
				return <TrendingUpIcon />;
			case 'Resolved':
				return <CheckCircleOutlineIcon />;
			default:
				return <StarIcon />;
		}
	};

	const _renderTimeline = () => {
		return data.map((entry) => {
			return (
				<Fragment key={entry.timestamp}>
					<VerticalTimelineElement
						className={notificationBox}
						date={entry.timestamp}
						iconStyle={typeOptionColors(entry.type)}
						icon={typeOptionIcons(entry.type)}
					>
						<div className={title}>
							<Typography variant="body1">{entry.type}</Typography>
							<IconButton onClick={() => deleteNotification(entry)}>
								<CloseIcon />
							</IconButton>
						</div>
						<Typography variant="subtitle2">{entry.description}</Typography>
						<Chip
							avatar={
								<Avatar
									alt={entry.author.username}
									src={entry.author.avatar || entry.author.username}
								/>
							}
							size="small"
							label={
								entry.author.username ? entry.author.username : entry.author
							}
							variant="outlined"
						/>
						&nbsp; &nbsp;
					</VerticalTimelineElement>
				</Fragment>
			);
		});
	};

	const _addButton = () => {
		return (
			<Button className={button} onClick={() => setOpen(true)}>
				Add New Update
			</Button>
		);
	};

	return (
		<Container className={root}>
			{!hasLoadedEntries ? (
				<Typography variant="h5">Select A Notification Stream</Typography>
			) : isLoadingEntries ? (
				<Typography variant="body1">Loading...</Typography>
			) : (
				<Fragment>
					<div className={buttonContainer}>{_addButton()}</div>
					<VerticalTimeline layout={'1-column-left'} visible={true}>
						{_renderTimeline()}
						<TimelineModal
							isOpen={open}
							onClose={handleClose}
							notifications={data}
							getNotificationById={getNotificationById}
						/>
						<VerticalTimelineElement
							iconStyle={typeOptionColors()}
							icon={typeOptionIcons()}
							className={notificationBox}
							layout={'1-column-left'}
						>
							<Typography variant="h6" className={initialEntry}>
								{renderTimelineTitle(data[0].parentId) || null}
							</Typography>
						</VerticalTimelineElement>
					</VerticalTimeline>
				</Fragment>
			)}
		</Container>
	);
};

Timeline.propTypes = {
	classes: PropTypes.object,
	data: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
	getNotificationById: PropTypes.func,
	hasLoadedEntries: PropTypes.bool,
	isLoadingEntries: PropTypes.bool,
	parentData: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
};

export default withStyles(styles)(Timeline);
