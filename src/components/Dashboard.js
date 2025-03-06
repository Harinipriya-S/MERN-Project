import React, { useState } from "react";
import AddEntryForm from "./AddEntryForm";  

const Dashboard = () => {
  const [entries, setEntries] = useState([]);

  const handleAddEntry = (newEntry) => {
    setEntries([...entries, newEntry]);
  };

  return (
    <div className="dashboard"><br/><br/>
      <AddEntryForm onAdd={handleAddEntry} />
    </div>
  );
};

export default Dashboard;
