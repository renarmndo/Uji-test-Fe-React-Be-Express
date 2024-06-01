import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const endpoint = "http://localhost:3001/api/v1/users";

  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      const response = await fetch(endpoint);
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <>
      <h1>API Get Data Express Back-End</h1>
      {users && users.data && users.data.length > 0 ? (
        <table className="user-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Username</th>
              {/* <th>Email</th> */}
              {/* Tambahkan kolom lain jika diperlukan */}
            </tr>
          </thead>
          <tbody>
            {users.data.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.username}</td>
                {/* <td>{user.email}</td> */}
                {/* Tambahkan data lain jika diperlukan */}
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}

export default App;
