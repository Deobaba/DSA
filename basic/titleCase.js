// Write a function called `titleCase` that takes in a string and returns the string with the first letter of each word capitalized.

// titleCase("I'm a little tea pot"); // I'm A Little Tea Pot
// titleCase('sHoRt AnD sToUt'); // Short And Stout
// titleCase('HERE IS MY HANDLE HERE IS MY SPOUT'); // Here Is My Handle Here Is My Spout

function titleCase (sentence){

    let sentencesplit = sentence.split(' ')

    for (let i = 0; i < sentencesplit.length; i++){
        sentencesplit[i] = sentencesplit[i][0].toUpperCase() + sentencesplit[i].slice(1)
    }

    return sentencesplit.join(' ')

}

let test = titleCase("I'm a little tea pot")

console.log(test)