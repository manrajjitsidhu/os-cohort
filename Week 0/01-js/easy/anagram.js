/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
str1=str1.toLowerCase();
str2=str2.toLowerCase();
split_str1=str1.split("");
r_split_str1=split_str1.sort();
sorted_str1=r_split_str1.join("");
split_str2=str2.split("");
r_split_str2=split_str2.sort();
sorted_str2=r_split_str2.join("");
console.log()
if(sorted_str1==sorted_str2){
  return true;}
  else
  {
    return false;
  }
}
module.exports = isAnagram;
