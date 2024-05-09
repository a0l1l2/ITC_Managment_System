import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Tasks from './view/Tasks';
import Layout from './view/Layout';
import ActivitySchedule from './view/ActivitySchedule';
import AssignTask from './view/AssignTask';
import RegisterMember from './view/RegisterMember';
import Announcements from './view/Announcements';
import Login from './view/Login';

const router = createBrowserRouter([
	{
		element: <Layout />,
		children: [
			{
				element: <Tasks />,
				path: '/',
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
				element: <Announcements />,
				path: '/announcements',
			},
			{
				element: <RegisterMember />,
				path: '/registermember',
			},
		],
	},
	{
		element: <Login />,
		path: '/login',
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
