import styles from '../styles/Logo.module.css';

function Logo() {
	return (
		<img
			src="./public/images/ITC_Logo.PNG"
			alt="Iraqi Tech Club logo"
			className={styles.logo}
		/>
	);
}

export default Logo;
