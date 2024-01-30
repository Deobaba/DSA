// Write a function called `reverseString` that takes in a string and returns the reverse of that string. In this section, we are really focusing on loops without using any built-in methods, so try that first. If you get stuck, you can always use the built-in methods to solve the problem.

// reverseString('hello') // 'olleh'
// reverseString('world') // 'dlrow'
// reverseString('') //

function reverseString (data) {

    if (data.length < 1){
        return data
    }

    let reverseData = []

    for (let i = data.length - 1; i >= 0; i-- ){
        console.log(i)
        reverseData.push(data[i])
        console.log(reverseData)
        
    }

    // console.log(reverseData)

    return reverseData.join('')

}

const test = reverseString('lo')
console.log(test)
