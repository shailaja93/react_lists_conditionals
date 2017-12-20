import React from "react";

const validationComponent = props => {
  return props.length < 5 ? (
    <h3>Text too short!</h3>
  ) : (
    <h3>Text long enough</h3>
  );
};

export default validationComponent;
