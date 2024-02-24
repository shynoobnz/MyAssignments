//looping statements - one particalar logic execute multiple times
//for loop - (for (initialization, range, increment)) // when we know range of itiration -
//(I know where to start and end - example 5 rounds)
//while loop- while (condition){} // if we dont know the condition, when to stop, can use while
//do while - do {} while (condition) // i want to rum at least once even through condition is not met

// For loop example - print the number from 1 to 5
for (let i=1; i<=5; i++){  //i++ equals i+1
    console.log(i);
}
// Same code in different sysntax
for (let j=1; j<=5;){  
    console.log(j);
    j++;
}

//While (condition)(logic)
let k=1; //initialize
while (k<=10){ // checking the condition
    console.log(k) //print the value
    k++ // logic
}

// while -unknown condition
let isRaining=true;
while(!isRaining){
    console.log ("keep walking");
}


// do while loop -do execute the code once at least, and then check for the condition.
let israining1=true;
do {

    console.log("Keep Walking"); // executing one time
}
    while (!israining1) // and checking the condition
