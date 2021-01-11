import React, { useState, useEffect } from "react";
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
    API.deleteFavs(id)
      .then(res => loadFavs())
      .catch(err => console.log(err));
  }
  
  return (
    <div className="ui cards">
      <h1>Bucket List</h1>
    <div className="card">
      <div className="content">
        <div className="header">{props.name}</div>
        <button onClick={() => removeFavs(Fav.id)}>Remove</button>
      </div>
    </div>
  </div>
  );
  };

export default FavCard;
