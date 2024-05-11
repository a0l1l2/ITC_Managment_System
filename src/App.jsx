import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Tasks from './view/Tasks';
import Layout from './view/Layout';
import ActivitySchedule from './view/ActivitySchedule';
import AssignTask from './view/AssignTask';
import RegisterMember from './view/RegisterMember';
import Announcements from './view/Announcements';
import Login from './view/Login';
import { UserProvider } from './controller/UserProvider';
import EditActivity from './view/EditActivity';
import AnnounceEvent from './view/AnnounceEvent';

const router = createBrowserRouter([
	{
		element: (
			<UserProvider>
				<Layout />
			</UserProvider>
		),
		children: [
			{
				element: <Tasks />,
				path: '/tasks',
			},
			{
				element: <AssignTask />,
				path: '/assigntask',
			},
			{
				element: <ActivitySchedule />,
				path: '/activityschedule',
			},
			{
				path: '/editactivity/:id',
				element: <EditActivity />,
			},
			{
				element: <Announcements />,
				path: '/announcements',
			},
			{
				element: <RegisterMember />,
				path: '/registermember',
			},
			{
				element: <AnnounceEvent />,
				path: '/announceevent',
			},
		],
	},
	{
		element: (
			<UserProvider>
				<Login />
			</UserProvider>
		),
		path: '/',
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
