var person = {
    firstName: "Bucky",
    lastName: "Roberts",
    age: 28
};

function addNumbers(a, b) {
    return a + b;
}

function noExplicitReturnReturnsUndefined(a, b) {
}

console.log(person);
// { firstName: 'Bucky', lastName: 'Roberts', age: 28 }

console.log(addNumbers(7, 3));
// 10

console.log(noExplicitReturnReturnsUndefined());
// undefined

