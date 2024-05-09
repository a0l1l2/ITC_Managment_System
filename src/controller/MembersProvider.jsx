import { createContext, useContext, useEffect, useReducer } from 'react';
import { getMembers } from '../model/getMembers';



const initialState = {
	members: [],
};

function reducer(state, { type, payload }) {
	switch (type) {
		case 'members/registerMember':
			return {
				...state,
				members: payload,
			};
		
	}
}

const MembersContext = createContext();

function MembersProvider({ children }) {
	const [{ members }, dispatch] = useReducer(reducer, initialState);

	useEffect(()=>{
		async function fetchTasks(){
			const {members:fetchedMembers,error} = await getMembers();

			dispatch({type:'members/registerMember', payload:fetchedMembers})
		}

		fetchTasks();
		
	},[])



	return (
		<MembersContext.Provider value={{ members, dispatch }}>
			{children}
		</MembersContext.Provider>
	);
}

function useMembers() {
	const context = useContext(MembersContext);
	if (context === undefined)
		throw new Error('MembersContext was used outside of the MembersProvider');
	return context;
}

export { MembersProvider, useMembers };
