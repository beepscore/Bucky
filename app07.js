// Prototypes
// add methods or properties to objects or classes.

function User() {
    this.name = "";
    this.life = 100;

    this.giveLife = function giveLife(targetPlayer) {
        targetPlayer.life += 1;
        console.log(this.name + " gave 1 life to " + targetPlayer.name)
    }
}

var Bucky = new User();
var Wendy = new User();

Bucky.name = "Bucky";
Wendy.name = "Wendy";

Bucky.giveLife(Wendy);
console.log("Bucky: " + Bucky.life);
console.log("Wendy: " + Wendy.life);

// use prototype to add a method to all User instances
// function name doesn't matter, doesn't have to equal prototype name
User.prototype.uppercut = function uppercut(targetPlayer) {
    targetPlayer.life -= 3;
    console.log(this.name + " just uppercutted " + targetPlayer.name)
};

Wendy.uppercut(Bucky);
console.log("Bucky: " + Bucky.life);
console.log("Wendy: " + Wendy.life);

// use prototype to add a property to all User instances
User.prototype.magic = 60;
console.log("Bucky: " + Bucky.magic);
console.log("Wendy: " + Wendy.magic);
