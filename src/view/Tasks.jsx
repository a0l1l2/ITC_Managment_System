import { useState } from 'react';
import styles from './Tasks.module.css';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

function Tasks() {
	// const [tasks, setTasks] = useState();
	// const [isModalOpen, setIsModalOpen] = useState(false);

	// function assignTask({}) {}

	// useEffect(() => {}, tasks);

	return (
		<>
			<h1>Tasks</h1>

			<div className={styles.table}>
				<div className={styles.header}>
					<p>Title</p>
					<p>Member</p>
					<p>Deadline</p>
					<p>Description</p>
					<p>Priority</p>
				</div>

				<div className={styles.body}>
					<div className={styles.row}>
						<p>Create web-app for ITC</p>
						<p>Paiwast</p>
						<p>19/5/2024</p>
						<p>
							Create a fully functioning web-app based on the
							previous assignments in SE301 class.
						</p>
						<p className={styles.tag}>High</p>
					</div>

					<div className={styles.row}>
						<p>Create web-app for ITC</p>
						<p>Paiwast</p>
						<p>19/5/2024</p>
						<p>
							Create a fully functioning web-app based on the
							previous assignments in SE301 class.
						</p>
						<p>High</p>
					</div>
					<div className={styles.row}>
						<p>Create web-app for ITC</p>
						<p>Paiwast</p>
						<p>19/5/2024</p>
						<p>
							Create a fully functioning web-app based on the
							previous assignments in SE301 class.
						</p>
						<p>High</p>
					</div>
					<div className={styles.row}>
						<p>Create web-app for ITC</p>
						<p>Paiwast</p>
						<p>19/5/2024</p>
						<p>
							Create a fully functioning web-app based on the
							previous Create a fully functioning web-app based on
							the previous Create a fully functioning web-app
							based on the previous assignments in SE301 class.
						</p>
						<p>High</p>
					</div>
					<div className={styles.row}>
						<p>Create web-app for ITC</p>
						<p>Paiwast</p>
						<p>19/5/2024</p>
						<p>
							Create a fully functioning web-app based on the
							previous assignments in SE301 class. assignments in
							SE301 class. assignments in SE301 class.
						</p>
						<p>High</p>
					</div>
				</div>
			</div>
			<div className={styles.operations}>
				<Link to="/assignTask">Assign Task</Link>
			</div>
		</>
	);
}

export default Tasks;
