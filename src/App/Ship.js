import React from "react";

export const Ship = (ship) => {
  return (
    <div
      style={{
        width: `${20 * ship.length}px`,
        height: "20px",
        border: "1px solid grey",
        backgroundColor: "lightgrey",
        marginBottom: "10px",
      }}
    >
    </div>
  );
};
