function square(x) {
    return x * x;
}

const square1 = (x) => { return x * x };
const square2 = x => x * x;

// callstack

function wakeUp() {
  brushTeeth();
}

function brushTeeth() {
  drinkCoffee();
}

function drinkCoffee() {
  console.log("coffee");
}

wakeUp();

// wakeUp -> brushTeeth -> drinkCoffee 