import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import JSONPretty from "react-json-pretty";

const Profile = () => {
  const { user, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
  

<div class="ui centered card">
  <div class="image">
    <img src={user.picture} alt={user.name}/>
  <div class="content">
    <a class="header">{user.name}</a>
   
    <div class="description">
    {user.email}
    </div>
  </div>
  </div>
</div>
    )
  )
};

export default Profile;
