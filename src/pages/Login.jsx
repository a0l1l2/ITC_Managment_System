import { VscEye } from 'react-icons/vsc';
import { VscEyeClosed } from 'react-icons/vsc';

import styles from '../styles/Login.module.css';

import Form from '../ui/Form';
import Heading from '../ui/Heading';
import Logo from '../ui/Logo';
import Input from '../ui/Input';
import Label from '../ui/Label';
import LinkButton from '../ui/LinkButton';

function Login() {
	return (
		<div className={styles.login}>
			<div className={styles.header}>
				<Logo />
				<Heading>ITC Managment System</Heading>
			</div>

			<Form>
				<Heading>Log into your account</Heading>
				<div>
					<Label htmlFor="email">Email</Label>
					<Input type="text" id="email" />
				</div>

				<div>
					<Label htmlFor="password">Password</Label>
					<Input type="password" id="password" />
					<VscEye />
					<VscEyeClosed />
				</div>
				<LinkButton to={'/'}>Log in</LinkButton>
			</Form>
		</div>
	);
}

export default Login;
