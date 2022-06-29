import "./App.css";
import { Route, HashRouter as Router, Routes } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Movies from "./components/Movies";
import SingleMovie from "./components/SingleMovie";
function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const apiUrl = "https://ghibliapi.herokuapp.com/films?_limit=5";
  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((err) => {
        setError(err.message);
      });
  }, []);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Movies data={data} />} />
          <Route path="/Film" element={<SingleMovie authed={true} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
