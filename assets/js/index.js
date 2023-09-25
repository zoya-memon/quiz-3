// Task 1. Write a function that can calculate the average of a array of values (numbers)
function calAvg(arr){
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum+=arr[i]
    }
    return sum/arr.length
}
const arr = [1,2,3,4,5,6,7,8,9]
console.log(calAvg(arr))