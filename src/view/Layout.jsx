import { NavLink, Outlet, useLocation } from 'react-router-dom';
import styles from './Layout.module.css';
import { TasksProvider } from '../controller/TasksProvider';
import { FaTasks } from 'react-icons/fa';
import { AiOutlineSchedule } from 'react-icons/ai';
import { GrAnnounce } from 'react-icons/gr';
import { MdOutlineManageAccounts } from 'react-icons/md';
import { MembersProvider } from '../controller/MembersProvider';
import { useEffect, useState } from 'react';
import { getCurrentUser, getCurrentUserInfo } from '../model/login';
import { useUser } from '../controller/UserProvider';

function Layout() {
	const location = useLocation();
	const { user } = useUser();

	const [userInfo, setUserInfo] = useState();
	useEffect(() => {
		async function getUser() {
			const { info, branch } = await getCurrentUserInfo(
				user.email,
				user.password
			);
			setUserInfo({ user: info[0], branch: branch[0] });
		}
		getUser();
	}, [user]);

	return (
		<MembersProvider>
			<TasksProvider>
				<div className={styles.layout}>
					<div className={styles.sidebar}>
						<img src="/public/images/ITC_Logo.PNG" alt="ITC logo" />
						<p className={styles.title}>ITC Managment</p>
						<div className={styles.links}>
							<NavLink
								to="/tasks"
								className={
									location.pathname.includes('assigntask') &&
									'active'
								}
							>
								<FaTasks />
								<span>Tasks</span>
							</NavLink>

							<NavLink to="activityschedule">
								<AiOutlineSchedule />
								<span>Activity Schedule</span>
							</NavLink>

							<NavLink to="announcements">
								<GrAnnounce />
								<span>Announcements</span>
							</NavLink>

							<NavLink to="registermember">
								<MdOutlineManageAccounts />
								<span>Register member</span>
							</NavLink>
						</div>
					</div>

					<div className={styles.header}>
						<div className={styles.user}>
							<div className={styles.profile}>
								<p>{userInfo?.user.fullName}</p>
								<div className={styles.userinfo}>
									<p>{userInfo?.user.email}</p>
								</div>
							</div>

							<div className={styles.userstatus}>
								<p>
									Logged in as: <span>Manager</span>
								</p>
								<p>
									Branch: <span>{userInfo?.branch.name}</span>
								</p>
							</div>
						</div>
					</div>

					<div className={styles.outlet}>
						<Outlet />
					</div>
				</div>
			</TasksProvider>
		</MembersProvider>
	);
}

export default Layout;
