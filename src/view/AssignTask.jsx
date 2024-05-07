import { Link, useNavigate } from 'react-router-dom';
import styles from './AssignTask.module.css';
import { useTasks } from '../model/TasksProvider';
import { useState } from 'react';
import { MdErrorOutline } from 'react-icons/md';
import toast from 'react-hot-toast';
import { Toaster } from 'react-hot-toast';

function AssignTask() {
	const navigate = useNavigate();
	const { dispatch } = useTasks();

	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [deadline, setDeadline] = useState('');
	const [priority, setPriority] = useState('');
	const [member, setMember] = useState('');

	function assignTask(e) {
		e.preventDefault();
		if (!title || !description || !deadline || !priority || !member) {
			toast.error('Please fill out all of the forms!');
			return;
		}
		dispatch({
			type: 'tasks/assignTask',
			payload: { title, member, deadline, description, priority },
		});

		setTitle('');
		setDescription('');
		setDeadline('');
		setPriority('');
		setMember('');
		toast.success(`Task assigned succesfully!`);
	}

	return (
		<>
			<Toaster />
			<form className={styles.gridAssign}>
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

				<p className={styles.p}>Deadline</p>
				<input
					type="date"
					className={styles.input}
					value={deadline}
					onChange={e => {
						setDeadline(e.target.value);
					}}
				/>

				<p className={styles.p}>Priority</p>
				<select
					className={styles.select}
					value={priority}
					onChange={e => {
						setPriority(e.target.value);
					}}
				>
					<option value="">Select priority</option>
					<option value="Low">Low</option>
					<option value="Medium">Medium</option>
					<option value="High">High</option>
				</select>

				<p className={styles.p}>Member</p>
				<select
					className={styles.select}
					value={member}
					onChange={e => {
						setMember(e.target.value);
					}}
				>
					<option value="">Select member</option>
					<option value="id-1">Member 1</option>
					<option value="id-2">Member 2</option>
					<option value="id-3">Member 3</option>
				</select>
				<div className={styles.buttons}>
					<Link to={'/'}>Cancel</Link>
					<button onClick={assignTask}>Assign task</button>
				</div>
			</form>
		</>
	);
}

export default AssignTask;
