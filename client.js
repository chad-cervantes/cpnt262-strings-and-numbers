// const alertMessage = "This is a website"; 
// alert(alertMessage);

// const userInput = prompt("Please Enter Text");

// console.log(userInput);
// document.querySelector("#user-input").innerHTML = userInput;

//STRINGS//
const userName = "One Piece"

//Show the number of characters in your string with String.length;
console.log(userName.length);

//Show the first index of a word that can be found in your string with String.indexOf() 
console.log(userName.indexOf("n"));

//Show the first character of your string;
console.log(userName.charAt(0));

//Show the last character of your string;
console.log(userName.charAt(8));

//Rendering string values to HTML

  //Username
  document.getElementById("one-piece").innerHTML = userName;

  //Number of characters
  document.getElementById("length").innerHTML = userName.length;

  //First index of a word
  document.getElementById("first-index").innerHTML = userName.indexOf("n");

  //First character
  document.getElementById("first-ch").innerHTML = userName.charAt(0);

  //Last character
  document.getElementById("last-ch").innerHTML = userName.charAt(8);


  //NUMBER//
  let number = 92;

  //Convert a number to a string with Number.toString();
  console.log("Output : " + number.toString(2));