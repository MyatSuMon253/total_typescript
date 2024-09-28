/* problem
interface Dog {
  bark: boolean
}

let cat = { purr: true }

let dog = cat as Dog;
*/

// solution 1
// convert to unknown, or any 
interface Dog {
  bark: boolean
}

let cat = { purr: true }

let dog = cat as unknown as Dog;
let dog3 = cat as any as Dog;

// solution 2
interface Dog2 {
  bark: boolean
  purr: boolean
}

let cat2 = { purr: true }

let dog2 = cat as Dog2;