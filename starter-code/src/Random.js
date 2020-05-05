import React from "react";

const Random = (props) => {
  console.log(props);

  return (
    <React.Fragment>
      <p>
        Random value between {props.min} and {props.max} =>{" "}
        {Math.floor(Math.random() * (props.max - props.min) + props.min)}
      </p>
    </React.Fragment>
  );
};

export default Random;
