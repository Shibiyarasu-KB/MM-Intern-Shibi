age = 18;

// Conditional statement
if ( age >= 18 ) {  //if - checks the condition 
    console.log("You are eligible to vote.");
}else { //else part - executed when if condition is not satisfied
    console.log("Sorry , you are not eligible to vote.");
}

//looping statements

/*

1 . for  loop
2 . while loop
3 . do while

*/

//for loop
for (i=1; i<10;i++){    //iterates the task until the condition satisfies
    console.log(i);
    continue; //continue statement is used to iterate the above statements
}


//while loop

while(true){    //runs if the condition is true
    console.log("While loop in JS");
    break;
}


//do while

do{
    console.log("Do while in JS");
    i++;
}while(i==10); //the task iterated , and checked to for next iteration ( condition )

c=2
switch(c){//switch case
    case 1:
        console.log("Case 1");
        break;    //braek statement - helps to stop the iteration and move on
    case 2:
        console.log("Case 2");
        break;
    default:    //default - executed if none of the case is satisfied
        break;
}


//with statemet



let profile = {
    firstName: 'Shibiyarasu',
    lastName: 'K B',
    age: 19
};

// Accessing properties without the with statement

console.log(profile.firstName); 
console.log(profile.lastName); 
console.log(profile.age);       

// Accessing properties with the with statement

with (profile) {
    console.log(firstName);  
    console.log(lastName);   
    console.log(age);        
}



//for in loop

console.log("Profile details:");
for (i in profile) {    //access all single elements in a datastructure
    console.log(i+ ': ' + profile[i]);
}



// functions

function techie(tech){  // function declaration
    if (arguments.length===0) {
        console.log("Hello , your argument is empty!")
    }else{
        console.log("Hello "+tech);
    }
}

//function call

techie();   //non parameterized function
techie('shibiyarasu');  // parameterized function

// Function overloading is not directly supported in JavaScript like in some other languages such as Java or C++


