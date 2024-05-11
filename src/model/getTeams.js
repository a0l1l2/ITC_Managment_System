import { supabase } from './supabase';

export async function getTeams() {
	let { data: teams, error } = await supabase.from('Teams').select('*');

	console.log(teams);

	return teams;
}
