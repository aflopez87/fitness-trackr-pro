import Register from "./auth/Register";
import Login from "./auth/Login";
import ActivitiesPage from "./activities/ActivitiesPage";
import Error404 from "./Error404.jsx";
import { Route, Routes } from "react-router";
import Layout from "./layout/Layout.jsx";
import ActivityDetails from "./activities/ActivityDetails.jsx";


/**
 * Fitness Trackr is a platform where fitness enthusiasts can share their workouts and
 * discover new routines. Anyone can browse the site and make an account, and users with an
 * account will be able to upload and manage their own activities.
 */


export default function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="login" element={<Login />}/>
          <Route path="register" element={<Register />}/>
          <Route element={<ActivitiesPage />} index/>
          <Route path="activity-details/:id" element={<ActivityDetails/>} />
          <Route path="*" element={<Error404 />}/>
        </Route>
      </Routes>
    </>
  )
}
