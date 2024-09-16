const myFunc = () => {
  return "hello";
};

type MyFunc = typeof myFunc;

type MyFuncReturn = ReturnType<MyFunc>;

// the same as
type MyFuncReturn2 = ReturnType<typeof myFunc>;