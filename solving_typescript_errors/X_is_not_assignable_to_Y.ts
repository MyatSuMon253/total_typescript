interface UserProfile {
  id: string;

  preferences: {
    theme: "light" | "dark" | "blue";
  };
}

// error
// let user: UserProfile = {
//   id: '123',
//   preferences: {
//     theme: 'blue'
//   }
// }

// solution 1
let user1: UserProfile = {
  id: "123",
  preferences: {
    theme: "light", // change light or dark
  },
};

// solution 2
let user2: UserProfile = {
  id: "123",
  preferences: {
    theme: "blue", // add blue to theme type
  },
};

// solution 3
// change type of theme to string or any
