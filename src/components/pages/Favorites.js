import React from 'react'
import Favs from './Favs'
import FavCard from '../FavCard'

class Favorites extends React.Component {
  render() {
    return (
      <div>
        <Favs />
        <FavCard />
      </div>
    )
  }
}

export default Favorites
