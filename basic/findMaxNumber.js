// Write a function called `findMaxNumber` that takes in an array of numbers and returns the largest number in the array.


// example [1,2,3,4,5,6,7,8,9,10]

// solution 1
function findMaxNumber (data) {
    let max = data[0]

    for (let i = 1; i <= data.length; i++){
        if(max < data[i]){
            max = data[i]
        }
    }

    return max
}

// solution 2

function findMaxNumber2 (data){
    let max = Math.max(...data)
    return max
}



let test = findMaxNumber([1,11,4,34,11,7,8,9,21])
let test2 = findMaxNumber2([1,11,4,5,11,7,8,9,21])
console.log(test,test2)
