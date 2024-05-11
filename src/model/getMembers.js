import { supabase } from './supabase';

export async function getMembers() {
	let { data: members, error } = await supabase.from('Members').select('*');
	return { members, error };
}
