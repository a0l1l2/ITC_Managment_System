import toast, { Toaster } from 'react-hot-toast';
import styles from './RegisterMember.module.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { uploadMember } from '../model/uploadMember';
import { useMembers } from '../controller/MembersProvider';
import { getMembers } from '../model/getMembers';

function RegisterMember() {
	const { dispatch } = useMembers();

	const [fullName, setFullName] = useState('p');
	const [email, setEmail] = useState('p');
	const [password, setPassword] = useState('pppppppp');
	const [confirmPassword, setConfirmPassword] = useState('ppp');

	async function register(e) {
		e.preventDefault();
		if (!fullName || !email || !password || !confirmPassword) {
			toast.error('Please fill out all of the forms!');
			return;
		} else if (password.length < 8) {
			toast.error('Passowrd needs to be at least 8 characters');
			return;
		} else if (password !== confirmPassword) {
			toast.error("Passowrds don't match");
			return;
		} else if (!email.match(/\w*@\w*\.\w*/gim)) {
			toast.error('Please provide a valid email address');
			return;
		}
		await uploadMember({ fullName, email, password });
		const { members, error } = await getMembers();
		console.log(members);
		dispatch({
			type: 'members/registerMember',
			payload: members,
		});
		setFullName('');
		setEmail('');
		setPassword('');
		setConfirmPassword('');
		toast.success(`Member registered succesfully!`);
	}

	return (
		<>
			<Toaster />
			<form>
				<div className={styles.gridAssign}>
					<p className={styles.p}>Full Name</p>
					<input
						type="text"
						className={styles.input}
						value={fullName}
						onChange={e => {
							setFullName(e.target.value);
						}}
					/>

					<p className={styles.p}>Email</p>
					<input
						type="text"
						className={styles.input}
						value={email}
						onChange={e => {
							setEmail(e.target.value);
						}}
					/>

					<p className={styles.p}>Password</p>
					<input
						type="password"
						className={styles.input}
						value={password}
						onChange={e => {
							setPassword(e.target.value);
						}}
					/>

					<p className={styles.p}>Confirm password</p>
					<input
						type="password"
						className={styles.input}
						value={confirmPassword}
						onChange={e => {
							setConfirmPassword(e.target.value);
						}}
					/>

					<p className={styles.p}>Position</p>
					<select className={styles.select}>
						<option>Select position</option>
						<option value="writer">Writer</option>
						<option value="graphic-designer">
							Graphic designer
						</option>
					</select>
				</div>
				<div className={styles.buttons}>
					<Link to={'/'}>Cancel</Link>
					<button onClick={register}>Register</button>
				</div>
			</form>
		</>
	);
}

export default RegisterMember;
