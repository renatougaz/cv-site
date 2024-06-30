import React from "react";
import "./App.css";

function Homepage() {
  return (
    <div className="App flex flex-row font-bold text-6xl p-6 h-screen ">
      <div className="flex flex-col p-5 justify-center items-center">
        <p>
          Hey my name is <span className="text-highlight"> Renato</span>
        </p>
        <p>
          I'm a  <span className="text-highlight">Software engineer</span>
        </p>
      </div>

      <div className="flex flex-col p-5 justify-center items-center">
        <p>
          Wanna get to know me?
        </p>
      </div>
    </div>
  );
}

export default Homepage;
