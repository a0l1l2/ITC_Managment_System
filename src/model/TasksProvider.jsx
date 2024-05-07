import { createContext, useContext, useReducer } from 'react';

const initialState = {
	tasks: [
		{
			id: 1,
			title: 'Sleep well',
			memeber: 'Paiwast',
			deadline: 'Now',
			description: 'Sleep or your head will explode',
			priority: 'High',
		},
	],
};

function reducer(state, { type, payload }) {
	switch (type) {
		case 'tasks/assignTask':
			return {
				...state,
				tasks: [...state.tasks, payload],
			};
	}
}

const TasksContext = createContext();

function TasksProvider({ children }) {
	const [{ tasks }, dispatch] = useReducer(reducer, initialState);

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

export { TasksProvider, useTasks };
