import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

const router = createBrowserRouter([
	{
		element: <Login />,
		path: 'login',
	},
	{
		element: <Dashboard />,
		path: '/',
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
