import React, { useState } from "react";

const LoginForm = () => {
  const [email, setEmail] = useState("eve.holt@reqres.in");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Remember me:", remember);
    // Here you can call an API or handle authentication
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          style={styles.input}
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          style={styles.input}
          required
        />
        <div style={styles.checkboxContainer}>
          <input
            type="checkbox"
            checked={remember}
            onChange={(e) => setRemember(e.target.checked)}
          />
          <label style={styles.label}>Remember me</label>
        </div>
        <button type="submit" style={styles.button}>
          Log in
        </button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f0f2f5",
  },
  form: {
    backgroundColor: "#fff",
    padding: 30,
    borderRadius: 8,
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
    display: "flex",
    flexDirection: "column",
    gap: 15,
    width: 300,
  },
  input: {
    padding: 10,
    fontSize: 16,
    borderRadius: 4,
    border: "1px solid #ccc",
  },
  checkboxContainer: {
    display: "flex",
    alignItems: "center",
    gap: 8,
  },
  label: {
    fontSize: 14,
  },
  button: {
    backgroundColor: "#00aaff",
    color: "#fff",
    padding: 10,
    border: "none",
    borderRadius: 4,
    fontSize: 16,
    cursor: "pointer",
  },
};

export default LoginForm;