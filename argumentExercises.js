function sum () {
    let total = 0;
    for (let i = 0; i < arguments.length; i++) {
        total += arguments[i]
    }

    return total; 
};

function sum1 (...args) {
    let total = 0;
    for (let i = 0; i < args.length; i++) {
        total += args[i]
    }
}

Function.prototype.myNewBind = function(context) {
    let func = this;
    let bArgs = Array.from(arguments).slice(1);
    return function _bFunc() {
        const cArgs = Array.from(arguments);
        return func.apply(context, bArgs.concat(cArgs));
    };
};

class Cat {
    constructor(name) {
      this.name = name;
    }
  
    says(sound, person) {
      console.log(`${this.name} says ${sound} to ${person}!`);
      return true;
    }
  }
  
  class Dog {
    constructor(name) {
      this.name = name;
    }
  }
  
  const markov = new Cat("Markov");
  const pavlov = new Dog("Pavlov");
  
//   markov.says("meow", "Ned");
// markov.says.myNewBind(pavlov, "meow", "Kush")();
// markov.says.myNewBind(pavlov)("meow", "a tree");
// markov.says.myNewBind(pavlov, "meow")("Markov");

const notMarkovSays = markov.says.myNewBind(pavlov);
notMarkovSays("meow", "me");