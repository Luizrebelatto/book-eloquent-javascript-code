function drawTriangle(){
    for(let i=0; i <= 7; i++){
        console.log("x".repeat(i))
    }
}

function drawTriangleArg(leaves){
    for(let i=0; i <= leaves; i++){
        console.log("x".repeat(i))
    }
}

function drawTriangle(){
    let result = ""
    for(let i=0; i <= 7; i++){
        result += "#"
        console.log(result)
    }
}
