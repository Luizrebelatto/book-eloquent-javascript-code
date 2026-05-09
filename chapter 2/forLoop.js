function showEvenNumer(){
    // init | conditional | increment
    for(let num = 0; num <= 12; num += 2){
        console.log(num)
    }
}

function showResult(){
    let result = 1;
    for (let counter = 0; counter < 10; counter += 1){
        result += 1
    }
}

function testBreak(){
    for(let current = 20; ; current = current + 1){
        if(current % 7 === 0){
            break;
        }
    }
}