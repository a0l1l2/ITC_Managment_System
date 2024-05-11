import { supabase } from './supabase';

const activities = [
	{
		title: 'Project Alpha',
		teamId: 1,
		description:
			'This project involves developing a new software application.',
		date: '1/1/2014',
	},
	{
		title: 'Marketing Campaign Launch',
		teamId: 32,
		description: 'Launch of a new marketing campaign for product X.',
		date: '2/2/2014',
	},
	{
		title: 'Research Proposal Submission',
		teamId: 33,
		description: 'Submission of a research proposal for funding.',
		date: '3/3/2014',
	},
	{
		title: 'Team Building Workshop',
		teamId: 34,
		description: 'Organizing a team building workshop for the department.',
		date: '4/4/2014',
	},
	{
		title: 'Product Development Meeting',
		teamId: 37,
		description: 'Meeting to discuss progress on product development.',
		date: '5/5/2014',
	},
	{
		title: 'Client Presentation',
		teamId: 33,
		description: 'Presentation to potential clients about our services.',
		date: '6/6/2014',
	},
	{
		title: 'Quarterly Review',
		teamId: 37,
		description: 'Review meeting to assess quarterly performance.',
		date: '7/7/2014',
	},
	{
		title: 'Training Session',
		teamId: 32,
		description: 'Training session on new software tools.',
		date: '8/8/2014',
	},
	{
		title: 'Budget Planning Meeting',
		teamId: 39,
		description: 'Meeting to plan budget allocation for the upcoming year.',
		date: '9/9/2014',
	},
	{
		title: 'Product Launch Event',
		teamId: 40,
		description: 'Event to celebrate the launch of our new product.',
		date: '10/10/2014',
	},
];

export async function uploadActivities() {
	const { data, error } = await supabase
		.from('Activites')
		.insert(activities)
		.select();

	return error;
}
