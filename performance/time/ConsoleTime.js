function Count(n){
    for (let i = 0; i < n; i++){
        console.log(i)
    }
}

console.time('Algorithm duration')
Count(5)
console.timeEnd('Algorithm duration')

