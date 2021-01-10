import React, { useEffect, useState } from "react";
import API from "../../apis/API";
import FavCard from "../FavCard";

export default function Favs() {
    const [Favs, setFavs] = useState({})
    //state = [];

    useEffect(() => {
        showFavs()
    }, []);

    function showFavs() {
        API.getFavs()
            .then(res => setFavs(res.data))
            .catch(err => console.log(err));
    }

    function addFavs() {
        API.saveFavs()
            .then(res => setFavs(res.data))
            .catch(err => console.log(err));
      };

    function removeFavs(id) {
        API.deleteFavs(id)
            .then(res => showFavs())
            .catch(err => console.log(err));
    }
    
    return (
        <div>
            <h1>Bucket List</h1>
            {Favs.length > 0 && Favs.map(favs => 
                <FavCard {...favs} />
                )}
        </div>
    )
}

//fix favcard
//add remove from favs button -- (add this toggle feature to add button as well?)