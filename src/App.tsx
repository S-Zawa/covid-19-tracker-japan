import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import ReactTooltip from "react-tooltip";
import MapChart from "./components/MapChart";
import "./styles.css";

function App() {
  const [content, setContent] = useState("");
  return (
    <div className="App">
      <MapChart setTooltipContent={setContent} />
      <ReactTooltip>{content}</ReactTooltip>
    </div>
  );
}

export default App;
