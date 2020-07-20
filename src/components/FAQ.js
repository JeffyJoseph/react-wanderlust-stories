import React from "react";

import withToggle from "../shared/withToggle";
import ThemeSwitcher from "./ThemeSwitcher";

const FAQ = ({ isOpen, toggle }) => {
  const classes = isOpen ? "accordion_wrapper open" : "accordion_wrapper";
  return (
    <div className={classes}>
      <button onClick={toggle} className="accordion_header">
        Uh oh! You don't like the theme?
      </button>
      {isOpen && (
        <div className="accordion_content">
          Try me!!!
          <ThemeSwitcher />
        </div>
      )}
    </div>
  );
};
export default withToggle(FAQ);
