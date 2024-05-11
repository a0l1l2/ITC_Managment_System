import { supabase } from './supabase';

export async function updateActivity(id, newDate) {
	const { data, error } = await supabase
		.from('Activites')
		.update({ date: newDate })
		.eq('id', id)
		.select();
}
