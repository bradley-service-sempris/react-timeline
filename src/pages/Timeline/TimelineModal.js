import React, { useCallback, useState } from 'react';
import { withStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

const styles = (theme) => ({
	form: {
		display: 'flex',
		flexDirection: 'column',
		'& div': {
			margin: '8px 0px 8px 0px'
		},
		minWidth: '500px'
	}
});

const TimelineModal = (props) => {
	const { classes, isOpen, notifications, onClose } = props;
	const { form } = classes;

	const [validToApply, setValidToApply] = useState(false);
	const [inputValues, setInputValues] = useState({
		title: '',
		type: '',
		time: '',
		description: ''
	});

	const typeOptions = [
		'Alert',
		'Assigned',
		'Blocked',
		'Escalation',
		'Resolved'
	];

	const addNewTimelineCard = () => {
		let { title, type, time, description } = inputValues;
		time = new Date(Date.now()).toLocaleString().replace(/,/g, ' -');

		const newCard = {
			title,
			type,
			time,
			description
		};
		notifications.push(newCard);
		onClose();
	};

	const handleInputChange = useCallback(
		(key, value) => {
			const inputs = Object.assign({}, inputValues);
			inputs[key] = value;

			if (inputs.type !== '' && inputs.description !== '') {
				setValidToApply(true);
			} else {
				setValidToApply(false);
			}
			setInputValues(inputs);
		},
		[inputValues, setInputValues]
	);

	return (
		<Container className={form}>
			<Dialog open={isOpen} onClose={onClose}>
				<DialogTitle>Add New Card To Timeline</DialogTitle>
				<DialogContent>
					<DialogContentText>
						Fill out all fields in order to add a new card to the timeline:
					</DialogContentText>
					<Container className={form}>
						{/* <TextField
							label="Title*"
							defaultValue={notifications[0].title}
							InputLabelProps={{
								shrink: true
							}}
							onChange={(e) => handleInputChange('title', e.target.value)}
						/> */}
						<TextField
							select
							label="Type*"
							value={inputValues.type ? inputValues.type : ''}
							helperText="Please Select One"
							onChange={(e) => handleInputChange('type', e.target.value)}
							InputLabelProps={{
								shrink: true
							}}
						>
							{typeOptions.map((type) => {
								return (
									<MenuItem key={type} value={type}>
										{type}
									</MenuItem>
								);
							})}
						</TextField>
						<TextField
							label="Description*"
							InputLabelProps={{
								shrink: true
							}}
							onChange={(e) => handleInputChange('description', e.target.value)}
						/>
					</Container>
				</DialogContent>
				<DialogActions>
					<Button onClick={onClose} size="small">
						Cancel
					</Button>
					<Button
						onClick={addNewTimelineCard}
						disabled={!validToApply}
						size="small"
					>
						Add
					</Button>
				</DialogActions>
			</Dialog>
		</Container>
	);
};

TimelineModal.propTypes = {
	classes: PropTypes.object,
	isOpen: PropTypes.bool,
	notifications: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
	// onAdd: PropTypes.func,
	onClose: PropTypes.func
};

export default withStyles(styles)(TimelineModal);
