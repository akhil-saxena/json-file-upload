// create react component
import React, { SyntheticEvent, useState } from "react";
import axios from "../../services/axios";
import { Redirect } from "react-router-dom";

const Login = (props: { setName: (name: string) => void }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);

  const submit = async (e: SyntheticEvent) => {
    e.preventDefault();

    const response = await fetch("http://localhost:8000/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ email, password }),
    });

    // await axios.post("/login", {
    //   credentials: "include",
    //   body: JSON.stringify({ email, password }),
    // });

    const content = await response.json();
    setRedirect(true);
    props.setName(content.name);
  };

  if (redirect) {
    return <Redirect to="/" />;
  }

  return (
    <div className="form-signin">
      <form onSubmit={submit}>
        <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
        <div className="form-elem">
          <input
            type="email"
            id="inputEmail"
            className="form-control"
            placeholder="Email address"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-elem">
          <input
            type="password"
            id="inputPassword"
            className="form-control"
            placeholder="Password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="w-100 btn btn-lg btn-primary" type="submit">
          Sign in
        </button>
      </form>
    </div>
  );
};

export default Login;
