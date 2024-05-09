import { createContext, useContext, useEffect, useReducer } from 'react';
import { getTasks } from '../model/getTasks';

const initialState = {
	tasks: [],
};

function reducer(state, { type, payload }) {
	switch (type) {
		case 'tasks/assignTask':
			return {
				...state,
				tasks: payload,
			};
	}
}

const TasksContext = createContext();

// eslint-disable-next-line react/prop-types
function TasksProvider({ children }) {
	const [{ tasks }, dispatch] = useReducer(reducer, initialState);

	useEffect(() => {
		async function fetchTasks() {
			const { tasks: fetchedTasks } = await getTasks();

			dispatch({ type: 'tasks/assignTask', payload: fetchedTasks });
		}

		fetchTasks();
	}, []);

	return (
		<TasksContext.Provider value={{ tasks, dispatch }}>
			{children}
		</TasksContext.Provider>
	);
}

function useTasks() {
	const context = useContext(TasksContext);
	if (context === undefined)
		throw new Error('TasksContext was used outside of the TasksProvider');
	return context;
}

// eslint-disable-next-line react-refresh/only-export-components
export { TasksProvider, useTasks };
