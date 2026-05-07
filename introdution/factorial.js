function factorial(n){
    if(n === 0) {
        return 1
    } else {
        return factorial(n - 1) * n
    }
}

factorial(8) // 40320
factorial(2) // 2
factorial(0) // 1
factorial(5) // 120