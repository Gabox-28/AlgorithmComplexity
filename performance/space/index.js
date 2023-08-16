function Count(n){
    for (let i = 0; i < n; i++){
        console.log(i)
    }
}

function repeat(array){
    let repeated_array = array
    return repeated_array
}

function convertString(array){
    let result = array.map(element => element.toString())
    return result
}

function twoDimensions(value){
    let x = new Array(value)
    for (let i = 0; i < value; i++) {
        x[i] = new Array(value).fill(0)
    }

    return x
}

console.log(twoDimensions(5))