import React from "react";

const CreditCard = (props) => {
  const divStyle = {
    display: "flex",
    "flex-direction": "column",

    width: "300px",
    height: "100px",
    background: props.bgColor,
    color: props.color,
  };
  const divStyle2 = {
    display: "flex",
    "flex-direction": "row",
  };

  return (
    <React.Fragment>
      <br></br>
      <div style={divStyle}>
        <div>{props.type}</div>
        <div>{props.number}</div>
        <div style={divStyle2}>
          <div>
            Expires {props.expirationMonth}/{props.expirationYear}
          </div>
          <br></br>
          <div>{props.bank}</div>
        </div>
        <div>{props.owner}</div>
      </div>
      <br></br>
    </React.Fragment>
  );
};
export default CreditCard;
