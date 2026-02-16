export default function UsersTable({ users }) {
  return (
    <div>
      <h1></h1>
      <table
        style={{
          borderCollapse: "collapse",
          width: "100%",
          fontFamily: "Arial, sans-serif",
          marginTop: "20px",
        }}
      >
        <thead>
          <tr style={{ backgroundColor: "#2c3e50", color: "white" }}>
            <th style={{ padding: "10px", textAlign: "left" }}>ID</th>
            <th style={{ padding: "10px", textAlign: "left" }}>Name</th>
            <th style={{ padding: "10px", textAlign: "left" }}>Email</th>
            <th style={{ padding: "10px", textAlign: "left" }}>Role</th>
          </tr>
        </thead>

        <tbody>
          {users.map((u) => (
            <tr key={u.id} style={{ borderBottom: "1px solid #ccc" }}>
              <td style={{ padding: "10px" }}>{u.id}</td>
              <td style={{ padding: "10px" }}>{u.name}</td>
              <td style={{ padding: "10px" }}>{u.email}</td>
              <td style={{ padding: "10px" }}>{u.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
