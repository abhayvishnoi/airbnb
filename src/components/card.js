import React from "react";
import { FaStar } from "react-icons/fa";
import lodash from "lodash";
var cats = [
  "people",
  "nature",
  "food",
  "infrastructure",
  "animals",
  "galaxy",
  "sky",
  "landscape",
  "architecture",
  "travel",
  "art",
  "flower",
  "scene",
  "galaxy",
  "fireworks",
  "flower",
];
function randomImage() {
  var cat1 = lodash.sample(cats);
  var cat2 = lodash.sample(cats);
  // console.log(cat1, cat2);
  return `https://source.unsplash.com/1080x1350/?${cat1},${cat2}`;
}
export default function Card(props) {
  var item = props.item;
  var img = randomImage();
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
