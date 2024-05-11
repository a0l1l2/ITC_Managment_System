import { supabase } from './supabase';

const teams = [
	{
		name: 'Development Team A',
		numMembers: 8,
		branchId: 1,
	},
	{
		name: 'Marketing Team',
		numMembers: 6,
		branchId: 2,
	},
	{
		name: 'Research Team',
		numMembers: 5,
		branchId: 3,
	},
	{
		name: 'Development Team B',
		numMembers: 7,
		branchId: 1,
	},
	{
		name: 'Sales Team',
		numMembers: 5,
		branchId: 2,
	},
	{
		name: 'Quality Assurance Team',
		numMembers: 4,
		branchId: 1,
	},
	{
		name: 'Customer Support Team',
		numMembers: 6,
		branchId: 3,
	},
	{
		name: 'Operations Team',
		numMembers: 7,
		branchId: 2,
	},
	{
		name: 'Finance Team',
		numMembers: 5,
		branchId: 3,
	},
	{
		name: 'Human Resources Team',
		numMembers: 4,
		branchId: 1,
	},
];

export async function uploadTeams() {
	const { data, error } = await supabase.from('Teams').insert(teams).select();
	return error;
}
