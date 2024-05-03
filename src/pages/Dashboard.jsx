import LinkButton from '../ui/LinkButton';

function Dashboard() {
	return (
		<div>
			<LinkButton to={'/registermember'}>Register Member</LinkButton>
			<LinkButton to={'/addtask'}>Add Task</LinkButton>
			<LinkButton to={'/schedule'}>Schedule</LinkButton>
		</div>
	);
}

export default Dashboard;
