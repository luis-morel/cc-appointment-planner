import React from "react";

export const TileList = ({ data }) => {
  return (
    <div>
      {data.map((item) => {
        return (
          <Tile
            name={item.name}
            description={item.description}
          />
        )
      })}            
    </div>
  );
};
