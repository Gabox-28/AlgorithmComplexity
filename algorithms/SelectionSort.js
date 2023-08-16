function selectionSort(array) {
    let length = array.length // O(1)

    for (let i = 0; i < length; i++) { // O(n^2)
        let minimum = i // O(1)
        for (let j = i + 1; j < length; j++) { // O(n)
            if (array[j] < array[minimum]) { // O(1)
                minimum = j // O(1)
            }
        }
        if (minimum !== i) { // O(1)
            let temp = array[i] // O(1)
            array[i] = array[minimum] // O(1)
            array[minimum] = temp // O(1)
        }
    }
    return array // O(1)
}