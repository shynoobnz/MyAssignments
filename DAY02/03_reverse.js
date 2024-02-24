// classroom assignment - REVERSE A STRING
//loop in reverse
// for (i=lenght of the string; i>0;i--)

//Using loop statement:
let str="vidhya";
function reverseString(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        //reversed += str[i];
        reversed=reversed+str[i];
           }
    console.log("reversed string is " +reversed);
}
reverseString(str);

// Using Split statement:

let fname='kayathri';
let fn=fname.split("");
let rstring="";
function  reversestring()
{
for(let i=fn.length-1;i>=0;i--)
{
     rstring= rstring+ fn[i];
  
}
console.log("reversed string is  " + rstring);
}
reversestring()


