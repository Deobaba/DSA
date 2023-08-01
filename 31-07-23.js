// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// Input: nums = [1,2,3,1]
// Output: true

// Input: nums = [1,2,3,4]
// Output: false


function containDuplicate (nums) {
    let numObject = {}
    for (let i = 0; i < nums.length; i++){
        if(Object.hasOwn(numObject,nums[i])){
          return  console.log(true)
           
        }
    //    else if(numObject.hasOwnProperty(i)){}
    numObject[nums[i]] = 1
    }
    return console.log(false)
}


containDuplicate([1,2,1,3])
containDuplicate([1,2,3])