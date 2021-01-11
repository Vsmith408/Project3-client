import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

const Profile = () => {
  const { user, isAuthenticated } = useAuth0()

  return (
    isAuthenticated && (
      <div className="ui raised centered card">
        <div className="card"></div>
        <img
          className="ui centered medium image"
          src={user.picture}
          alt={user.name}
        />
        <div className=" content">
          <h1 className="header">{user.name}</h1>
          <p className="description">{user.email}</p>
        </div>
      </div>
    )
  )
}

export default Profile
