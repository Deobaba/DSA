// Write a function called `displayLikes` that takes in an array of names and returns a string of who likes the post.

// The function should return a string formatted as follows:

// - If no one likes it, it should return `'no one likes this'`
// - If one person likes it, it should return `'{name} likes this'`
// - If two people like it, it should return `'{name1} and {name2} like this'`
// - If three people like it, it should return `'{name1}, {name2} and {name3} like this'`
// - If more than three people like it, it should return `'{name1}, {name2} and {x} others like this'`

function displayLikes (data) {
    // console.log(data.length)
    let message
    if(data.length === 0){
        message = "no one likes this"
        return message
    }
    else if (data.length === 1){
        message = `${data[0]} likes this `
        return message
    }
    else if (data.length === 2){
        message = `${data[0]} and ${data[1]} like this `
        return message
    }
    else if (data.length === 3){
        message = `${data[0]}, ${data[1]} and ${data[2]} like this `
        return message
    }
    else if (data.length >= 4){
        message = `${data[0]}, ${data[1]} and ${data.length - 2} like this `
        return message
    }
}


let test = displayLikes([]) // 'no one likes this'
let test2 = displayLikes(['Peter']) // 'Peter likes this'
let test3 = displayLikes(['Jacob', 'Alex']) // 'Jacob and Alex like this'
let test4 = displayLikes(['Max', 'John', 'Mark']) // 'Max, John and Mark like this'
let test5 = displayLikes(['Alex', 'Jacob', 'Mark', 'Max']) // 'Alex, Jacob and 2 others like this'
let test6 = displayLikes(['Alex', 'Jacob', 'Mark', 'Max', 'Jill']) // 'Alex, Jacob and 3 others like this'

console.log(test6)