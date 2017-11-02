/**
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

// right hand side is anonymous function, assign it to variable printBacon
var printBacon = function () {
    console.log("Bacon is healthy. Don't believe the doctors!");
};

console.log(person);
// { firstName: 'Bucky', lastName: 'Roberts', age: 28 }

console.log(addNumbers(7, 3));
// 10

console.log(noExplicitReturnReturnsUndefined());
// undefined

// here must append () after printBacon
printBacon();

// after timeout execute function, timeout in msec
// here must not append () after printBacon
setTimeout(printBacon, 2000);

 */

function placeAnOrder(orderNumber) {
    console.log("Customer order:", orderNumber);
    // javascript style anonymous function insert space before ()
    cookAndDeliverFood(function () {
        // captures orderNumber from outer scope
        console.log("Delivered food order:", orderNumber);
    });
}

// when async operation completes, runs callback supplied by caller
function cookAndDeliverFood(callback) {

    // simulate a slow operation e.g. read from a database
    // schedule callback to run after timeout
    setTimeout(callback, 2000);
}

// Simulate users web requests
placeAnOrder(0);
placeAnOrder(1);
placeAnOrder(2);
placeAnOrder(3);
