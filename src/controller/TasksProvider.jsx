import { createContext, useContext, useEffect, useReducer } from 'react';
import { getTasks } from '../model/getTasks';
import Tasks from '../view/Tasks';

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

function TasksProvider({ children }) {
	const [{ tasks }, dispatch] = useReducer(reducer, initialState);

	useEffect(()=>{
		async function fetchTasks(){
			const {tasks:fetchedTasks,error} = await getTasks();

			dispatch({type:'tasks/assignTask', payload:fetchedTasks})
		}

		fetchTasks();
		
	},[])



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
