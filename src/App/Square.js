import React from "react";
import { useSelector } from "react-redux";

export const Square= ({ value }) => {
  return (
    <div
      className="square"
      style={{ height: "40px",
       width: "40px",
        border: "1px solid grey" 
      }}
    >
      {value}
    </div>
  );
};
