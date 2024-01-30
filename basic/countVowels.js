// Write a function called `countVowels` that takes in a string and returns the number of vowels in the string.


function countVowels (str){
    let count = 0

     str = str.toLowerCase()

    for(let i = 0; i <= str.length; i++){
    
        if(str[i] === "a" || str[i] === "e"  || str[i] === "i" || str[i] === "o" || str[i] === "u"  ){

            count = count + 1

        }
    }
    return count
}

let test = countVowels('Hello, World!')
let test2 = countVowels('JavaScript')
let test3 = countVowels('OpenAI Chatbot')
let test4 = countVowels('Coding Challenge')

console.log(test,test2,test3,test4)