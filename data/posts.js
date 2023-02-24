import { users } from "./users";

export const posts = [
  {
    imageUrl: "https://i.ibb.co/182bP1y/4k.png",
    usersname: users[0].username,
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
    usersname: users[1].username,
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
