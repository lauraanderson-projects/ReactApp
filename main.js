//Javasript concepts to know before learning React Logical AND (&&) and Logical OR
//(||) operators Logical AND (&&) and Logical OR (||) operators are used in
//JavaScript to evaluate expressions and return values based on the truthiness or
//falsiness of the operands. The Logical AND (&&) operator returns the first falsy
//value it encounters or the last value if all are truthy. It can be used for
//conditional rendering in React components. For example, if you want to render a
//component only if a certain condition is true, you can use the && operator:
//```javascript const isLoggedIn = true; const greeting = isLoggedIn &&
//<h1>Welcome back!</h1>
//; ``` In this example, if isLoggedIn is true, the greeting variable will contain
//the JSX element
//<h1>Welcome back!</h1>
//. If isLoggedIn is false, greeting will be false. The Logical OR (||) operator
//returns the first truthy value it encounters or the last value if all are falsy.
//It can be used to provide default values in React components. For example, if
//you want to set a default value for a prop, you can use the || operator:
//```javascript const username = props.username || 'Guest';

function getName(name) {
  return name;
}

let a = false;
let b = false;

console.log(a && b); // true
console.log(a && getName("John"));
//``` In this example, if props.username is truthy, username will be set to
//props.username. If props.username is falsy, username will be set to 'Guest'.
//This is a common pattern in React to provide default values for props or state.
//In summary, Logical AND (&&) and Logical OR (||) operators are powerful tools
console.log(a || b); // false
console.log(a || getName("John")); // John

//Template Literals
//Template literals are a feature in JavaScript that allows you to create strings

let name1 = "John";
let name2 = "Doe";

console.log(`Hello ${name1} ${name2}`); // Hello John Doe

//Ternary Operator
//The ternary operator is a shorthand way of writing an if-else statement in
//JavaScript. It takes three operands: a condition, a value to return if the
//condition is true, and a value to return if the condition is false. The syntax
//for the ternary operator is as follows: condition ? valueIfTrue : valueIfFalse.

const showRecipeOne = true;

function getRecipeOneName(recipeName) {
  return recipeName;
}

function getRecipeTwoName(recipeName) {
  return recipeName;
}

if (showRecipeOne) {
  console.log(getRecipeOneName("Pasta"));
} else {
  console.log(getRecipeTwoName("Pizza"));
}

//condition ? statement 1 : statement 2;
//For example, if you want to set a variable based on a condition, you can use the
//ternary operator:

showRecipeOne
  ? console.log(getRecipeOneName("Pasta"))
  : console.log(getRecipeTwoName("Pizza"));

const id = 1;
const productName = "Apple Watch";
const rating = 4.5;

//one way:
//const product = {
//  id: id,
//  productName: productName,
//  rating: rating,
//};

//another way, key and value are the same:
const product = {
  id,
  productName,
  rating,
};

console.log(product); // { id: 1, productName: 'Apple Watch', rating: 4.5 }

const product2 = {
  description: "Product 2",
  id,
  productName,
  rating,
};

//one way:
//const getProductTwoDescription = product2.description;
//console.log(getProductTwoDescription); // Product 2

//another way:
const { description } = product2;
console.log(description); // Product 2

const array = [1, 2, 3, 4, 5];

//one way:
const firstElement = array[0];
const secondElement = array[1];
console.log(firstElement, secondElement); // 1 2

//another way:
const [first, second, third, fourth] = array;
console.log(first, second, third, fourth); // 1 2

//if you go beyond the length of the array, it will be undefined

//default parameters, spread and rest operators

function mulOfTwoNumbers(a = 1, b = 2) {
  return a * b;
}

console.log(mulOfTwoNumbers(10, 20)); // 6

const array2 = [1, 2, 3, 4, 5];
const array3 = [6, 7, 8, 9, 10];
console.log(...array2); // 1 2 3 4 5)
console.log([...array2]); // [1, 2, 3, 4, 5]
console.log([...array2, ...array3]); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log([999, ...array2, 90, ...array3]); // [999, 1, 2, 3, 4, 5, 90, 6, 7, 8, 9, 10]

function getInfo(a, b, ...c) {
  console.log(a, b, ...c); // 1 2 3 4 5
  return "Laura Anderson";
}
console.log(getInfo(1, 2, 3, 4, 5, 6)); // Laura Anderson

//map, filter, find, some, every, includes, indexOf, findIndex, reduce

const personArray = [
  { name: "John", age: 30, country: "USA" },
  { name: "Laura", age: 44, country: "USA" },
  { name: "Jane", age: 25, country: "India" },
  { name: "Mike", age: 35, country: "England" },
];

let getAllNames = personArray.map((singlePerson, index) => {
  console.log(singlePerson, index);
  return `${singlePerson.name} age is ${singlePerson.age} and lives in ${singlePerson.country}`; // singlePerson.name;
});

console.log(getAllNames); // [ 'John', 'Jane', 'Mike' ]
console.log(getAllNames[0]); // John

let getPersonFromUSA = personArray.find((singlePerson) => {
  return singlePerson.country === "USA";
});

console.log(getPersonFromUSA); // [ { name: 'John', age: 30, country: 'USA' } ]

let getPersonsFromUSA = personArray.filter((singlePerson) => {
  return singlePerson.country === "USA";
});

console.log(getPersonsFromUSA); // [ { name: 'John', age: 30, country: 'USA' } ]

let checkSomeArraryMethodWithExample = personArray.some((singlePerson) => {
  return singlePerson.age > 40;
});

console.log(checkSomeArraryMethodWithExample); // true

let checkEveryArraryMethodWithExample = personArray.every((singlePerson) => {
  return singlePerson.age > 40;
});

console.log(checkEveryArraryMethodWithExample); // false

const fruitsArray = ["apple", "banana", "orange", "grape", "kiwi"];

console.log(fruitsArray.includes("banana")); // true
console.log(fruitsArray.includes("mango")); // false
console.log(fruitsArray.indexOf("banana")); // 1
console.log(fruitsArray.indexOf("mango")); // -1
console.log(fruitsArray.lastIndexOf("banana")); // 1

let getIndexOfPersonWhoISFromUSA = personArray.findIndex((singlePerson) => {
  return singlePerson.country === "India";
});

console.log(getIndexOfPersonWhoISFromUSA); // 0

//////////////////////////
let getListOfProductsElement = document.querySelector(".list-of-products");

function renderProducts(getProducts) {
  getListOfProductsElement.innerHTML = getProducts
    .map((singleProductItem) => `<p>${singleProductItem.title}</p>`)
    .join(" ");
}

//fetching data from API
async function fetchListOfProducts() {
  try {
    const apiResponse = await fetch("https://dummyjson.com/products", {
      method: "GET",
    });
    const result = await apiResponse.json();
    console.log(result);
    if (result?.products?.length > 0) renderProducts(result?.products);
  } catch (error) {
    console.log(error);
  }
}

fetchListOfProducts();
