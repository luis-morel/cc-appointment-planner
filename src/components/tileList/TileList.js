import React from "react";
import Tile from '../tile/Tile.js';

export const TileList = ({ data }) => {
  return (
    <div>
      {data.map((item, i) => {
        const { name, ...description} = item;
        return (
          <Tile
            key={i}
            name={name}
            description={description}
          />
        )
      })}            
    </div>
  );
};
