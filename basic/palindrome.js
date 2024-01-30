// A palindrome  a word, phrase, number, or other sequence of characters which reads the same backward or forward. An example of a palindrome is "madam".


function Palindrome (str) {

    if (str.length < 1){
        return str
    }

    let reverseStr = []

    for(let i = str.length - 1; i >= 0 ; i--){
        reverseStr.push(str[i])
    }

    return reverseStr.join('') === str
}

let test = Palindrome('madam') // true
let test2 = Palindrome('racecar') // true
let test3 = Palindrome('hello')
let test4 = Palindrome('12321')

console.log(test,test2,test3,test4)