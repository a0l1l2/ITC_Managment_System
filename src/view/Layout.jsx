import { Link, NavLink, Outlet } from 'react-router-dom';
import styles from './Layout.module.css';
import { LuUserCircle2 } from 'react-icons/lu';

function Layout() {
	return (
		<div className={styles.layout}>
			<div className={styles.sidebar}>
				<img src="./public/images/ITC_logo.png" alt="ITC logo" />
				<div className={styles.links}>
					<NavLink to="/">Tasks</NavLink>

					<NavLink to="activityschedule">Activity Schedule</NavLink>

					<NavLink to="announcments">Announcments</NavLink>

					<NavLink to="register">Register new member</NavLink>
				</div>
			</div>

			<div className={styles.header}>
				<div className={styles.user}>
					<div className={styles.profile}>
						<LuUserCircle2 />
						<div className={styles.userinfo}>
							<p>username</p>
							<p>email</p>
						</div>
					</div>

					<div className={styles.userstatus}>
						<p>
							Logged in as: <span>Manager</span>
						</p>
						<p>
							Role: <span>Writer</span>
						</p>
						<p>
							Team: <span>Writing Team</span>
						</p>
						<p>
							Branch: <span>1</span>
						</p>
					</div>
				</div>
			</div>

			<div className={styles.outlet}>
				<Outlet />
			</div>
		</div>
	);
}

export default Layout;
