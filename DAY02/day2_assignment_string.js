/*
Given a string s consisting of words and spaces, return the length of the last word in the string.
 
Example 1:
 
Input: s = "Hello World"
Output: 5
Explanation: The last word is "World" with length 5.
 
Example 2:
 
Input: s = "   fly me   to   the moon  "
Output: 4
Explanation: The last word is "moon" with length 4.

*/
let str;
function lengthOfLastword(str){
    let result;
    if(str.length==0){
       console.log("Not a string");
    }else{
    let strArray=str.trim().split(" ");
    let lastString=strArray[strArray.length-1]
    result=lastString.length;
    console.log(`The last word is "${lastString}" with length ${result}`);
    }
   

}
lengthOfLastword("Hello World");  //Fist Example
lengthOfLastword( "   fly me   to   the moon  "); //Second example
lengthOfLastword("");

/*
Example 3: 

Write a function to check if two strings are anagrams.

 Input: isAnagram('listen', 'silent')
 Output: true
 Input: isAnagram('hello', 'world') 
 Output: false
 Explanation: An anagram is when you mix up the letters of a word to make a new one, using all the letters.
 
*/

console.log("Anagram")
let str1,str2;
function isAnagram(str1,str2){
    console.log(`Given strings are "${str1}" and "${str2}"`);
    let sortstr1=str1.toLowerCase().split("").sort().join();
    let sortstr2=str2.toLowerCase().split("").sort().join();
    if(sortstr1==sortstr2){
        console.log(true);
    }else{
        console.log(false);
    }
}

isAnagram('listen', 'silent');
isAnagram('hello', 'world');


/*
If the given string and reverse string is same --> palindrome

Objective: If the given string is palindrome

hints:

1) use the above logic to reverse the string
2) if the reverse string === original string --> true else the false

*/

console.log("Palindrome")
let rstr;
function reverseString(rstr){
    console.log(`Given string "${rstr}"`)
    let strRevese="";
    rstr=rstr.toLowerCase();
    for(let i=rstr.length-1;i>=0;i--){
        strRevese=strRevese+rstr.charAt(i);
    }
    if(rstr===strRevese){
        console.log(true)
    }else
    console.log(false);

}
reverseString("malayalam");
reverseString("english");
