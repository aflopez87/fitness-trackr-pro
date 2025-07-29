import useQuery from "../api/useQuery";
import { NavLink } from "react-router";



/** Shows a list of activities. */
export default function ActivityList() {
  const {
    data: activities,
    loading,
    error,
  } = useQuery("/activities", "activities");
  
  if (loading || !activities) return <p>Loading...</p>;
  if (error) return <p>Sorry! {error}</p>;


  return (
    <ul>
      {activities.map((activity) => (
        <li>
          <NavLink to={`activity-details/${activity.id}`} key={activity.id} activity={activity}>{activity.name}</NavLink>
        </li>
      ))}
    </ul>
  );
}

/** Shows a single activity. Logged-in users will also see a delete button. */

