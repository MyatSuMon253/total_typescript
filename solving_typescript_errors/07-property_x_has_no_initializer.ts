// problem
// class User {
//   private username: string;
// }

// solution 1
// class property initializer
class User7 {
  public username: string = "";
}

const user_seven = new User7();
user_seven.username; // ""

// solution 2
// assign in the constructor
class User8 {
  private username: string;

  constructor() {
    this.username = "";
  }
}

// solution 3
// make it optional
class User9 {
  private username?: string;
}
