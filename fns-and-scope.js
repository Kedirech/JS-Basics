//Once you complete a problem, open up Chrome and check the answer in the console.


var name = 'Tyler';
//Create a function called isTyler that accepts name as it's only argument.
//If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.

  //Code Here
function isTyle(name){
  return (name.toLowerCase() === 'tyler');
}


//Next problem



//Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.


  //Code Here

function getName(){
  return prompt("Give me your name... It shall be mine!!!");
  )
}

//Next Problem



//Create a function called welcome that uses your getName function you created in the previous problem to get the users name,
//then alerts "Welcome, " plus whatever the users name is.

  //Code Here

function welcome{
  var name = getName();
  alert("Welcome, " + name);
}


//Next problem




//What is the difference between arguments and parameters?

  //Answer Here
  //parameters are the names that a function uses to refer to it's arguments.  The arguments are the actual values passed in for the parameters.

//Next problem



//What are all the falsy values in JavaScript and how do you check if something is falsy?


  //Answer Here
  // The explict false,
  // false
  // The emptyish falsey values 
  // '', 0,
  // The errory falsy 
  // null, undefined, NaN 



//Next Problem



//Create a function called myName that returns your name

  //Code Here

  function myName(){
    return 'Brack';
  }

//Now save the function definition of myName into a new variable called newMyName

  //Code Here
  var newMyName = myName;

//Now alert the result of invoking newMyName

  alert(newMyName());

//Next problem



//Create a function called outerFn which returns an anonymous function which returns your name.

  //Code Here
  function outerFn(){
    return function (){
      retrun 'Brack';
    }
  }

//Now save the result of invoking outerFn into a variable called innerFn.

  //Code Here
  var innerFn = outerFn();

//Now invoke innerFn.

var catchInner = innerFn();
//may as well put the result somewhere.  I hate invoking 
