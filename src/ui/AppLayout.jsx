import { Outlet } from 'react-router';
import styles from '../styles/AppLayout.module.css';
import SideBar from './SideBar';
import Header from './Header';

function AppLayout() {
	return (
		<div className={styles.layout}>
			<SideBar />
			<Header />
			<Outlet />
		</div>
	);
}

export default AppLayout;
