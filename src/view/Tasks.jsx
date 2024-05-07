import { useState } from 'react';
import styles from './Tasks.module.css';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTasks } from '../model/TasksProvider';

function Tasks() {
	const { tasks } = useTasks();

	console.log(tasks);

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
					{tasks.map(task => (
						<div className={styles.row} key={task.id}>
							<p>{task.title}</p>
							<p>{task.member}</p>
							<p>{task.deadline}</p>
							<p>{task.description}</p>
							<p className={styles.tag}>{task.priority}</p>
						</div>
					))}
				</div>
			</div>
			<div className={styles.operations}>
				<Link to="/assignTask">Assign Task</Link>
			</div>
		</>
	);
}

export default Tasks;
