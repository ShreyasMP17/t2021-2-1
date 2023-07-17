class Program1{
  constructor(){
    this.addition = function(a,b){
      return a + b;
    };
    this.subtraction = function(a,b){
      return a - b;
    };
    this.multiplication = function(a,b){
      return a * b;
    };
    this.divisioon = function(a,b){
      return a / b;
    };
  }
  performOperation(a,b,typeOfOperation){
    switch(typeOfOperation){
      case "+":
        return this.addition(a,b);
         case "-":
        return this.subtraction(a,b);
         case "*":
        return this.multiplication(a,b);
         case "/":
        return this.division(a,b);
    };
  };
};

const calculator = new Program1();
const a = 20;
const b = 15;
const operation = "-";
const result = calculator.performOperation(a,b,operation);

console.log("Result : " + result);
console.log("a = " + (typeof(a)));
console.log("b = " + (typeof(b)));
console.log("Type of operation : " + (typeof(result)));

