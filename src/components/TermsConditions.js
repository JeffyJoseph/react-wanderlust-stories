import React from "react";
import Toggler from "../shared/Toggle";

const Terms = (props) => {
  return (
    <Toggler
      headerText="Amazing photos! Where can I get these?"
      render={(isOpen) => (
        <>{isOpen && <div className="accordion_content">Check out unsplash for free :)</div>}</>
      )}
    ></Toggler>
  );
};
export default Terms;
