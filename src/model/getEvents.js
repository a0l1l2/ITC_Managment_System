import { getTeam } from './getTeam';
import { supabase } from './supabase';

export async function getEvents() {
	let { data: events, error } = await supabase.from('Events').select('*');

	const updatedEvents = [];

	for (const event of events) {
		const team = await getTeam(event.teamId);
		updatedEvents.push({ event, teamInfo: team[0] });
	}

	return updatedEvents;
}
