import { supabase } from './supabase';

export async function login(email, password) {
	let { data, error } = await supabase.auth.signInWithPassword({
		email,
		password,
	});

	return { data, error };
}

export async function getCurrentUser() {
	const { data: session } = await supabase.auth.getSession();

	if (!session.session) return null;

	const { data } = await supabase.auth.getUser();

	const user = data?.user;
	const isAuthenticated = user?.role === 'authenticated';

	return { user, isAuthenticated };
}

export async function getCurrentUserInfo(email, password) {
	let { data: info } = await supabase
		.from('Managers')
		.select('*')
		.eq('email', email)
		.eq('password', password);

	let { data: branch } = await supabase
		.from('Branches')
		.select('*')
		.eq('id', info[0].branchId);

	return { info, branch };
}
