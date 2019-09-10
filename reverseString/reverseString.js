const reverseString = function(str) {
let split = str.split("");
reversedArr = split.reverse();
reversedString =reversedArr.join("");
return reversedString
}

module.exports = reverseString
