import { supabase } from './supabase';

export async function uploadEvent(event) {
	const { data, error } = await supabase
		.from('Events')
		.insert([event])
		.select();

	console.log(error);
}
