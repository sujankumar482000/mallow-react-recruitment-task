import React, { useState } from "react";
import EditUserForm from "./EditUserForm";

const initialUsers = [
  {
    id: 1,
    email: "emma.wong@reqres.in",
    first_name: "Emma",
    last_name: "Wong",
    avatar: "https://reqres.in/img/faces/3-image.jpg",
  },
];

const UserDashboard = () => {
  const [users, setUsers] = useState(initialUsers);
  const [search, setSearch] = useState("");
  const [editingUser, setEditingUser] = useState(null);

  const handleDelete = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };

  const handleSave = (updatedUser) => {
    setUsers(users.map(u => u.id === updatedUser.id ? updatedUser : u));
  };

  const filteredUsers = users.filter(user =>
    user.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={styles.container}>
      <h2>Users</h2>

      <div style={styles.toolbar}>
        <div>
          <button style={styles.tabBtn}>📋 Table</button>
          <button style={styles.tabBtn}>📇 Card</button>
        </div>
        <div style={styles.rightToolbar}>
          <input
            type="text"
            placeholder="Search by email"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={styles.search}
          />
          <button style={styles.createBtn}>Create User</button>
        </div>
      </div>

      <table style={styles.table}>
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Email</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map(user => (
            <tr key={user.id}>
              <td><img src={user.avatar} alt="avatar" style={styles.avatar} /></td>
              {/* <td><a href={mailto:${user.email}}>{user.email}</a></td> */}
              <td>{user.first_name}</td>
              <td>{user.last_name}</td>
              <td>
                <button
                  style={styles.editBtn}
                  onClick={() => setEditingUser(user)}
                >Edit</button>
                <button
                  style={styles.deleteBtn}
                  onClick={() => handleDelete(user.id)}
                >Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div style={styles.pagination}>
        <button>{"<"}</button>
        <button style={styles.activePage}>1</button>
        <button>{">"}</button>
      </div>

      {editingUser && (
        <EditUserForm
          user={editingUser}
          onClose={() => setEditingUser(null)}
          onSave={handleSave}
        />
      )}
    </div>
  );
};

const styles = {
  container: {
    padding: 20,
    fontFamily: "Arial",
    backgroundColor: "#f4f6fb",
    minHeight: "100vh",
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  tabBtn: {
    marginRight: 10,
    padding: "6px 12px",
    border: "1px solid #ccc",
    borderRadius: 4,
    cursor: "pointer",
    backgroundColor: "#fff",
  },
  rightToolbar: {
    display: "flex",
    gap: 10,
  },
  search: {
    padding: 8,
    borderRadius: 4,
    border: "1px solid #ccc",
    minWidth: 200,
  },
  createBtn: {
    backgroundColor: "#007bff",
    color: "#fff",
    padding: "8px 14px",
    border: "none",
    borderRadius: 4,
    cursor: "pointer",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    backgroundColor: "#fff",
    borderRadius: 6,
    overflow: "hidden",
  },
  avatar: {
    width: 40,
    borderRadius: "50%",
  },
  editBtn: {
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    padding: "5px 10px",
    borderRadius: 4,
    marginRight: 5,
    cursor: "pointer",
  },
  deleteBtn: {
    backgroundColor: "#dc3545",
    color: "#fff",
    border: "none",
    padding: "5px 10px",
    borderRadius: 4,
    cursor: "pointer",
  },
  pagination: {
    marginTop: 15,
    display: "flex",
    justifyContent: "center",
    gap: 5,
  },
  activePage: {
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    padding: "5px 10px",
    borderRadius: 4,
  },
};

export default UserDashboard;