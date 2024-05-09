import toast, { Toaster } from 'react-hot-toast';
import styles from './Login.module.css';
import { useState } from 'react';
import { VscEye } from 'react-icons/vsc';
import { VscEyeClosed } from 'react-icons/vsc';
import { login } from '../model/login';
import { useNavigate } from 'react-router-dom';

function Login() {
	const navigate = useNavigate();

	const [email, setEmail] = useState('user@gmail.com');
	const [password, setPassword] = useState('12341234');
	const [showPass, setShowPass] = useState(false);

	async function handleSubmit(e) {
		e.preventDefault();
		if (!email || !password) {
			toast.error('Please provide your email and password');
			return;
		}
		const { data, error } = await login(email, password);
		console.log(data);
		if (error) toast.error(error.message);
		setEmail('');
		setPassword('');
		navigate('/');
	}

	return (
		<div className={styles.container}>
			<Toaster />

			<div className={styles.login}>
				<div className={styles.sidebar}>
					<img src="./public/images/ITC_logo.png" />
					<h1>ITC Managment system</h1>
				</div>

				<form className={styles.gridAssign} onSubmit={handleSubmit}>
					<h1>Log in</h1>

					<div>
						<p className={styles.p}>Email</p>
						<input
							type="text"
							className={styles.input}
							value={email}
							onChange={e => {
								setEmail(e.target.value);
							}}
						/>
					</div>

					<div>
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
							onClick={() => setShowPass(cur => !cur)}
						>
							{showPass ? <VscEye /> : <VscEyeClosed />}
						</div>
					</div>

					<button>Log in</button>
				</form>
			</div>
		</div>
	);
}

export default Login;
