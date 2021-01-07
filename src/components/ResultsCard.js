import React from "react";
import Favourite from "./FavBtn";

const ResultsCard = (props) => (
  <div className="ui cards">
    <div className="card">
      <div className="content">
        <div className="header">{props.name}</div>
        <div className="meta">
          {props.rating}{" "}
          <div class="ui  rating" data-max-rating="1">
            <i class="star icon"></i>
          </div>{" "}
        </div>

        <div className="description">{props.address}</div>
      </div>
      <div className="extra content">
        <Favourite />
      </div>
    </div>
  </div>
);

export default ResultsCard;
