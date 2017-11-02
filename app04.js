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
