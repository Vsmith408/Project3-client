import React from "react";
import { Toggle } from "react-powerplug";

//create function component to toggle what appears
//goal is to toggle button display before & after clicking

function MyToggleBtn() {
  //set default toggle
  <Toggle initial={{ on: true }}>
    {({ on, off, toggle, setOn }) => {
      return (
        <div onClick={this.handleToggle} style={{ fontSize: 100, width: 360 }}>
          {this.state.on ? (
            <button className="ui basic green button">Add to Favourites</button>
          ) : (
            <button className="ui solid green button">Remove from Favourites</button>
          )}
        </div>
      );
    }}
  </Toggle>;
}

export default MyToggleBtn;

// const App = () => <MyToggle default={true} />;
