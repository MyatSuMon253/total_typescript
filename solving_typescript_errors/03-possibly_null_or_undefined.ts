const searchParams = new URLSearchParams(window.location.search);

const id = searchParams.get("id");

// error
console.log(id.toUpperCase());

// solution 1 optional chain
console.log(id?.toUpperCase());

// solution 2 non nullable assertion
console.log(id!.toUpperCase());

// solution 3 type narrowing
if (id) {
  console.log(id.toUpperCase());
}

// solution 4 type narrowing by typeof check
if (typeof id === 'string') {
  console.log(id.toUpperCase());
}

// solution 5 throw error
if (!id) {
 throw new Error("Id not found")
}
console.log(id.toUpperCase());