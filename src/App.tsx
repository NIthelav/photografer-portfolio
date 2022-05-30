import React, { useState } from "react";
import { SectionGalleries } from "./components/SectionGalleries/SectionGalleries";
import { ThemeButton } from "./components/ThemeButton/ThemeButton";
import { useAppSelector } from "./app/hooks";
import { getTheme } from "./features/theme/themeSlice";

import "./App.css";

function App() {
  const theme = useAppSelector(getTheme);
  return (
    <div className={`App ${theme}`}>
      <div className="background background_left"></div>
      <div className="background background_right"></div>
      <SectionGalleries />
      <ThemeButton />
    </div>
  );
}

export default App;

