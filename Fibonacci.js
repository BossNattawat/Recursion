
let fibonacciCache = []
let numbers = []

function fibonacci(n){

    if(n <= 1){
        return n
    }

    if(fibonacciCache[n] != null){
        return fibonacciCache[n]
    }

    let result = (fibonacci(n - 1) + fibonacci(n - 2))
    fibonacciCache[n] = result

    return result

}

let n = 8

for(let i = 0; i < n; i++){
    numbers.push(fibonacci(i))
}

console.log(numbers);