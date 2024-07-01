import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./Homepage";
import Navbar from "../components/Navbar";
import Projects from "./Projects";

function App() {
  return (
    <Router>
      <div
        className="flex flex-col h-screen"
        style={{ scrollbarWidth: "none" }}
      >
        <Navbar />
        <div className="flex-1 mt-16">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
