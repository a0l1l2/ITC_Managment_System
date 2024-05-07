import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Tasks from './view/Tasks';
import Layout from './view/Layout';
import ActivitySchedule from './view/ActivitySchedule';
import AssignTask from './view/AssignTask';

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
		],
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
