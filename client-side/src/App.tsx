import React, { useEffect, useState } from "react";
import "./App.css";
import Login from "./routes/Login";
import Nav from "./components/Nav";
import Home from "./routes/Home";
import Register from "./routes/Register";
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";
import Upload from './routes/Upload';


function App() {
  const [name, setName] = useState("");

  useEffect(() => {
    (async () => {
      const response = await fetch("http://localhost:8000/api/user", {
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });

      const content = await response.json();
      setName(content.name || '');
    })();
  });

  return (
    
      <div className="App">
        <BrowserRouter>
          <Nav name={name} setName={setName} />
          <div className="app-wrapper">
            <Route path="/" exact component={() => <Upload/>} />
            <Route
              path="/login"
              component={() => <Login setName={setName} />}
            />
            <Route path="/register" component={Register} />
          </div>
        </BrowserRouter>
      </div>
  );
}

export default App;
