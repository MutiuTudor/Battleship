import React from "react";
import { useSelector } from "react-redux";
import { Square } from "./Square";

export const Row = (props) => {
  return (
    <div style={{ width: "600px", 
    display: "flex",
     flexWrap: "wrap" }}>
      {props.row.map((square, squareIndex) => {
        return (
          <Square
            key={`${props.rowIndex}${squareIndex}`}
          ></Square>
        );
      })}
    </div>
  );
};
