import { supabase } from './supabase';

export async function uploadMember(member) {
	const { data, error } = await supabase
		.from('Members')
		.insert([member])
		.select();
	console.log(error);

	return { data, error };
}

export async function uploadMembers() {
	const members = [
		{
			fullName: 'John Doe',
			email: 'john.doe@example.com',
			password: 'jd@123456',
			position: 'Developer',
		},
		{
			fullName: 'Jane Smith',
			email: 'jane.smith@example.com',
			password: 'js@567890',
			position: 'Developer',
		},
		{
			fullName: 'Alice Johnson',
			email: 'alice.johnson@example.com',
			password: 'aj@901234',
			position: 'Graphic Designer',
		},
		{
			fullName: 'Bob Brown',
			email: 'bob.brown@example.com',
			password: 'bb@345678',
			position: 'Graphic Designer',
		},
		{
			fullName: 'Emily Davis',
			email: 'emily.davis@example.com',
			password: 'ed@789012',
			position: 'Developer',
		},
		{
			fullName: 'Michael Wilson',
			email: 'michael.wilson@example.com',
			password: 'mw@1234567',
			position: 'Team Leader',
		},
		{
			fullName: 'Sophia Martinez',
			email: 'sophia.martinez@example.com',
			password: 'sm@5678901',
			position: 'Graphic Designer',
		},
		{
			fullName: 'David Taylor',
			email: 'david.taylor@example.com',
			password: 'dt@9012345',
			position: 'Writer',
		},
		{
			fullName: 'Olivia Anderson',
			email: 'olivia.anderson@example.com',
			password: 'oa@3456789',
			position: 'Project Manager',
		},
		{
			fullName: 'James Wilson',
			email: 'james.wilson@example.com',
			password: 'jw@7890123',
			position: 'Writer',
		},
	];

	const { data, error } = await supabase
		.from('Members')
		.insert(members)
		.select();

	console.log(error);
}
