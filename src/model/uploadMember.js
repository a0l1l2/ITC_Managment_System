import { supabase } from './supabase';

export async function uploadMember(member) {
	const { data, error } = await supabase
		.from('Members')
		.insert([member])
		.select();
	console.log(error);

	return { data, error };
}
