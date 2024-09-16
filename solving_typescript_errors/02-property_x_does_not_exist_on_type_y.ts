const user: User = {
  name: "Matt",
};

// error
user.age = 24;

// solution 1
user["age"] = 24;

console.log(user);

// solution 2
type User = {
  name: string;
  age?: number;
};

// solution 3
const user4: Record<string, number | string> = {
  name: "Matt",
};
user4.age = 25;
user4.phone = '12345'
