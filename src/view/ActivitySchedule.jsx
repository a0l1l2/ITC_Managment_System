import toast, { Toaster } from "react-hot-toast";
import styles from "./ActivitySchedule.module.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getActivities } from "../model/getActivities";
import { ClipLoader } from "react-spinners";
import { uploadActivities } from "../model/uploadActivities";

function ActivitySchedule() {
  const navigate = useNavigate();
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    async function fetchActivities() {
      const fetchedActivities = await getActivities();

      setActivities(fetchedActivities);
    }

    fetchActivities();
  }, []);

  return (
    <div>
      <Toaster />

      <h1>Activity Schedule</h1>

      <div className={styles.table}>
        <div className={styles.header}>
          <p>Activity</p>
          <p>Team</p>
          <p>Description</p>
          <p>Date</p>
        </div>

        <div className={styles.body}>
          {activities.length ? (
            activities.map((activity) => (
              <div className={styles.row} key={activity.activity.id}>
                <p>{activity.activity.title}</p>
                <p>{activity.teamInfo.name}</p>
                <p>{activity.activity.description}</p>
                <p>{activity.activity.date}</p>
                <button
                  onClick={() =>
                    navigate(`/editactivity/${activity.activity.id}`)
                  }
                >
                  Change date
                </button>
              </div>
            ))
          ) : (
            <div className={styles.loader}>
              <ClipLoader />
            </div>
          )}
        </div>
      </div>
      <div className={styles.operations}>
        <button
          onClick={() => toast("This feature hasn't been implemented yet")}
        >
          Add activity
        </button>
      </div>
    </div>
  );
}

export default ActivitySchedule;
