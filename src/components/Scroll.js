import React from "react";

const Scroll = props => {
  //The Scroll component children is the Card list inside it
  //console.log(props);

  return (
    <div
      style={{
        overflowY: "scroll",
        border: "5px solid black",
        height: "500px"
      }}
    >
      {props.children}
    </div>
  );
  //return <h1>HI</h1>;
};

export default Scroll;
