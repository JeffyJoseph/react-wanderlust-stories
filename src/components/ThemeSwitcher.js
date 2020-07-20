import React, { useContext } from "react";
import AppContext from "../context/appContext";

const ThemeSwitcher = () => {
  const appCtx = useContext(AppContext);
  const { toggleTheme } = appCtx;
  return (
    <div>
      <button onClick={toggleTheme} className="btn">
        Switch Theme
      </button>
    </div>
  );
};

export default ThemeSwitcher;
