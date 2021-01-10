import React from "react";
import API from "../apis/API";

const ResultsCard = (props) => {
  const clickedBtn = () => {
    API.saveFavs();
    console.log("click!");
  };

  return (
    <div className="ui cards">
      <div className="card">
        <div className="content">
          <div className="header">{props.name}</div>
          <div className="meta">
            {props.rating}{" "}
            <div className="ui  rating" data-max-rating="1">
              <i className="star icon"></i>
            </div>{" "}
          </div>

          <div className="description">{props.address}</div>
        </div>
        <div className="extra content">
          <button onClick={clickedBtn}>Add To Favourites</button>
        </div>
      </div>
    </div>
  );
};

export default ResultsCard;
