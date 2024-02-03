

// Write a function called `removeDuplicates` that takes in an array and returns a new array with duplicates remove

function removeDuplicates(data){
    let nonDupliacte = []

    for (let i = 0; i < data.length; i++){
        if(!nonDupliacte.includes(data[i])){
            nonDupliacte.push(data[i])
        }
        
    }

    return nonDupliacte
}

let test = removeDuplicates([1,2,2,1,3,3])
console.log(test)