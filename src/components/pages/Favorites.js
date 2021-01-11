import React, { useState, useEffect } from "react";
import Favs from "./Favs";
import FavCard from "../FavCard";
import { useParams } from "react-router-dom";
import { State } from "react-powerplug";


function Favorites () {

  const [Fav, setFav] = useState({});



  return (
    <div>
            <h1>Bucket List</h1>
            {Fav.length > 0 ? Fav.map(favs => 
                <FavCard {...favs} />) : null }
        </div>
  )

}

export default Favorites



/*
class Favorites extends React.Component {
  state = {Fav}

  render() {
    return (
      <div>
            <h1>Bucket List</h1>
            {Fav.length > 0 ? Fav.map(favs => 
                <FavCard {...favs} />) : null }
        </div>
    );
  }
}

export default Favorites;
*/

/*
return (
  <div>
    <FavCard />
  </div>
);


*/