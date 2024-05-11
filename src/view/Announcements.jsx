import toast, { Toaster } from 'react-hot-toast';
import styles from './Announcements.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { ClipLoader } from 'react-spinners';
import { getEvents } from '../model/getEvents';

function Announcments() {
	const navigate = useNavigate();
	const [events, setEvents] = useState([]);

	useEffect(() => {
		async function fetchEvents() {
			const fetchedEvents = await getEvents();
			setEvents(fetchedEvents);
		}

		fetchEvents();
	}, []);

	return (
		<div>
			<Toaster />

			<h1>Announcments</h1>

			<div className={styles.table}>
				<div className={styles.header}>
					<p>Event</p>
					<p>Team</p>
					<p>Description</p>
					<p>Date</p>
				</div>

				<div className={styles.body}>
					{events.length ? (
						events.map(event => (
							<div className={styles.row} key={event.event.id}>
								<p>{event.event.title}</p>
								<p>{event.teamInfo.name}</p>
								<p>{event.event.description}</p>
								<p>{event.event.date}</p>
							</div>
						))
					) : (
						<div className={styles.loader}>
							<ClipLoader />
						</div>
					)}
				</div>
			</div>
			<div className={styles.operations}>
				<Link to="/announceevent">Announce event</Link>
			</div>
		</div>
	);
}

export default Announcments;
