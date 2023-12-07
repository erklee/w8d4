// function sum () {
//     let total = 0;
//     for (let i = 0; i < arguments.length; i++) {
//         total += arguments[i]
//     }

//     return total; 
// };

function sum1 (...args) {
    let total = 0;
    for (let i = 0; i < args.length; i++) {
        total += args[i]
    }
    return total;
}

// console.log(sum1(1, 2, 3, 4) === 10);

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

// const notMarkovSays = markov.says.myNewBind(pavlov);
// notMarkovSays("meow", "me");

function curriedSum (numArgs) {
    let numbers = [];

    function _curriedSum (num) {
        numbers.push(num);

        if (numbers.length === numArgs) {
            let total = 0;

            for (let i = 0; i < numbers.length; i++ ) {
                total += numbers[i];
            }
            return total;
        } else {
            return _curriedSum;
        }
    }
    return _curriedSum;
}
// const sum = curriedSum(4);
// console.log(sum(5)(30)(20)(1));

Function.prototype.curry = function (numArgs) {
    let args = [];
    let func = this;

    function _curriedFunc(arg) {
        args.push(arg);
        
        if (args.length === numArgs) {
            return func(...args);
        } else {
            return _curriedFunc;
        }
        
    }
    return _curriedFunc;
}

Function.prototype.curry1 = function (numArgs) {
    let args = [];
    let func = this;

    function _curriedFunc(arg) {
        args.push(arg);
        
        if (args.length === numArgs) {
            return func.apply(null, args);
        } else {
            return _curriedFunc;
        }
        
    }
    return _curriedFunc;
}
