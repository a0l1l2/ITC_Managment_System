import { useParams } from 'react-router-dom';
import styles from './ActivitySchedule.module.css';
import { useEffect, useState } from 'react';

function EditActivity() {
	const { id } = useParams();
	const [activity, setActivity] = useState();

	useEffect(() => {
		async function fetchActvity() {
			const data = getActivity(id);
			setActivity(data);
		}
	}, [id]);

	return <div className={styles.container}>Edit Activity</div>;
}

export default EditActivity;
