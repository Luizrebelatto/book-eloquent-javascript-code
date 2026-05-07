function range(){
    let total = 0;
    let count = 0;
    while(count <= 10){
        total += count
        count += 1
    }
    return total;
}

range() // 55

// total: 0 - count: 1
// total: 1 - count: 2
// total: 3 - count: 3
// total: 6 - count: 4
// total: 10 - count: 5
// total: 15 - count: 6
// total: 21 - count: 7
// total: 28 - count: 8
// total: 36 - count: 9
// total: 45 - count: 10
// total: 55 - count: 11