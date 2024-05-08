
import styles from './Tasks.module.css';
import { Link } from 'react-router-dom';
import { useTasks } from '../controller/TasksProvider';
import ClipLoader from "react-spinners/ClipLoader";


function Tasks() {
	const { tasks } = useTasks();

const tags = {
	low: styles.tagLow,
	medium: styles.tagMedium,
	high: styles.tagHigh,
}

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
					
					{tasks.length ? tasks.map(task => (
						<div className={styles.row} key={task.id}>
							<p>{task.title || '-'}</p>
							<p>{task.member || '-'}</p>
							<p>{task.deadline || '-'}</p>
							<p>{task.description || '-'}</p>
							<p className={tags[task.priority?.toLowerCase()]}>{task.priority || '-'}</p>
						</div>
					)) : <div className={styles.spinner}><ClipLoader color={'#00215E'}/></div>}

			
				</div>
			</div>
			<div className={styles.operations}>
				<Link to="/assigntask">Assign Task</Link>
			</div>
		</>
	);
}

export default Tasks;
