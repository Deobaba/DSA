
// Write a function called `arrayIntersection` that takes in two arrays and returns an array containing the intersection of the two input arrays (i.e., the common elements that appear in both arrays).


function intersection(array1,array2){
    let intersection = []

    for (let i = 0; i < array1.length; i++){
        if(array2.includes(array1[i])){
            intersection.push(array1[i])
        }
    }

    return intersection
}

let test = intersection([1,2,3,4,5,6],[1,3,5,6,7])
let test2 = intersection([1, 1, 1, 1, 1], [2, 2, 2, 2, 2])
let test3 = intersection([1, 2, 3, 4, 5], [5, 4, 3, 2, 1])
console.log(test,test2,test3)