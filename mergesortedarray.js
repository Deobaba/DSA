function compare(a,b){
    // if(a === undefined){
    //     return false
    // }
    if (a < b){
        return true
    }
    else {return false}
}

// let test = compare(1,1)
// console.log(test)

function mergeSortedArray (array1, array2){
    let mergedArray = []
    let array1index = 0
    let array2index = 0

    while(array1index < array1.length || array2index < array2.length){
        if(compare(array1[array1index],array2[array2index])){
            mergedArray.push(array1[array1index])
            array1index =array1index + 1
        }
        else{
            mergedArray.push(array2[array2index])
            array2index = array2index + 1
        }
    }

    return mergedArray
}

let test = mergeSortedArray([1,3,4,5,6,6],[1,2,7])

console.log(test)