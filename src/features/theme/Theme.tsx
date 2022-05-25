import React from "react";
import { cn } from "@bem-react/classname";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { setTheme, getTheme } from "./themeSlice";

const block = cn("Theme");

export const Theme = () => {
  const theme = useAppSelector(getTheme);
  const dispatch = useAppDispatch();

  return (
    <div className={block()}>
      <p>{theme}</p>
      <button onClick={() => dispatch(setTheme("dark"))}>dark</button>
      <button onClick={() => dispatch(setTheme("light"))}>light</button>
      <button onClick={() => dispatch(setTheme("blue"))}>blue</button>
    </div>
  );
};
