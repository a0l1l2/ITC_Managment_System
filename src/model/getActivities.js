import { getTeam } from './getTeam';
import { supabase } from './supabase';

export async function getActivities() {
	let { data: activities, error } = await supabase
		.from('Activites')
		.select('*');

	const updatedActivites = [];

	for (const activity of activities) {
		const team = await getTeam(activity.teamId);
		updatedActivites.push({ activity, teamInfo: team[0] });
	}

	return updatedActivites;
}
