import React from "react";
import Favourite from "./FavBtn";
import saveFav from "./pages/Favs";

const ResultsCard = (props) => {

  const clickedBtn = (arg) => {
    arg.saveFav()
    console.log("click!")
  }

  return(
    <div className="ui cards">
    <div className="card">
      <div className="content">
        <div className="header">{props.name}</div>
        <div className="meta">{props.rating}</div>
        <div className="description">{props.address}</div>
      </div>
      <div className="extra content">
        <button onClick={() => {console.log("click!")}} >Add To Favourites</button>
      </div>
    </div>
  </div>
  )

};


export default ResultsCard;
