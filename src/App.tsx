import React from "react";
import { SectionGalleries } from "./components/SectionGalleries/SectionGalleries";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="background background_left"></div>
      <div className="background background_right"></div>
      <SectionGalleries />
    </div>
  );
}

export default App;

