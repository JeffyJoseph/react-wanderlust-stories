import React from "react";

const Logo = (props) => {
  const { iconClass, logoText } = props.data;
  return (
    <div>
      <div className="header_logo">
        <i className={iconClass}></i>
        <span className="logo_text"> {props.children} </span>
      </div>
      <div className="divider div-transparent div-dot"></div>
    </div>
  );
};

export default Logo;
