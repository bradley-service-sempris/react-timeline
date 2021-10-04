module.exports = [
	{
		parentId: 2,
		title: 'FISERV - Value Plus',
		type: 'Resolved',
		timestamp: '08/13/21 - 4:44PM',
		description: 'I have resolved the issue',
		author: 'Justin G.'
	},
	{
		parentId: 2,
		title: 'FISERV - Value Plus',
		type: 'Blocked',
		timestamp: '08/13/21 - 4:12PM',
		description:
			'I am unavailable to take on this issue at this time, please consider me in the future',
		author: 'Heather P.'
	},
	{
		parentId: 2,
		title: 'FISERV - Value Plus',
		type: 'Assigned',
		timestamp: '08/13/21 - 4:11PM',
		description: 'I have assigned the task to Heather',
		author: {
			username: 'Justin G.',
			avatar:
				'https://i.pinimg.com/originals/82/7f/a9/827fa9354957d19a1ad9d8426e286ab2.jpg'
		}
	},
	{
		parentId: 2,
		title: 'FISERV - Value Plus',
		type: 'Escalation',
		timestamp: '08/13/21 - 3:52PM',
		description: 'I have sent out the problem for fixing',
		author: {
			username: 'Justin G.',
			avatar:
				'https://i.pinimg.com/originals/82/7f/a9/827fa9354957d19a1ad9d8426e286ab2.jpg'
		}
	},
	{
		parentId: 2,
		title: 'FISERV - Value Plus',
		type: 'Alert',
		timestamp: '08/13/21 - 2:13PM',
		description: 'I am currently looking into the issue',
		author: {
			username: 'Justin G.',
			avatar:
				'https://i.pinimg.com/originals/82/7f/a9/827fa9354957d19a1ad9d8426e286ab2.jpg'
		}
	},
	{
		parentId: 3,
		type: 'Resolved',
		timestamp: '08/07/21 - 1:30PM',
		description: 'Found a simple mistake on the report!',
		author: 'Becky K.'
	},
	{
		parentId: 3,
		type: 'Assigned',
		timestamp: '08/07/21 - 11:33AM',
		description: 'Becky K. has claimed the issue',
		author: 'Becky K.'
	},
	{
		parentId: 6,
		type: 'Resolved',
		timestamp: '08/19/21 - 1:15PM',
		description: 'Simple discrepancy, all sorted out now',
		author: {
			username: 'Judith P.',
			avatar: ''
		}
	},
	{
		parentId: 6,
		type: 'Assigned',
		timestamp: '08/19/21 - 12:11PM',
		description: 'I have initialized the issue on my end - looking into it now',
		author: {
			username: 'Judith P.',
			avatar: ''
		}
	},
	{
		parentId: 6,
		type: 'Escalation',
		timestamp: '08/19/21 - 11:44AM',
		description: 'I have escalated the issue to Judith',
		author: 'Cloris L.'
	},
	{
		parentId: 6,
		type: 'Blocked',
		timestamp: '08/19/21 - 11:41AM',
		description:
			'I do not have the clearance to resolve this issue. I will be escalating it to Judith',
		author: 'Cloris L.'
	}
];
