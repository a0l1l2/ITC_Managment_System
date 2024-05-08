import { Link, NavLink, Outlet, useLocation} from 'react-router-dom';
import styles from './Layout.module.css';
import { LuUserCircle2 } from 'react-icons/lu';
import { TasksProvider } from '../controller/TasksProvider';
import { FaTasks } from "react-icons/fa";
import { AiOutlineSchedule } from "react-icons/ai";
import { GrAnnounce } from "react-icons/gr";
import { MdOutlineManageAccounts } from "react-icons/md";

function Layout() {

	const location = useLocation();
	

	return (
		<TasksProvider>
			<div className={styles.layout}>
				<div className={styles.sidebar}>
					<img src="./public/images/ITC_logo.png" alt="ITC logo" />
					<p className={styles.title}>ITC Managment</p>
					<div className={styles.links}>
					
						<NavLink to="/" className={location.pathname.includes('assigntask') &&'active'}>
						<FaTasks /><span>
							Tasks
							</span>
							</NavLink>

						<NavLink to="activityschedule">
						<AiOutlineSchedule />
							<span>
							Activity Schedule
							</span>
						</NavLink>

						<NavLink to="announcements">
						<GrAnnounce />
							<span>
							Announcements
							</span>
							</NavLink>

						<NavLink to="registermember">
						<MdOutlineManageAccounts />
							<span>
							Register member
							</span>
							</NavLink>
					</div>
				</div>

				<div className={styles.header}>
					<div className={styles.user}>
						<div className={styles.profile}>
							<p>
								Paiwast Wahid
								</p>
							<div className={styles.userinfo}>
								
								<p>paiwastmain@gmail.com</p>
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
		</TasksProvider>
	);
}

export default Layout;
