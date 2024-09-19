import React, { useState, useMemo } from 'react';

// Sample user data
const users = [
  { id: 1, name: 'Alice', isOnline: true },
  { id: 2, name: 'Bob', isOnline: false },
  { id: 3, name: 'Charlie', isOnline: true },
  { id: 4, name: 'David', isOnline: false },
  { id: 5, name: 'Eve', isOnline: true },
  { id: 6, name: 'Frank', isOnline: false },
  { id: 7, name: 'Grace', isOnline: true },
  { id: 8, name: 'Henry', isOnline: false },
  { id: 9, name: 'Isabella', isOnline: true },
  { id: 10, name: 'Jack', isOnline: false },
  { id: 11, name: 'Kate', isOnline: true },
  { id: 12, name: 'Liam', isOnline: false },
  { id: 13, name: 'Maria', isOnline: true },
  { id: 14, name: 'Noah', isOnline: false },
  { id: 15, name: 'Olivia', isOnline: true },
  { id: 16, name: 'Paul', isOnline: false },
  { id: 17, name: 'Quinn', isOnline: true },
  { id: 18, name: 'Riley', isOnline: false },
  { id: 19, name: 'Sarah', isOnline: true },
  { id: 20, name: 'Thomas', isOnline: false }
];

const App = () => {
  const [showOnline, setShowOnline] = useState(false);
  const [search, setSearch] = useState("");

  // Step 4: Filter users based on online status (useMemo)
  const filteredUsers = useMemo(() => {
    return users.filter((user) => (showOnline ? user.isOnline : true));
  }, [showOnline]);

  // Step 5: Filter users based on search input (useMemo)
  const displayedUsers = useMemo(() => {
    return filteredUsers.filter((user) =>
      user.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, filteredUsers]);



  

  return (
    <div>
      <h1>User Online List</h1>

      {/* Step 6: Add checkbox and search input */}
      <label>
        <input
          type="checkbox"
          checked={showOnline}
          onChange={() => setShowOnline((prev) => !prev)}
        />
        Show only online users
      </label>

      <br />

      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search by name"
      />

      {/* Step 7: Display the filtered user list */}
      <ul>
        {displayedUsers.map((user) => (
          <li key={user.id}>
            {user.name} {user.isOnline ? "(Online)" : "(Offline)"}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
