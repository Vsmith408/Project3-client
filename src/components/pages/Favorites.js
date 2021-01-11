import React from "react";
import Favs from "./Favs";
<<<<<<< HEAD

class Favorites extends React.Component {
  render() {
    return <div>
      <Favs />
    </div>;
=======
import FavCard from "../FavCard";

class Favorites extends React.Component {
  render() {
    return (
      <div>
        <Favs />
        <FavCard />
      </div>
    );
>>>>>>> origin/master
  }
}

export default Favorites;
