/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  str1=str.toLowerCase();
  str1=str1.replace(/[^a-z]/g, "");
  str2=str.toLowerCase();
  str2=str2.replace(/[^a-z]/g, "");
  split_str1=str1.split("");
  r_split_str1=split_str1.reverse();
  reversed_str1=r_split_str1.join("");
  console.log()
  if(reversed_str1==str2){
    return true;}
    else
    {
      return false;
    }
  return true;
}

module.exports = isPalindrome;
