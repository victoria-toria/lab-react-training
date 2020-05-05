import React from "react";

const IdCard = (props) => {
  console.log(props);
  let newGender = "Dog";
  if (props.gender === "male") {
    newGender = "cat";
  }
  return (
    <React.Fragment>
      <p> {props.lastName}</p>
      <p>{props.firstName}</p>
      <p>{newGender}</p>
      <p>{props.height}</p>
      <p>{props.birth}</p>
      <img  alt='prop' src={props.picture} />
    </React.Fragment>
  );
};

export default IdCard;
