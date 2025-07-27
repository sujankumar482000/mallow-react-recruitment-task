import React from "react";

const users = [
    {
    id: 1,
    name: "John Doe",
    email: "demo@mallow-tech.com",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    id: 2,
    name: "John Doe",
    email: "demo@mallow-tech.com",
    avatar: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    id: 3,
    name: "John Doe",
    email: "demo@mallow-tech.com",
    avatar: "https://randomuser.me/api/portraits/women/3.jpg",
  },
  {
    id: 4,
    name: "John Doe",
    email: "demo@mallow-tech.com",
    avatar: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    id: 5,
    name: "John Doe",
    email: "demo@mallow-tech.com",
    avatar: "https://randomuser.me/api/portraits/women/5.jpg",
  },
  {
    id: 6,
    name: "John Doe",
    email: "demo@mallow-tech.com",
    avatar: "https://randomuser.me/api/portraits/men/6.jpg",
  },
];

const UserCardGrid = () => {
  return (
    <div style={styles.grid}>
      {users.map((user) => (
        <div key={user.id} style={styles.card} className="user-card">
          <div style={styles.imgWrapper}>
            <img src={user.avatar} alt={user.name} style={styles.avatar} />
          </div>
          <h3>{user.name}</h3>
          <p style={styles.email}>{user.email}</p>
          <div className="hover-actions" style={styles.actions}>
            <button style={{ ...styles.actionBtn, backgroundColor: "#6c63ff" }}>
            </button>
            <button style={{ ...styles.actionBtn, backgroundColor: "#ff5252" }}>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

const styles = {
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "20px",
    padding: "20px",
  },
  card: {
    position: "relative",
    backgroundColor: "#fff",
    borderRadius: "10px",
    padding: "20px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
    textAlign: "center",
    transition: "all 0.3s ease",
    overflow: "hidden",
  },
  imgWrapper: {
    marginBottom: "10px",
  },
  avatar: {
    width: "80px",
    height: "80px",
    borderRadius: "50%",
    objectFit: "cover",
  },
  email: {
    color: "#777",
    fontSize: "14px",
  },
  actions: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    display: "none",
    gap: "15px",
  },
  actionBtn: {
    border: "none",
    borderRadius: "50%",
    color: "#fff",
    padding: "10px",
    fontSize: "16px",
    cursor: "pointer",
  },
};

// Extra styles with hover
const styleSheet = document.createElement("style");
styleSheet.innerText = `
  .user-card:hover {
    background-color: #eee;
  }
  .user-card:hover .hover-actions {
    display: flex !important;
  }
`;
document.head.appendChild(styleSheet);

export default UserCardGrid;