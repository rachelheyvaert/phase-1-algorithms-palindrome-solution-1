function isPalindrome(word) {
  let length = word.length
  let start =  word.substring(0, Math.floor(length/2)).toLowerCase()
  let end = word.substring(length - Math.floor(length/2)).split('').reverse().join('')
   return (start === end) }

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
