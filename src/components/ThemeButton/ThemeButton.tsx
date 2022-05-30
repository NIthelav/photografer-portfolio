import React from "react";
import { useAppDispatch } from "../../app/hooks";
import { cn } from "../../cn";
import { toggleTheme } from "../../features/theme/themeSlice";

import "./ThemeButton.css";

const block = cn("theme-button");

export const ThemeButton = () => {
  const dispatch = useAppDispatch();
  return <div className={block()} onClick={() => dispatch(toggleTheme())} />;
};
