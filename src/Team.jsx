import { useState } from "react";

export default function Team() {
  const palyerStyle = {
    border: "2px solid steelBlue",
    margin: "20px",
    padding: "20px",
    borderRadius: "10px",
  };

  const [team, setTeam] = useState(11);

  // Add
  const handleAdd = () => {
    const newPlayer = team + 1;
    setTeam(newPlayer);
  };

  // Reduce
  const handleRemove = () => {
    const newPlayer = team - 1;
    setTeam(newPlayer);
  };
  return (
    <div style={palyerStyle}>
      <h2>Players:{team}</h2>
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleRemove}>Reduce</button>
    </div>
  );
}
