import { getTeam } from './getTeam';
import { supabase } from './supabase';

export async function getActivity(id) {
	let { data: activity, error } = await supabase
		.from('Activites')
		.select('*')
		.eq('id', id);

	const team = await getTeam(activity[0].teamId);

	const updatedActivity = { activity: activity[0], teamInfo: team[0] };

	return updatedActivity;
}
