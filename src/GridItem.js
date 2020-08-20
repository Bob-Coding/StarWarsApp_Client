import React from "react";
import "./GridItem.css";

const GridItem = (props) => {
  return (
    <li className="gridItem">
      <figure>
        <img src={props.image} alt={props.altText} />
      </figure>
    </li>
  );
};

export default GridItem;
