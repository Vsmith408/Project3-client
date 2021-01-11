import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import API from "../../apis/API";

const FavCard = (props) => {
  
  //set state
  const [Fav, setFav] = useState({})

  //load all favorites
  useEffect(() => {
    loadFavs()
  }, []);

  function loadFavs() {
    API.getFavs()
      .then(res => setFav(res.data))
      .catch(err => console.log(err));
  }

  function removeFavs(id) {
    API.deleteFav(id)
      .then(res => loadFavs())
      .catch(err => console.log(err));
  }
  
  return (
    <div className="ui cards">
      <h1>Bucket List</h1>
    <div className="card">
      <div className="content">
        <div className="header">{props.name}</div>
        <button className="ui basic green button" onClick={() => removeFavs(Fav.id)}>Remove</button>
      </div>
    </div>
  </div>
  );
  };

export default FavCard;

//add a ) : ( "No Results to Display"
//map() through results