//STRINGS//

//Before Value
const userName = "One Piece"

//Show the number of characters in your string with String.length;
console.log(userName.length);

//Show the first index of a word that can be found in your string with String.indexOf() 
console.log(userName.indexOf("n"));

//Show the first character of your string;
console.log(userName.charAt(0));

//Show the last character of your string;
console.log(userName.charAt(8));

//Rendering string values to HTML (After values)

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


  //NUMBERS//

  //Before Value
  let number = 92
  
  //Convert a number to a string with Number.toString();
  console.log("Output : " + number.toString(2));
  //Render it to HTML (After value)
  document.getElementById("number-tostring").innerHTML = number.toString(2);

  //Convert a number to exponential notation with Number.toExponential()
  console.log(number.toExponential(3));
  //Render it to HTML (After value)
  document.getElementById("exponential").innerHTML = number.toExponential(3);

  //Check if a number is an integer with Number.isInteger()
  console.log(Number.isInteger(92));
  //Render it to HTML (After value)
  document.getElementById("integer").innerHTML = Number.isInteger(92);