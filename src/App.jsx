import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import AppLayout from './ui/AppLayout';
import RegisterMember from './pages/RegisterMember';
import AddTask from './pages/AddTask';
import Schedule from './pages/Schedule';

const router = createBrowserRouter([
	{
		element: <AppLayout />,
		children: [
			{
				element: <Dashboard />,
				path: '/',
			},
			{
				element: <RegisterMember />,
				path: '/registermember',
			},
			{
				element: <AddTask />,
				path: '/addtask',
			},
			{
				element: <Schedule />,
				path: '/schedule',
			},
		],
	},
	{
		element: <Login />,
		path: 'login',
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
