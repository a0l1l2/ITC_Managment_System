import styles from '../styles/Label.module.css';

function Label({ htmlFor, children }) {
	return (
		<label htmlFor={htmlFor} className={styles.label}>
			{children}
		</label>
	);
}

export default Label;
