import toast, { Toaster } from 'react-hot-toast';
import styles from './ActivitySchedule.module.css';
import { useNavigate } from 'react-router-dom';

function ActivitySchedule() {
	const navigate = useNavigate();

	return (
		<div>
			<Toaster />

			<h1>Activity Schedule</h1>

			<div className={styles.table}>
				<div className={styles.header}>
					<p>Activity</p>
					<p>Team</p>
					<p>Description</p>
					<p>Date</p>
				</div>

				<div className={styles.body}>
					<div className={styles.row}>
						<p>Writing session</p>
						<p>Writing Team</p>
						<p>...</p>
						<p>15/5/2024</p>
						<button onClick={() => navigate(`editactivity${1}`)}>
							Change date
						</button>
					</div>
				</div>
			</div>
			<div className={styles.operations}>
				<button
					onClick={() =>
						toast("This feature hasn't been implemented yet")
					}
				>
					Add activity
				</button>
			</div>
		</div>
	);
}

export default ActivitySchedule;
