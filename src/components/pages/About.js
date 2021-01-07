import React from "react";
import about from "../../Images/about.jpg";

function About() {
  return (
    <div class="ui vertically divided grid">
      <div class="two column row">
        <div class="column">
          <img className="ui huge image" src={about} alt="travel"></img>
        </div>
        <div class="column">
          <h1 className='header'>About TravelNow</h1>
          <p className='bio'>
            Find your next adventure with TravelNow. We are here to provide you
            with access to hotels, restaurants and even things to do near the
            place you would like to travel.
          </p>
          <p className='bio'>
            Be sure to create an account in order to save all of the places that
            spike your interest. When doing this, you have created a bucket list
            for your next adventure!
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
