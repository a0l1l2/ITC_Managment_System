import toast, { Toaster } from 'react-hot-toast';
import styles from './RegisterMember.module.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { uploadMember } from '../model/uploadMember';
import { useMembers } from '../controller/MembersProvider';
import { getMembers } from '../model/getMembers';
import { VscEye } from 'react-icons/vsc';
import { VscEyeClosed } from 'react-icons/vsc';

function RegisterMember() {
	const { dispatch } = useMembers();

	const [fullName, setFullName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [position, setPosition] = useState('');
	const [showPass, setShowPass] = useState(false);
	const [showConPass, setShowConPass] = useState(false);

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

					<div
						className={styles.icon}
						onClick={() => setShowPass(cur => !cur)}
					>
						{showPass ? <VscEye /> : <VscEyeClosed />}
					</div>

					<p className={styles.p}>Password</p>
					<input
						type={showPass ? 'text' : 'password'}
						className={styles.input}
						value={password}
						onChange={e => {
							setPassword(e.target.value);
						}}
					/>

					<div
						className={styles.icon}
						onClick={() => setShowConPass(cur => !cur)}
					>
						{showConPass ? <VscEye /> : <VscEyeClosed />}
					</div>

					<p className={styles.p}>Confirm password</p>
					<input
						type={showConPass ? 'text' : 'password'}
						className={styles.input}
						value={confirmPassword}
						onChange={e => {
							setConfirmPassword(e.target.value);
						}}
					/>

					<p className={styles.p}>Position</p>
					<select
						className={styles.select}
						value={position}
						onChange={e => setPosition(e.target.value)}
					>
						<option>Select position</option>
						<option value="writer">Writer</option>
						<option value="graphic-designer">
							Graphic designer
						</option>
					</select>
				</div>
				<div className={styles.buttons}>
					<button onClick={register}>Register</button>
				</div>
			</form>
		</>
	);
}

export default RegisterMember;
