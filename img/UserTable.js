import React, { useState } from "react";

const initialUsers = [
  {
    id: 1,
    avatar: "https://i.pravatar.cc/40?img=1",
    email: "george.bluth@reqres.in",
    first_name: "George",
    last_name: "Bluth",
  },
  {
    id: 2,
    avatar: "https://i.pravatar.cc/40?img=2",
    email: "janet.weaver@reqres.in",
    first_name: "Janet",
    last_name: "Weaver",
  },
  {
    id: 3,
    avatar: "https://i.pravatar.cc/40?img=3",
    email: "emma.wong@reqres.in",
    first_name: "Emma",
    last_name: "Wong",
  },
  {
    id: 4,
    avatar: "https://i.pravatar.cc/40?img=4",
    email: "eve.holt@reqres.in",
    first_name: "Eve",
    last_name: "Holt",
  },
  {
    id: 5,
    avatar: "https://i.pravatar.cc/40?img=5",
    email: "charles.morris@reqres.in",
    first_name: "Charles",
    last_name: "Morris",
  },
];

const UserTable = () => {
  const [users, setUsers] = useState(initialUsers);
  const [search, setSearch] = useState("");

  const handleDelete = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };

  const handleEdit = (user) => {
    // alert(Edit user {${user first_name} ${user last_name}});
  };

  const filteredUsers = users.filter(user =>
    user.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={styles.wrapper}>
      <div style={styles.header}>
        <h2>Users</h2>
        <div style={styles.searchWrapper}>
          <input
            type="text"
            placeholder="Search email..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={styles.searchInput}
          />
          <button style={styles.createBtn}>Create New</button>
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
              <td>{user.email}</td>
              <td>{user.first_name}</td>
              <td>{user.last_name}</td>
              <td>
                <button style={styles.editBtn} onClick={() => handleEdit(user)}>Edit</button>
                <button style={styles.deleteBtn} onClick={() => handleDelete(user.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const styles = {
  wrapper: {
    padding: 20,
    fontFamily: "Arial",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  searchWrapper: {
    display: "flex",
    gap: 10,
  },
  searchInput: {
    padding: 8,
    fontSize: 14,
  },
  createBtn: {
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    padding: "8px 12px",
    borderRadius: 4,
    cursor: "pointer",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
  },
  avatar: {
    borderRadius: "50%",
    width: 40,
    height: 40,
  },
  editBtn: {
    backgroundColor: "#17a2b8",
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
};

export default UserTable;