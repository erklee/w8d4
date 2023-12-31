Function.prototype.inherits = function (Parent) {
    function Surrogate() {}
    Surrogate.prototype = Parent.prototype;
    this.prototype = new Surrogate();
    this.prototype.contructor = this;
}

function MovingObject () {}

function Ship () {}
Ship.inherits(MovingObject);

function Asteroid () {}
Asteroid.inherits(MovingObject);

const ship = new Ship();
const asteroid = new Asteroid();

// console.log(ship instanceof MovingObject); // true
// console.log(asteroid instanceof MovingObject); // true


Function.prototype.inherits = function (Parent) {
    this.prototype = Object.create(Parent.prototype);
    this.prototype.constructor = this;
};
