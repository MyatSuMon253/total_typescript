/* error
const productPrices = {
	Apple: 1.2,
	Banana: 0.5,
	Orange: 0.8,
};

const getPrice = (productName: string) => {
	return productPrices[productName]; // red squiggly line under productPrices[productName]
};

getPrice('Pear');
*/

// solution 1 give index signature of string
const productPrices: Record<string, number> = {
  Apple: 1.2,
  Banana: 0.5,
  Orange: 0.8,
};

const getPrice = (productName: string) => {
  return productPrices[productName];
};

// solution 2 give index signature of string
const productPrices2 = {
  Apple: 1.2,
  Banana: 0.5,
  Orange: 0.8,
};

const getPrice2 = (productName: "Orange" | "Apple" | "Banana") => {
  return productPrices2[productName];
};

// solution 3 give keyof object
const productPrices3 = {
  Apple: 1.2,
  Banana: 0.5,
  Orange: 0.8,
};

const getPrice3 = (productName: keyof typeof productPrices3) => {
  return productPrices3[productName];
};

getPrice3("Apple");

// solution 4 give keyof object
const productPrices4 = {
  Apple: 1.2,
  Banana: 0.5,
  Orange: 0.8,
};

const getPrice4 = (productName: string) => {
  const index = productName as keyof typeof productPrices4;
  console.log(index);
  return productPrices4[index];
};

getPrice4("Apple");
getPrice4("Pear");
