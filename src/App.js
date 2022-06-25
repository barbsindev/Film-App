import "./App.css";
import { Route, HashRouter as Router, Routes } from "react-router-dom";
import Results from "./components/Results";
import Film from "./components/Film";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Results />} />
          <Route path="/Film" element={<Film />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
