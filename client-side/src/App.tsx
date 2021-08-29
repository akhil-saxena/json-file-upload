import React, { useEffect, useState } from "react";
import "./App.css";
import Login from "./routes/Login";
import Nav from "./components/Nav";
import Home from "./routes/Home";
import Register from "./routes/Register";
import Sheet from "./routes/Sheet";
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "./store";

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
    <Provider store={configureStore()}>
      <div className="App">
        <BrowserRouter>
          <Nav name={name} setName={setName} />
          <div className="app-wrapper">
            <Route path="/" exact component={() => <Home name={name} />} />
            <Route
              path="/login"
              component={() => <Login setName={setName} />}
            />
            <Route path="/register" component={Register} />
            <Route path="/sheet/:sheetId" component={Sheet} />
          </div>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
