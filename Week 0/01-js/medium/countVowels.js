/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  let count=0;
    str=str.toLowerCase()
    split=str.split("");
    console.log(split);
    for(let i =0;i<split.length;i++){
      if(split[i]=='a' || split[i]=='e'|| split[i]== 'i' || split[i]== 'o' || split[i]== 'u'){
        count+=1;
      }
    }
    return count;
}

module.exports = countVowels;