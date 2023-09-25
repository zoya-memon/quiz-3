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


// Task 2. Print values of array using map function along with index as following output (”Value at index 1 is 10”, …)
const arr2 = [9,8,7,6,5,4,3,2,1]
arr2.map((value, index)=> {
    console.log(`Value at index ${index} is ${value}`)
})