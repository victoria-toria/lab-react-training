import React from "react";

const Greetings = (props) => {
  console.log(props);
let responce='';
  if (props.lang === "de") {
   responce= `Hallo ${props.children}`;
  } else {
    responce =`Bonjour ${props.children}`;
  }
  return <div>{responce}</div>;
};

export default Greetings;
