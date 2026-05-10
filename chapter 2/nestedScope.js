function main() {
  let x = 10;

  function inside() {
    let y = 20;
    console.log(x); // can access x
  }

  inside();

  // console.log(y); // erro
}