import { supabase } from './supabase';

export async function getTeam(id) {
	let { data: team, error } = await supabase
		.from('Teams')
		.select('*')
		.eq('id', id);

	return team;
}
