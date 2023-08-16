function Count(n){
    for (let i = 0; i < n; i++){
        console.log(i)
    }
}

let initialTime = performance.now()
Count(5)
let finalTIme = performance.now()

console.log('The algorithm has lasted', finalTIme - initialTime, 'ms')
