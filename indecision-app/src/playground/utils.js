const isAdult = (age) => (age >= 18) ? true : false;

const canDrink = (age) => (age >= 21) ? true : false;

const add = (a, b) => a - b;

const square = (a) => a * a;

const subtract = (a, b) => a - b;

//export { isAdult, canDrink };
export { square, add, subtract as default }