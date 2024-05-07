import styles from './ActivitySchedule.module.css';

function ActivitySchedule() {
	return (
		<div>
			<>
				<h1>Activity Schedule</h1>

				<div className={styles.table}>
					<div className={styles.header}>
						<p>Activity</p>
						<p>Team</p>
						<p>Branch</p>
						<p>Description</p>
						<p>Date</p>
					</div>

					<div className={styles.body}>
						<div className={styles.row}>
							<p>Writing session</p>
							<p>Writing Team</p>
							<p>Babylon</p>
							<p>...</p>
							<p>15/5/2024</p>
							<button>Edit</button>
						</div>

						<div className={styles.row}>
							<p>Writing session</p>
							<p>Writing Team</p>
							<p>Babylon</p>
							<p>...</p>
							<p>20/5/2024</p>
							<button>Edit</button>
						</div>
					</div>
				</div>
				<div className={styles.operations}></div>
			</>
		</div>
	);
}

export default ActivitySchedule;
