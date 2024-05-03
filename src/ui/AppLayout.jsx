import { Outlet } from 'react-router';
import styles from '../styles/AppLayout.module.css';

function AppLayout() {
	return (
		<div className={styles.layout}>
			Hello
			<Outlet />
		</div>
	);
}

export default AppLayout;
