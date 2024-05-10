import { createContext, useContext, useEffect, useState } from 'react';

const UserContext = createContext();

// eslint-disable-next-line react/prop-types
function UserProvider({ children }) {
	const [user, setUser] = useState(
		JSON.parse(localStorage.getItem('user')) || {}
	);

	useEffect(() => {
		localStorage.setItem('user', JSON.stringify(user));
	}, [user]);

	return (
		<UserContext.Provider value={{ user, setUser }}>
			{children}
		</UserContext.Provider>
	);
}

function useUser() {
	const context = useContext(UserContext);
	if (context === undefined)
		throw new Error('UserContext was used outside of the UserProvider');
	return context;
}

// eslint-disable-next-line react-refresh/only-export-components
export { UserProvider, useUser };
