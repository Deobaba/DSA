// In this challenge, you will write a function called `fizzBuzzArray` that takes in a number and returns an array. The array should contain all the numbers from 1 to the number passed in. However, if the number is divisible by 3, you should replace the number with "Fizz". If the number is divisible by 5, you should replace the number with "Buzz". If the number is divisible by both 3 and 5, you should replace the number with "FizzBuzz".

function fizzbuzz (data){

    let fizzbuzz = []

    for (let i = 0; i < data.length ; i++){
        if(data[i]% 3 == 0 ){
            fizzbuzz.push('fizz')
        }
        else if(data[i]%5 == 0){
            fizzbuzz.push('buzz')
        }
        else{
            fizzbuzz.push(data[i])
        }
    }

    return fizzbuzz
}

let test = fizzbuzz([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15])
console.log(test)