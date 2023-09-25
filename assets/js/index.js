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

//- **Task 3.  Write an object of person with key values as below and print the values of the object not keys**
//     - name, age, country, semester, cms
//         - List of inner object contains (details): contactNumber1 & email1, contactNumber2 & email2, contactNumber3 & email3

# Define the person object with the specified key-value pairs
person = {
    "name": "John Doe",
    "age": 25,
    "country": "United States",
    "semester": 5,
    "cms": "1234567890",
    "details": [
        {"contactNumber1": "555-555-5551", "email1": "john.doe@example.com"},
        {"contactNumber2": "555-555-5552", "email2": "johnd@example.com"},
        {"contactNumber3": "555-555-5553", "email3": "john_doe@gmail.com"}
    ]
}

# Print only the values of the person object
for key, value in person.items():
if key != "details":
print(value)
else:
for contact_info in value:
for contact_key, contact_value in contact_info.items():
print(contact_value)
