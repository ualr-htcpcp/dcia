import React from "react";

export default function Register() {
  const [email, setEmail] = React.useState(null);
  const [password, setPassword] = React.useState(null);
  const [accessLevel, setAccessLevel] = React.useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("clicked!");

    const payload = {
      email: email,
      password: password,
      accessLevel: accessLevel,
    };
    fetch("api/register", {
      method: "post",
      body: JSON.stringify(payload),
    })
      .then((res) => {
        res.json();
      })
      .then((json) => {
        console.log(json);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <>
      <h2>Sign Up for DCIA</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <label htmlFor="accessLevel">Access Level</label>
        <select id="accessLevel" onBlur={(e) => setAccessLevel(e.target.value)}>
          <option disabled selected value>
            Select an Option
          </option>
          <option value="instructor">Instructor</option>
          <option value="admin">Administrator</option>
        </select>

        <button type="submit">Sign Up</button>
      </form>

      <span>Already have an account? Sign in</span>
    </>
  );
}
