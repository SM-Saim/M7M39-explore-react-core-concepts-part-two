import { useEffect, useState } from "react";

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div>
      <h2>Users:{users.length}</h2>
    </div>
  );
}

// 1. Declare a state to load the data
// 2. useEffect with dependencies and call back array
// use fetch to load data
