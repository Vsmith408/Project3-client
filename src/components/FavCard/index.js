import React from 'react'

const FavCard = (props) => (
  <div className="ui cards">
    <div className="card">
      <div className="content">
        <div className="header">{props.name}</div>
      </div>
    </div>
  </div>
)

export default FavCard
