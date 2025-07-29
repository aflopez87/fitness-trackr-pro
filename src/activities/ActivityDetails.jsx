import { useParams, useNavigate } from "react-router";
import useQuery from "../api/useQuery";
import { useAuth } from "../auth/AuthContext";
import useMutation from "../api/useMutation";
import { useEffect } from "react";

export default function ActivityDetails() {
  const { id } = useParams();
  const { 
    data, 
    loading: queryLoading, 
    error: queryError 
} = useQuery(
    `/activities/${id}`,
    `activity-${id}`
  );
  const { token } = useAuth();
  const navigate = useNavigate();
  const {
    mutate: deleteActivity,
    loading: mutationLoading,
    error: mutationError,
    data: mutationData
  } = useMutation("DELETE", `/activities/${id}`, ["activities"]);

    useEffect(()=>{
    if (!!mutationData && !mutationError){
      navigate("/")
    }
  },[mutationData, mutationError]);

  if (queryLoading) return <p>Loading...</p>;
  if (queryError) return <p>Error: {queryError}</p>;
  if (!data) return <p>No Activity found.</p>;

  const { name, description, creatorName } = data;

  return (
    <main>
      <h2>{name}</h2>
      <p>{description}</p>
      <p>Creator: {creatorName}</p>
      {token && (
        <button onClick={() => deleteActivity()}>
          {mutationLoading ? "Deleting..." : mutationError ? mutationError : "Delete"}
        </button>
      )}
    </main>
  );
}
