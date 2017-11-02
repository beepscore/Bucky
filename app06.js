// keyword "this" refers to the object that called it

var Bucky = {
    printFirstName: function () {
        console.log("My name is Bucky");
        console.log(this);
        console.log(this === Bucky);
        // true
    }
}

// printFirstName caller is Bucky,
// in callee printFirstName "this" will refer to caller Bucky
Bucky.printFirstName();

function foo() {
    console.log("Hi from foo");
    // global log is long, comment it out
    // console.log(this);
    console.log(this === global);
}

// default calling context is global
foo();