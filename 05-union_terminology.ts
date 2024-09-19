// descriminated union type
type A =
  | {
      type: "a";
      a: string;
    }
  | {
      type: "b";
      b: string;
    }
  | {
      type: "c";
      c: string;
    };

const getUnion = (result: A) => {
  if (result.type === "a") {
    return result.a;
  }
};

// union type
type B = "a" | "b" | "c";

// enum type
enum C {
  A = "a",
  B = "b",
  C = "c",
}
