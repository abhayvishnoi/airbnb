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
  console.log(cat1, cat2);
  return `https://source.unsplash.com/1080x1350/?${cat1},${cat2}`;
}
const data = [
  {
    id: 1,
    title: "Life Lessons with Katie Zaferes",
    description:
      'I will share with you what I call "Positively Impactful Moments of Disappointment." Throughout my career, many of my highest moments only came after setbacks and losses. But learning from those difficult moments is what gave me the ability to rise above them and reach my goals.',
    price: 136,
    coverImg: randomImage(),
    stats: {
      rating: 5.0,
      reviewCount: 6,
    },
    location: "Online",
    openSpots: 0,
  },
  {
    id: 2,
    title: "Learn Wedding Photography",
    description:
      "Interested in becoming a wedding photographer? For beginner and experienced photographers alike, join us in learning techniques required to leave the happy couple with memories that'll last a lifetime.",
    price: 125,
    coverImg: randomImage(),
    stats: {
      rating: 5.0,
      reviewCount: 30,
    },
    location: "Online",
    openSpots: 27,
  },
  {
    id: 3,
    title: "Group Mountain Biking",
    description:
      "Experience the beautiful Norwegian landscape and meet new friends all while conquering rugged terrain on your mountain bike. (Bike provided!)",
    price: 50,
    coverImg: randomImage(),
    stats: {
      rating: 4.8,
      reviewCount: 2,
    },
    location: "Norway",
    openSpots: 3,
  },
  {
    id: 4,
    title: "Group Mountain Biking",
    description:
      "Experience the beautiful Norwegian landscape and meet new friends all while conquering rugged terrain on your mountain bike. (Bike provided!)",
    price: 50,
    coverImg: randomImage(),
    stats: {
      rating: 4.8,
      reviewCount: 2,
    },
    location: "Norway",
    openSpots: 3,
  },
  {
    id: 5,
    title: "Group Mountain Biking",
    description:
      "Experience the beautiful Norwegian landscape and meet new friends all while conquering rugged terrain on your mountain bike. (Bike provided!)",
    price: 50,
    coverImg: randomImage(),
    stats: {
      rating: 4.8,
      reviewCount: 2,
    },
    location: "Norway",
    openSpots: 3,
  },
  {
    id: 6,
    title: "Group Mountain Biking",
    description:
      "Experience the beautiful Norwegian landscape and meet new friends all while conquering rugged terrain on your mountain bike. (Bike provided!)",
    price: 50,
    coverImg: randomImage(),
    stats: {
      rating: 4.8,
      reviewCount: 2,
    },
    location: "Norway",
    openSpots: 3,
  },
  {
    id: 7,
    title: "Group Mountain Biking",
    description:
      "Experience the beautiful Norwegian landscape and meet new friends all while conquering rugged terrain on your mountain bike. (Bike provided!)",
    price: 50,
    coverImg: randomImage(),
    stats: {
      rating: 4.8,
      reviewCount: 2,
    },
    location: "Norway",
    openSpots: 3,
  },
];
export default data;
