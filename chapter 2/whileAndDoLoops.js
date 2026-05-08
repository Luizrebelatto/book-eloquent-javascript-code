// wrong 
function showNumber0To12(){
    console.log(0)
    console.log(2)
    console.log(4)
    console.log(6)
    console.log(8)
    console.log(10)
    console.log(12)
}

// when you use the structure while, the condition is executed before

function showNumbersWhile(){
    let number = 0;
    while(number <= 12){
        console.log(number)
        number += 2
    }
}

function showNumberWhileCount(){
    let result = 1;
    let count = 0;
    
    while(count <= 10){
        result *= 2;
        count += 1;
    }
    console.log(`result: ${result} - count: ${count}`)
}

// force you to enter a name
function showNameDo(){
    let name;
    do {
        name = prompt("what is your name?")
    } while(!name)
    console.log(name)
}