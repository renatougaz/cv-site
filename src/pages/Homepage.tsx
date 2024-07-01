import "./App.css";
import Accent from "../util/Accent";

function Homepage() {
  return (
    <div id="about" className="App flex flex-row font-bold text-6xl p-6 h-full">
      <div className="flex flex-col flex-1 justify-center items-center">
        <p>
          Hey my name is { Accent("Renato") }
        </p>
        <p>
          I'm a { Accent("Software Engineer") }
        </p>
      </div>
      <div className="flex flex-col flex-1 justify-center items-center">
        <p>Wanna get to know me?</p>
      </div>
    </div>
  );
}

export default Homepage;
