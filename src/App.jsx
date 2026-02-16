import React, { useState } from "react";
import UsersTable from "./UsersTable";
import UserSearch from "./UserSearch";

const initialUsers = [
  { id: 1, name: "Alice", email: "alice@mail.com", role: "Admin" },
  { id: 2, name: "Bob", email: "bob@mail.com", role: "User" },
  { id: 3, name: "Charlie", email: "charlie@mail.com", role: "Editor" },
];

export default function App() {
  const [users, setUsers] = useState(initialUsers);

  const handleSearch = (query) => {
    setUsers(
      initialUsers.filter((u) =>
        u.name.toLowerCase().includes(query.toLowerCase()),
      ),
    );
  };

  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>
      <h1>Git Practice - Users Table</h1>
      <UserSearch onSearch={handleSearch} />
      <UsersTable users={users} />
    </div>
  );
}
