import "./App.css";
import Home from "../components/Home";
import Education from "../components/Education";
import About from "../components/About";

function Homepage() {
  return (
    <div className="App font-bold text-6xl snap-y snap-mandatory h-screen overflow-y-scroll no-scrollbar">
      {Home()}
      {Education()}
      {About()}
    </div>
  );
}

export default Homepage;
