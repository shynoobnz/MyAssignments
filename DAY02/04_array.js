// Array - collection of items of similar/different data types / its an Object
//Dynamic array - increase or decrese size/add/remove the elements
//array index start with 0
// declare a Array
let browsername=[];
console.log (typeof browsername);  //object
browsername =['chrome','IE','Safari'];
console.log (browsername); //[ 'chrome', 'IE', 'Safari' ]
// To get number of elements in the array
console.log (browsername.length); //3
console.log (browsername[2]); //safari
console.log (browsername[4]); //Undefined

//adding array elemets and an empy array added. // dynamic array
browsername [4]='mac';
console.log (browsername); //[ 'chrome', 'IE', 'Safari', <1 empty item>, 'mac' ]
browsername [3]='inex';
console.log (browsername); //[ 'chrome', 'IE', 'Safari', 'inex', 'mac' ]

//to add/remove elements at the end or start
// push - Add items at the end
browsername.push("chromium");
console.log (browsername);  // [ 'chrome', 'IE', 'Safari', 'inex', 'mac', 'chromium' ]
//pop - Remove elements from the end
browsername.pop();
console.log (browsername); //[ 'chrome', 'IE', 'Safari', 'inex', 'mac' ]
//unshift - Add element at the start of the array
browsername.unshift('chromium');
console.log (browsername); // [ 'chromium', 'chrome', 'IE', 'Safari', 'inex', 'mac' ]
//replace a value 
browsername[2]='Webkit';
console.log (browsername); //[ 'chromium', 'chrome', 'Webkit', 'Safari', 'inex', 'mac' ]
//shift - remove first element from the array.
browsername.shift();
console.log (browsername); //[ 'chrome', 'Webkit', 'Safari', 'inex', 'mac' ]

//Remove elements from array . nth element.
let newArray = browsername.slice(0, 1);
console.log (newArray); //

// join -connect all the elments from the array //array to string
let browser1=['comma','ffsh','gdhfg']
let fic = browser1.join("-");
console.log (fic); //comma-ffsh-gdhfg

//  //string to array
let browservalues=fic.split("-");
console.log (browservalues); / //[ 'comma', 'ffsh', 'gdhfg' ]

// Sort - sort array elements in acscenting order
let num = [3,2,7,5,8,4];
num.sort();
console.log(num); //[ 2, 3, 4, 5, 7, 8 ]

// copy one array content to another array // ...arrayname  > spread syntax. copy array to another.
let a1=[1,2,3,4];
let a2=[...a1, 5,6,7,8];
console.log(a2);
/*[
    1, 2, 3, 4,
    5, 6, 7, 8
]*/

// Merge - another way to merge 2 arrays
let c=[1,2,3,4];
let d=[5,6,7,8];
let merge=c.concat(d); // This is the syntax for merge the arrays.
console.log(merge); // same answer
/*[
    1, 2, 3, 4,
    5, 6, 7, 8
]*/

// Hetrogenious array
let mixedArray=[1,2,3,'chrome','edge',true, [3,4,5], 2.5];
console.log (mixedArray.length); //8
console.log(mixedArray[6]); //[ 3, 4, 5 ]











