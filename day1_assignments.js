/*
1. Create a function named `checkNumberType` that takes a number as a parameter.

2. Use `if` to check if the number is greater than 0.
   Use `else if` to check if the number is less than 0.
   Use `else` to handle the case when the number is not greater than 0 or less than 0 
   (i.e., when it is zero).

3. Return the corresponding string value for each case.

4. Declare and initialize the variable

5. Call the function and print the result

*/

let number;

function checkNumberType (number){

    if (number>0){
        return "number is greater than zero";
    }else if (number<0){
        return "number is less than zero";
    }else {
        return "Number is zero";
    }
}
console.log (checkNumberType(5));
console.log (checkNumberType(-1));
console.log (checkNumberType(0));



/*
1. Create a function named `checkOddOrEven` that takes a number as a parameter  

2. Use an `if` statement to check if the number is divisible by 2 
    Hint: if the remainder when divided by 2 is 0, then the num is even

3. Declare and initialize the variable  

4. Call the function and print the result
*/

let od;
function checkOddorEven(od){
if(od%2==0){
return "Number is Even";
}else {
return "Number is Odd";
}
}
console.log (checkOddorEven(2));



/*
1. Create a function named `calculateGrade` that takes a student's score as a parameter.
2. Use `switch` statement inside the function - 
   - Use a `switch` statement with the condition `true`.
   - Use `case` statements to check different score ranges and return the corresponding grade.

3. Declare and initialize the variable
4. Call the function and print the result
*/

let score;
function calculateGrade(score){
    switch (true) {
        case (score>=90 && score<=100):
            return "A grade";
        case (score>=80 && score<=90):
            return "B grade";

        case (score>=60 && score<=80):
            return "C grade";

        case (score>=50 && score<=60):
            return "D grade";

        case (score>=40 && score<=50):
            return " Pass";
        default: 
            return "Fail";
    }

}
console.log (calculateGrade(91));
console.log (calculateGrade(85));
console.log (calculateGrade(77));
console.log (calculateGrade(63));
console.log (calculateGrade(51));
console.log (calculateGrade(43));
console.log (calculateGrade(33));



