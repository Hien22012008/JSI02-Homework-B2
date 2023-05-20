//Bài 1
const arr1 = [1, 2, 4, 5, 6]
const arr2 = [1, 6, 8, 9, 0]

const Arr1 = arr1.concat(arr2)

var Arr = Arr1.filter((allElementObject) => [1, 6].includes(allElementObject))

console.log(Arr)

//Bài 2
const arr = [1,54,6,7]
let newArr = arr.map(length => length + 5)

console.log(newArr)
