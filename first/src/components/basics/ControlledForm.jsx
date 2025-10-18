import React, { useState } from 'react';

function ControlledForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const [error, setError] = useState({});

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function validate() {
    const errs = {};
    if (!form.name.trim()) {
      errs.name = "Name is required";
    }
    if (!form.email) {
      errs.email = "Email is required";
    }
    if (!form.password) {
      errs.password = "Password is required";
    }
    if (form.password !== form.confirmPassword) {
      errs.confirmPassword = "The passwords do not match";
    }
    return errs;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const validation = validate();
    setError(validation);
    if (Object.keys(validation).length === 0) {
      alert("Form Submitted " + JSON.stringify({ name: form.name, email: form.email }));
      setForm({ name: "", email: "", password: "", confirmPassword: "" });
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Controlled Form</h1>

      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Enter your name"
        />
        <br />
        {error.name && <div style={{ color: 'red' }}>{error.name}</div>}
      </div>

      <div>
        <label>Email:</label>
            <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
            />
        <br />
        {error.email && <div style={{color: 'red'}}>{error.email}</div>}
      </div>

      <div>
        <label>Password:</label>
      <input
        type="password"
        name="password"
        value={form.password}
        onChange={handleChange}
        placeholder="Enter your password"
      />
      <br />
      {error.password && <div style={{color:'red'}}>{error.password}</div>}
      </div>

      <div>
        <label>Confirm Password:</label>
      <input
        type="password"
        name="confirmPassword"
        value={form.confirmPassword}
        onChange={handleChange}
        placeholder="Enter your password again"
      />
      <br />
      {error.confirmPassword && <div style={{color:'red'}}>{error.confirmPassword}</div>}
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}

export default ControlledForm;
