import { useEffect, useState } from "react";
import "./Friends.css";
import Friend from "./Friend";
export default function Friends() {
  const [friend, setFriend] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setFriend(data));
  }, []);
  return (
    <div className="Box">
      <h2>Friends:{friend.length} </h2>
      {friend.map((frentas) => (
        <Friend friend={frentas}></Friend>
      ))}
    </div>
  );
}

// 1.Declare state to hold data
// 2.Declare useEffect with dependency Array.
// 3.declare fech for loading data.
// 4.Set loaded data to the state.
// 5. Display Data on the component.
