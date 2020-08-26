import React from "react";
import { useSelector } from "react-redux";

export const Ships = () => {
  const ships = useSelector((state) => state.listShips);
  const ship = ships.map((ship, index) => {
    return (
      <div
        id="box"
        key={index}
        style={{
          backgroundColor: "lightgrey",
          border: "1px solid black",
          width: ship.size * 15 + "px",
          height: "10px",
          marginBottom: "5px",
        }}
      ></div>
    );
  });
  return (
    <div>
      <h1>
        Your Ships
      </h1>
      <div>
        {ship}
      </div>
    </div>
  );
};
