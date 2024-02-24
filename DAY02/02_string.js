//String - primitive data type // retrive data from database / API/crm etc
// also help for for validation/ how many options/characters etc
// characters entered in string, can retrieve and check number of characters etc
// stored under a wraper - keep and lock/hide. contents are inside. (wrap of objects)
//reusabilities in one file
// all new keyword/objects store is heap memmory, and all variable store in stack memmory.
/*
Length - property
backtick
charAt
split
indexof
parceInt
includes
toLowercase
touppercase
trim
*/
let username="shynoob" // direct declaration / literal way of declaration //stak memmory
console.log(typeof username); // string // This is one commonly used in JavaScript
// user object for declaration //heap memory
let user=new String ("shynoob"); // new keyword // not used everytime
console.log(typeof user);

//different objects /property (methods) in string//interview question and automation
//1. Count the characters of given string // length - is a property (not method)
console.log(username.length); //7 is the length

//
let productprice = " The discounted price of the product is '200'";
console.log(productprice);
let productprice1 = " The discounted price of the product is \"200\""; //escape sequence
console.log(productprice1);
let deal='Today\'s deal';
console.log(deal);

//2. backtick ` - This will avoid any error , and no need to use escape sequence
let deal1=`Today's deal and the discound is '100' and "50%"`;
console.log(deal1);
// 3. concatination using + and $ in backtick
let price =10000;
console.log (`The price of the deal is ` +price);
console.log (`The value of the deal is ${price} `);

//4. charAt - find the character based on the index
//index start with zero
let browsername="chrome";
console.log(browsername.length);
//lenght 6 and index start with 0.
browsername.charAt(0);
// first indexed character
let firstch=browsername.charAt(0);
console.log(firstch);
// last indexed character
let lastch=browsername.charAt(5); // if i give 6 index, shows NULL value
console.log(lastch);
let lastch1=browsername.charAt(browsername.length-1); // wisely give lenght-1 for last character
console.log(lastch1);
//To get index of a particular charactar
let chposition=browsername.indexOf('c');
console.log (chposition);

//5. split - spliting the string in an array format // Seperate string
console.log(browsername.split()); //[ 'chrome' ]
console.log(browsername.split("")); // [ 'c', 'h', 'r', 'o', 'm', 'e' ]
console.log(browsername.split("h")); //[ 'c', 'rome' ]

let msg = 'Learning java script with string';
console.log (msg.split('n')); //[ 'Lear', 'i', 'g java script with stri', 'g' ]
console.log (msg.split('')); //split based on single character
console.log (msg.split(' ')); // [ 'Learning', 'java', 'script', 'with', 'string' ]

// 6. Slice - get sequence of characters in a string (same like substring)// start and end index
let msg1 = '   Learning java script with string';
let subst=msg1.slice(0,13);
console.log(subst);

// To check the preasent of substring validation
let present=msg1.includes('with');
console.log(present); // true
//uppercase and lower case // camelcase example - browserName
console.log (msg1.toUpperCase());
console.log (msg1.toLowerCase());
//Removing white space - Trim
console.log (msg1.trim());

//7. parseInt  - convert string to integer for manupulation. example below
let ptdprice='price = 1200';
console.log (ptdprice.slice(8,12));  // 1200
let fixprice = ptdprice.slice(8,12)//// select the requred string using slice first
console.log (fixprice+12); // concatnated as string -(output)  120012. This is not the answer we want.
let val=parseInt(fixprice); // convert string to integer
console.log(val+12); // 1212 - expected outcome




















