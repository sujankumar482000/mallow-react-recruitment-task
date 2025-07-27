import React, { useState } from "react";

const UserForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    avatar: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    let newErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email is invalid";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      console.log("Form submitted:", formData);
      alert("User submitted!");
      setFormData({ firstName: "", lastName: "", email: "", avatar: "" });
      setErrors({});
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div style={styles.container}>
      <h2>Create / Edit User</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <label>* First Name</label>
        <input
          name="firstName"
          placeholder="Please enter first name"
          value={formData.firstName}
          onChange={handleChange}
          style={styles.input}
        />
        {errors.firstName && <span style={styles.error}>{errors.firstName}</span>}

        <label>* Last Name</label>
        <input
          name="lastName"
          placeholder="Please enter last name"
          value={formData.lastName}
          onChange={handleChange}
          style={styles.input}
        />
        {errors.lastName && <span style={styles.error}>{errors.lastName}</span>}

        <label>* Email</label>
        <input
          name="email"
          placeholder="Please enter email"
          value={formData.email}
          onChange={handleChange}
          style={styles.input}
        />
        {errors.email && <span style={styles.error}>{errors.email}</span>}

        <label>* Profile Image Link</label>
        <input
          name="avatar"
          placeholder="Optional: paste image URL"
          value={formData.avatar}
          onChange={handleChange}
          style={styles.input}
        />
        <button type="Cancel" style={styles.button}>Cancel</button>
        <button type="submit" style={styles.button}>Submit</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    padding: 20,
    maxWidth: 400,
    margin: "auto",
    fontFamily: "Arial",
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
  button: {
    padding: 10,
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: 4,
    fontSize: 16,
    cursor: "pointer",
    marginTop: 10,
  },
  error: {
    color: "red",
    fontSize: 12,
  },
};

export default UserForm;