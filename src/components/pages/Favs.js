import React, { useEffect, useState } from 'react';
import API from '../../apis/API';
import FavCard from '../FavCard';
import background from "../../Images/plan.jpg";

export default function Favs() {
  //setting initial state
  const [Fav, setFav] = useState([])

  //load all favorites and store them with setFavs
  useEffect(() => {
    loadFavs()
  }, [])

  //load all favorites and sets them to Favs
  function loadFavs() {
    API.getFavs()
      .then((res) => setFav(res.data))
      .catch((err) => console.log(err))
  }

  /*
    function addFavs() {
        API.saveFavs()
            .then(res => setFavs(res.data))
            .catch(err => console.log(err));
      };
    */

  //Deletes a favorite from the database using given id, then reloads favorites from the db
  // function removeFavs(id) {
  //     API.deleteFavs(id)
  //         .then(res => loadFavs())
  //         .catch(err => console.log(err));
  // }
    
  
  return (
    <div className="ui container" style={{ backgroundImage: `url(${background})`}}>
      <h1 className="header">Bucket List</h1>
      <div className="ui three column doubling stackable grid">
          <div className="column">
          {Fav.length > 0
        ? Fav.map((favs) => <FavCard {...favs} onDelete={loadFavs} />)
        : null}
          </div>
      </div>
    </div>
    //need to map out length to display x amount of results
    //could take from 21 activities and produce a list
  )
  
}

//fix favcard
//add remove from favs button -- (add this toggle feature to add button as well?)


/*

{Fav.length > 0 ? Fav.map((favs) =>(
    <div className="column">
      <FavCard {...favs} onDelete={loadFavs} />
      : null
    </div> 
))}

*/