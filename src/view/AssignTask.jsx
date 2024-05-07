import { Link } from 'react-router-dom';
import styles from './AssignTask.module.css';

function AssignTask() {
	return (
		<div className={styles.gridAssign}>
			<p className={styles.p}>Title</p>
			<input type="text" className={styles.input} />

			<p className={styles.p}>Description</p>
			<input type="text" className={styles.input} />

			<p className={styles.p}>Deadline</p>
			<input type="date" className={styles.input} />

			<p className={styles.p}>Select priority</p>
			<select className={styles.select}>
				<option value="Low">Low</option>
				<option value="Medium">Medium</option>
				<option value="High">High</option>
			</select>

			<p className={styles.p}>Select a member</p>
			<select className={styles.select}>
				<option value="id-1">Member 1</option>
				<option value="id-2">Member 2</option>
				<option value="id-3">Member 3</option>
			</select>
			<div className={styles.buttons}>
				<Link to={-1}>Cancel</Link>
				<button>Assign task</button>
			</div>
		</div>
	);
}

export default AssignTask;
