import React from "react";
import { FaStar } from "react-icons/fa";
export default function Card(props) {
  var item = props.item;
  var img = item.coverImg;
  var rating = item.stats.rating;
  var ratingsno = item.stats.reviewCount;
  var country = item.location;
  var title = item.title;
  var price = item.price;
  var openSpots = item.openSpots;
  var openspot;
  if (openSpots === 0) {
    openspot = <div className="card-badge-unavailable">Sold Out</div>;
  } else if (country === "Online")
    openspot = <div className="card-badge-available">Online</div>;
  return (
    <div className="card">
      {openspot && openspot}
      <img src={img} alt="cardimage" className="card-image" />
      <div className="stats">
        <FaStar className="star" />
        <span className="rating">{rating}</span>
        <span className="gray">({ratingsno}) • </span>
        <span className="gray">{country}</span>
      </div>
      <p className="title">{title}</p>
      <p>
        <span className="bold">From ${price}</span>/ person
      </p>
    </div>
  );
}
