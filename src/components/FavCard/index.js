import React, { useState, useEffect } from 'react'
import API from '../../apis/API'

const FavCard = (props) => {
  function removeFavs(id) {
    API.deleteFav(id)
      .then((res) => props.onDelete())
      .catch((err) => console.log(err))
  }

  return (
    <div className="ui cards">
      <div className="card">
        <div className="content">
          <p className="header">{props.placeTitle}</p>
          <button
            className="ui basic green button"
            onClick={() => removeFavs(props._id)}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  )
}

export default FavCard

//add a ) : ( "No Results to Display"
//map() through results

/*
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

);


*/
