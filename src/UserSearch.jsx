import React, { useState } from "react";

export default function UserSearch({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value);
  };

  return (
    <div style={{ marginBottom: "20px" }}>
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search users..."
        style={{ padding: "5px", width: "200px" }}
      />
    </div>
  );
}
