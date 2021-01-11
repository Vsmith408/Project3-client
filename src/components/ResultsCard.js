import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { State, Toggle } from 'react-powerplug'
import API from '../apis/API'

const ResultsCard = (props) => {
  /*
  const clickedBtn = () => {
    API.saveFavs();
    console.log("click!");
  };
  */

  //save to favorites data
  function addToFavs(id) {
    API.saveFavs({
      placeTitle: props.name,
    })
      .then((res) => console.log('saved!'))
      .catch((err) => console.log(err))
  }
  //do i need id: ""
  //Fav.name instead?

  return (
    <div className="ui cards">
      <div className="card">
        <div className="content">
          <div className="header">{props.name}</div>
          <div className="meta">
            {props.rating}{' '}
            <div className="ui  rating" data-max-rating="1">
              <i className="star icon"></i>
            </div>{' '}
          </div>

          <div className="description">{props.address}</div>
        </div>
        <div className="extra content">
          <Toggle initial={{ on: true }}>
            {({ on, off, toggle, setOn }) => {
              return (
                <div onClick={toggle}>
                  {on && (
                    <button
                      className="ui basic green button"
                      onClick={() => addToFavs(props.name)}
                    >
                      Add to Favourites
                    </button>
                  )}
                  {off && (
                    <button className="ui solid green button">Saved!</button>
                  )}
                </div>
              )
            }}
          </Toggle>
        </div>
      </div>
    </div>
  )
}

export default ResultsCard

// <button onClick={() => {addToFavs(props.name)}} >Add To Favourites</button>
// addToFavs(prop.id)

// <button onClick={() => setFav({ ...Fav, favorite: false })} className="btn btn-success">Add to Favorites</button>

//<button className="ui basic green button" onClick={() => addToFavs(props.name)}>Add To Favourites</button>
