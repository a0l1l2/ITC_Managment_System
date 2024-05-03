import styles from '../styles/Login.module.css';
import Form from '../ui/Form';
import Button from '../ui/Button';
import { VscEyeClosed } from 'react-icons/vsc';
import { VscEye } from 'react-icons/vsc';

function Login() {
	return (
		<Form>
			<div>
				<label htmlFor="email">Email</label>
				<input type="text" id="email" />
			</div>

			<div>
				<label htmlFor="password">Password</label>
				<input type="password" id="password" />
				<VscEye />
				<VscEyeClosed />
			</div>
			<Button>Log in</Button>
		</Form>
	);
}

export default Login;
