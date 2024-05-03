import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import AppLayout from './ui/AppLayout';

const router = createBrowserRouter([
	{
		element: <AppLayout />,
		children: [
			{
				element: <Login />,
				path: 'login',
			},
			{
				element: <Dashboard />,
				path: '/',
			},
		],
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
