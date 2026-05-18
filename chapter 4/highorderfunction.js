function greatherThan(){
    return num => num > num;
}

let greatherThan10 = greatherThan(10);
console.log(greatherThan10(11)) // true

useEffect(() => {
  console.log("User open screen")
}, [])