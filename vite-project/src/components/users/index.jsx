import { useEffect, useState } from "react";
// This component fetches a list of users from an API and displays it
// It uses the useEffect hook to fetch data when the component mounts

export default function Users() {
  const [usersList, setUsersList] = useState([]);
  const [loading, setLoading] = useState(false);

  async function fetchAllUsers() {
    try {
      setLoading(true);
      const apiResponse = await fetch("https://dummyjson.com/users");
      const result = await apiResponse.json();
      if (result?.users) {
        setUsersList(result?.users);
        setLoading(false);
      } else {
        setUsersList([]);
      }
      console.log(result);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  function handleFetchAllUsers() {
    fetchAllUsers();
  }

  useEffect(() => {
    fetchAllUsers();
  }, []);

  console.log(usersList);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h1>All Users List</h1>
      <button onClick={handleFetchAllUsers}>Refresh</button>
      <p>This is the users page.</p>
      <ul>
        {usersList && usersList.length > 0
          ? usersList.map((userItem) => (
              <li key={userItem?.id}>
                <p>
                  {userItem?.firstName} {userItem?.lastName}
                </p>
              </li>
            ))
          : "Loading..."}
        {usersList && usersList.length === 0 && <li>No users found</li>}
      </ul>
    </div>
  );
}
