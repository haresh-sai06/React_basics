import React, { useState } from "react";

export default function LoginRegisterForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const [isRegister, setIsRegister] = useState(true); // toggle between Login & Register
  const [successMsg, setSuccessMsg] = useState("");

  // 🧠 Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // 🧩 Validation logic
  const validateForm = () => {
    const errs = {};

    if (isRegister && !formData.name.trim()) errs.name = "Name is required";
    if (!formData.email) errs.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      errs.email = "Invalid email address";

    if (!formData.password) errs.password = "Password is required";
    else if (formData.password.length < 6)
      errs.password = "At least 6 characters";

    if (isRegister && formData.password !== formData.confirmPassword)
      errs.confirmPassword = "Passwords do not match";

    return errs;
  };

  // 🧾 Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const validation = validateForm();
    setErrors(validation);

    if (Object.keys(validation).length === 0) {
      if (isRegister) {
        setSuccessMsg(`Welcome, ${formData.name}! Account created successfully.`);
      } else {
        setSuccessMsg(`Welcome back, ${formData.email}! Logged in successfully.`);
      }

      // Clear inputs after submit
      setFormData({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } else {
      setSuccessMsg("");
    }
  };

  return (
    <div
      style={{
        maxWidth: 400,
        margin: "40px auto",
        padding: 20,
        border: "1px solid #ddd",
        borderRadius: 10,
        background: "#fafafa",
      }}
    >
      <h2 style={{ textAlign: "center" }}>
        {isRegister ? "Register" : "Login"}
      </h2>

      <form onSubmit={handleSubmit}>
        {isRegister && (
          <div style={{ marginBottom: 10 }}>
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              style={{ width: "100%", padding: 8 }}
            />
            {errors.name && <div style={{ color: "red" }}>{errors.name}</div>}
          </div>
        )}

        <div style={{ marginBottom: 10 }}>
          <label>Email</label>
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={{ width: "100%", padding: 8 }}
          />
          {errors.email && <div style={{ color: "red" }}>{errors.email}</div>}
        </div>

        <div style={{ marginBottom: 10 }}>
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            style={{ width: "100%", padding: 8 }}
          />
          {errors.password && (
            <div style={{ color: "red" }}>{errors.password}</div>
          )}
        </div>

        {isRegister && (
          <div style={{ marginBottom: 10 }}>
            <label>Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              style={{ width: "100%", padding: 8 }}
            />
            {errors.confirmPassword && (
              <div style={{ color: "red" }}>{errors.confirmPassword}</div>
            )}
          </div>
        )}

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "10px",
            background: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: 6,
            cursor: "pointer",
          }}
        >
          {isRegister ? "Register" : "Login"}
        </button>
      </form>

      {successMsg && (
        <div style={{ color: "green", textAlign: "center", marginTop: 15 }}>
          {successMsg}
        </div>
      )}

      <div style={{ textAlign: "center", marginTop: 15 }}>
        {isRegister ? "Already have an account?" : "Don't have an account?"}
        <button
          onClick={() => setIsRegister(!isRegister)}
          style={{
            marginLeft: 6,
            color: "#007bff",
            background: "none",
            border: "none",
            cursor: "pointer",
            textDecoration: "underline",
          }}
          type="button"
        >
          {isRegister ? "Login" : "Register"}
        </button>
      </div>
    </div>
  );
}
