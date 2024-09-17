const somethingDangerous = () => {
  if (Math.random() > 0.5) {
    throw new Error("Oh dear!");
  }
};

// error type unknown
try {
  somethingDangerous();
} catch (error) {
  console.log(error.message);
}

// solution 1 type assertion
try {
  somethingDangerous();
} catch (error) {
  console.log((error as Error).message);
}

// solution 2 type checking
try {
  somethingDangerous();
} catch (error) {
  if (typeof error === "object" && error && "message" in error) {
    console.log(error.message);
  } else {
    throw error;
  }
}

// solution 3 instance of
try {
  somethingDangerous();
} catch (error) {
  if (error instanceof Error) {
    console.log(error.message);
  } else {
    throw error;
  }
}
