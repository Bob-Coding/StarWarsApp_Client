import React from "react";
import { Link } from "react-router-dom";
import "./GridItem.css";

const GridItem = (props) => {
  return (
    <li className="gridItem">
      <Link to={"/movie/" + props.movie}>
        <figure>
          <img src={props.image} alt={props.altText} />
        </figure>
      </Link>
    </li>
  );
};

export default GridItem;
