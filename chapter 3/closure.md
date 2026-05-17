# Closure

### whats is?
- functions that draw on the context of other functions
- function that remembers the environment and the lexical scope created

### Use Cases
- setTimeout
- setInterval
- promises

### Examples

```javascript
function externalFunction() {
  const nome = "Luiz";

  function internalFunction() {
    console.log(nome);
  }

  return internalFunction;
}

const fn = externalFunction();

fn();
```

#### Counter
```javascript
function createCounter() {
  let count = 0;

  return function () {
    count++;
    return count;
  };
}

const count = createCounter();

console.log(createCounter()); // 1
console.log(createCounter()); // 2
console.log(createCounter()); // 3
```