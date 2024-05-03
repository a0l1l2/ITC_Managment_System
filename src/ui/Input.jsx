import styles from '../styles/Input.module.css';

function Input({ type, id }) {
	return <input type={type} id={id} className={styles.input} />;
}

export default Input;
