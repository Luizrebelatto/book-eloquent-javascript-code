// A closure occurs when a function is defined inside another function and has access to the variables of the inner function

function createCount(){
    let number = 0;

    function increment(){
        number++;
        return number;
    }

    return increment;
}

const increment = createCount();

console.log(increment())
console.log(increment())
console.log(increment())
