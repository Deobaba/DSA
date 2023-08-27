// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// Input: nums = [1,2,3,1]
// Output: true

// Input: nums = [1,2,3,4]
// Output: false


// function containDuplicate (nums) {
//     let numObject = {}
//     for (let i = 0; i < nums.length; i++){
//         if(Object.hasOwn(numObject,nums[i])){
//           console.log(nums[i])
//           return  true
           
//         }
//     //    else if(numObject.hasOwnProperty(i)){}
//     numObject[nums[i]] = 1
//     }
//     console.log(numObject)
//     return false
// }


// containDuplicate([1,2,1,3])
// containDuplicate([1,2,3])

// function containDuplicate (data){
//   let objEntry = {}
//   data.forEach(element => {
//     console.log(element)
//     if(Object.hasOwn(objEntry,element)){
//       console.log('it got here')
//       return  true
      
//     }
//     else{
//       objEntry[element] = 1
//     }
    
//   });
//   console.log(objEntry)
//   return false
// }
//  let test1 = containDuplicate([1,2,1,3])
// //  let test2 = containDuplicate([1,2,3])
//  console.log(test1,)


let deobaba = {}
deobaba['test'] = 2
deobaba['2']= 3

let baba = Object.hasOwn(deobaba,2)

console.log(deobaba,baba)