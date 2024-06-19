import React from "react";

export const Tile = ({ name, description }) => {
  const values = Object.values(description);
  return (
    <div className="tile-container">
      <p className="tile-title">{name}</p>
      {values.map((value, i) => {
        return (
          <p key={i} className="tile">{value}</p>
        )
      })}
    </div>
  );
};
