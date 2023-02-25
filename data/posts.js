import { users } from "./users";

export const postFooterIcons = [
  {
    name: "Like",
    icon: "https://img.icons8.com/fluency-systems-regular/60/ffffff/like.png",
    likedIcon: "https://img.icons8.com/ios-glyphs/90/fa314a/like--v1.png",
  },
  {
    name: "Comment",
    icon: "https://img.icons8.com/material-outlined/60/ffffff/speech-bubble",
  },
  {
    name: "Share",
    icon: "https://img.icons8.com/material-outlined/60/ffffff/filled-sent.png",
  },
  {
    name: "Save",
    icon: "https://img.icons8.com/fluency-systems-regular/60/ffffff/bookmark-ribbon.png",
  },
];

export const posts = [
  {
    imageUrl: "https://i.ibb.co/vLpsQ4t/IMG-20220722-WA0026.jpg",
    username: users[0].username,
    likes: 7421,
    caption: "I love this place",
    profilePicture: users[0].imageUri,
    comments: [
      {
        username: "qazman1",
        comment: "This place builds fire!!!!",
      },
      {
        username: "amanath.js",
        comment:
          "I love this place too because once I wake up I'll be able to develop too!",
      },
    ],
  },
  {
    imageUrl: "https://i.ibb.co/182bP1y/4k.png",
    username: users[1].username,
    likes: 7401,
    caption: "HAWAII IS AWESOME",
    profilePicture: users[1].imageUri,
    comments: [
      {
        username: "kamikaze",
        comment: "wear a hawaiin shirt!",
      },
      {
        username: "eminem",
        comment: "oh yea yea!",
      },
    ],
  },
];
