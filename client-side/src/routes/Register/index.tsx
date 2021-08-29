import React, { SyntheticEvent, useState } from "react";
import { Redirect } from "react-router-dom";
import axios from "../../services/axios";

const Register = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [redirect, setRedirect] = React.useState(false);

  const submit = async (e: SyntheticEvent) => {
    e.preventDefault();

    await fetch("http://localhost:8000/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    });

    // await axios.post("/register", {
    //   body: { name, email, password },
    // });

    setRedirect(true);
  };

  if (redirect) {
    return <Redirect to="/login" />;
  }

  return (
    <div className="form-signin">
      <form onSubmit={submit}>
        <h1 className="h3 mb-3 fw-normal">Please register</h1>
        <div className="form-elem">
          <input
            className="form-control"
            placeholder="Name"
            required
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-elem">
          <input
            type="email"
            className="form-control"
            placeholder="Email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-elem">
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="w-100 btn btn-lg btn-primary" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};
export default Register;
