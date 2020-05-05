import React from "react";

const BoxColor = (props) => {
  const divStyle = {
    display: "inline-block",
    width: "300px",
    height: "100px",
    background: `rgb(${props.r}, ${props.g}, ${props.b})`,
  };

  return (
    <React.Fragment>
      <br></br>
      <div style={divStyle}></div>
      <br></br>
    </React.Fragment>
  );
};
export default BoxColor;
