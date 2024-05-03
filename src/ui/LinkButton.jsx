import { Link } from 'react-router-dom';
import styles from '../styles/LinkButton.module.css';

function LinkButton({ to, children }) {
	return (
		<Link to={to} className={styles.button}>
			{children}
		</Link>
	);
}

export default LinkButton;
