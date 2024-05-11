import { Link, useNavigate, useParams } from 'react-router-dom';
import styles from './EditActivity.module.css';
import { useEffect, useState } from 'react';
import { getActivity } from '../model/getActivity';
import { ClipLoader } from 'react-spinners';
import { updateActivity } from '../model/updateActivity';
import toast, { Toaster } from 'react-hot-toast';

function EditActivity() {
	const { id } = useParams();
	const [activity, setActivity] = useState();
	const [changedDate, setChangedDate] = useState('');
	useEffect(() => {
		async function fetchActvity() {
			const data = await getActivity(Number(id));
			setActivity(data);
		}
		fetchActvity();
	}, [id, changedDate]);

	async function handleSubmit(e) {
		e.preventDefault();
		if (!changedDate) {
			toast.error('Please select a date to change the current one');
			return;
		}
		await updateActivity(id, changedDate);
		toast.success('Date was successfully changed');
		setChangedDate('');
	}

	return (
		<form className={styles.container} onSubmit={handleSubmit}>
			<Toaster />
			{activity ? (
				<>
					<p className={styles.p}>
						Name:{' '}
						<span className={styles.span}>
							{activity.activity.title}
						</span>
					</p>
					<p className={styles.p}>
						Team:{' '}
						<span className={styles.span}>
							{activity.teamInfo.name}
						</span>
					</p>
					<p className={styles.p}>
						Current date:{' '}
						<span className={styles.span}>
							{activity.activity.date}
						</span>
					</p>
					<p className={styles.p}>
						Change to:
						<input
							className={styles.changedDate}
							disabled
							type="date"
							value={changedDate}
						/>
					</p>
				</>
			) : (
				<ClipLoader />
			)}
			<input
				className={styles.date}
				type="date"
				value={changedDate}
				onChange={e => setChangedDate(e.target.value)}
			/>
			<div className={styles.buttons}>
				<Link className={styles.button} to="/activityschedule">
					Go back
				</Link>
				<button className={styles.button}>Change date</button>
			</div>
		</form>
	);
}

export default EditActivity;
