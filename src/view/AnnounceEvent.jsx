import { Link } from 'react-router-dom';
import styles from './AnnounceEvent.module.css';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Toaster } from 'react-hot-toast';
import { ClipLoader } from 'react-spinners';
import { uploadEvent } from '../model/uploadEvent';
import { getTeams } from '../model/getTeams';

function AnnounceEvent() {
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [date, setDate] = useState('');
	const [team, setTeam] = useState('');
	const [teams, setTeams] = useState([]);

	useEffect(() => {
		async function fetchTeams() {
			const teams = await getTeams();

			setTeams(teams);
		}
		fetchTeams();
	}, []);

	async function AnnounceEvent(e) {
		e.preventDefault();
		if (!title || !description || !date || !team) {
			toast.error('Please fill out all of the forms!');
			return;
		}
		const teamId = Number(team);
		await uploadEvent({ title, date, description, teamId });
		setTitle('');
		setDescription('');
		setDate('');
		setTeam('');
		toast.success(`Event announced succesfully!`);
	}

	return (
		<>
			<Toaster />
			<form>
				<div className={styles.gridAssign}>
					<p className={styles.p}>Title</p>
					<input
						type="text"
						className={styles.input}
						value={title}
						onChange={e => {
							setTitle(e.target.value);
						}}
					/>

					<p className={styles.p}>Description</p>
					<input
						type="text"
						className={styles.input}
						value={description}
						onChange={e => {
							setDescription(e.target.value);
						}}
					/>

					<p className={styles.p}>Date</p>
					<input
						type="date"
						className={styles.input}
						value={date}
						onChange={e => {
							setDate(e.target.value);
						}}
					/>

					<p className={styles.p}>Team</p>
					{teams.length ? (
						<select
							className={styles.select}
							value={team}
							onChange={e => {
								setTeam(e.target.value);
							}}
						>
							<option value="">Select team</option>
							{teams.map(team => (
								<option value={team.id} key={team.id}>
									{team.name}
								</option>
							))}
						</select>
					) : (
						<div className={styles.loader}>
							<ClipLoader />
						</div>
					)}
				</div>
				<div className={styles.buttons}>
					<Link to={'/announcements'}>Go back</Link>
					<button onClick={AnnounceEvent}>Announce</button>
				</div>
			</form>
		</>
	);
}

export default AnnounceEvent;
