import React, { useState, useEffect } from "react";

const EditUserForm = ({ user, onClose, onSave }) => {
  const [formData, setFormData] = useState(user);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    setFormData(user);
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    let err = {};
    if (!formData.first_name) err.first_name = "First Name is required";
    if (!formData.last_name) err.last_name = "Last Name is required";
    if (!formData.email) err.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) err.email = "Invalid email";
    return err;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      onSave(formData);
      onClose();
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div style={styles.modalOverlay}>
      <div style={styles.modal}>
        <button onClick={onClose} style={styles.closeBtn}>×</button>
        <h2>Edit User</h2>
        <form onSubmit={handleSubmit} style={styles.form}>
          <label>* First Name</label>
          <input
            name="first_name"
            value={formData.first_name || ""}
            onChange={handleChange}
            placeholder="Enter first name"
            style={styles.input}
          />
          {errors.first_name && <span style={styles.error}>{errors.first_name}</span>}

          <label>* Last Name</label>
          <input
            name="last_name"
            value={formData.last_name || ""}
            onChange={handleChange}
            placeholder="Enter last name"
            style={styles.input}
          />
          {errors.last_name && <span style={styles.error}>{errors.last_name}</span>}

          <label>* Email</label>
          <input
            name="email"
            value={formData.email || ""}
            onChange={handleChange}
            placeholder="Enter email"
            style={styles.input}
          />
          {errors.email && <span style={styles.error}>{errors.email}</span>}

          <label>Profile Image Link</label>
          <input
            name="avatar"
            value={formData.avatar || ""}
            onChange={handleChange}
            placeholder="Enter image URL"
            style={styles.input}
          />

          <button type="submit" style={styles.saveBtn}>Save</button>
        </form>
      </div>
    </div>
  );
};

const styles = {
  modalOverlay: {
    position: "fixed",
    top: 0, left: 0,
    width: "100%", height: "100%",
    backgroundColor: "rgba(0,0,0,0.5)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  modal: {
    background: "#fff",
    padding: 20,
    borderRadius: 8,
    width: 400,
    position: "relative",
  },
  closeBtn: {
    position: "absolute",
    top: 10,
    right: 15,
    fontSize: 20,
    border: "none",
    background: "transparent",
    cursor: "pointer",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
  },
  input: {
    padding: 8,
    fontSize: 14,
    border: "1px solid #ccc",
    borderRadius: 4,
  },
  saveBtn: {
    marginTop: 10,
    padding: 10,
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: 4,
    fontSize: 16,
    cursor: "pointer",
  },
  error: {
    color: "red",
    fontSize: 12,
  },
};

export default EditUserForm;