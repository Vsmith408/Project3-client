import React, { useState, useEffect } from "react";
import API from "../apis/API";

const ResultsCard = (props) => {
  /*
  const clickedBtn = () => {
    API.saveFavs();
    console.log("click!");
  };
  */
  
  const [Fav, setFav] = useState({
    placeTitle: "",
    favorite: false
  });
  
  useEffect(() => {
    API.saveFavs().then((res) => {
      setFav(res);
      console.log("fav:");
      console.log(Fav);
    })
  }, []);
  
  /*
  function addToFavs(id) {
    API.saveFavs(id)
      .then(setState({}))
      .then(res => console.log("saved!"))
      .catch(err => console.log(err));
  }
  */
  
  

  return(
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
        <button className="ui basic green button" onClick={() => setFav({ ...Fav, favorite: false })}>Add To Favourites</button>
      </div>
    </div>
    </div>
  );
};

export default ResultsCard;

// <button onClick={() => {addToFavs(props.name)}} >Add To Favourites</button>

// <button onClick={() => setFav({ ...Fav, favorite: false })} className="btn btn-success">Add to Favorites</button>