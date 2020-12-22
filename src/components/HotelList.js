import React from "react";
import HotelCard from "./HotelCard";

const HotelList = (props) => {
  const hotels = props.hotels.map((hotel) => {
    return <HotelCard key={hotel.id} hotel={hotel} />;
  });
  return <div className="hotel-list">{hotels}</div>;
};

export default HotelList;
