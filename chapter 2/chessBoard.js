function chessBoardSizeFixed(){
    const size = 8;

    for (let line = 0; line < size; line++) {
        let chess = "";

        for (let column = 0; column < size; column++) {
            if ((line + column) % 2 === 0) {
                chess += " ";
            } else {
                chess += "#";
            }
        }

        console.log(chess);
    }
}

function chessBoardDynamicSize(size){
    for (let line = 0; line < size; line++) {
        let chess = "";

        for (let column = 0; column < size; column++) {
            if ((line + column) % 2 === 0) {
                chess += " ";
            } else {
                chess += "#";
            }
        }

        console.log(chess);
    }
}
