
//TOdo ==============     Chapter 17 to 20 ========================




//? Q1

// var arr =[[]];

// //?   Q2

// var arr1 = [[0,1,2,3], [1,0,1,2], [2,1,0,1]];
//  for(i=0; i < arr1.length; i++){

//    innerArr = arr1[i];
//    console.log(innerArr);

//  }

//  //?   Q3

// var counting = [1,2,3,4,5,6,7,8,9,10];
// for(i=1; i<=counting.length; i++){
//     console.log(i);
// }

//?  Q4

// var table = parseInt(prompt("Enter a number to show its multiplication table"));
// var length2 = prompt("Enter length multiplication table");
// for(i=1; i<=length2.length; i++){
//     lg = length2[i];
//     console.log(table + " x "+ [i] + " = " +table*lg);
// }

//? Q5

// var fruits = ["apple", "banana", "mango", "Orange", "Strawberry"];
// for(i=0; i<fruits.length; i++ ){
//     var frt = fruits[i];
//     console.log("Element at index "+ i + " is "+ frt);
// }

//? Q6


//   var counting = [];
//   var reverseCounting = [];
//   var even = [];
//   var odd = [];
//   var series = [];

//   for (let i = 1; i <= 20; i++) {
//     counting.push(i);
//     reverseCounting.unshift(i);
//     if (i % 2 === 0) {
//       even.push(i);
//       series.push(i + "k");
//     } else {
//       odd.push(i);
//     }
//   }
//   document.write( "<b>Counting:</b> <br> " + counting);
//   document.write(  "<br> <b>Reverse counting:</b> <br>"  +  reverseCounting );
//   document.write(  "<br><b>Even:</b> <br>" +even);
//   document.write(  "<br><b>Odd:</b> <br>"  +odd);
//   document.write( "<br><b>series:</b> <br>"  + series);

//? Q7

//     var bakeryProduct = ["cake", "apple pie", "cookie", "chips", "patties"];
//     var Input2 = prompt("Welcome to Bakery.What do you want to order sir/ma'am?");
//     var toChange = false;
//     for( i=0; i<bakeryProduct.length; i++){
//         var bkr = bakeryProduct[i];
//         if( bkr === Input2){
//             console.log("cookie is available at index "+ i + " in our bakery");
//             toChange = true;
//         }
//     }

//    if(toChange === false){
//     console.log("we are sorry "+Input2+" is not available in our bakery"); 
//    }

//? Q8

// var a = [24, 53, 78, 91, 12];
// console.log(a);
// for(i=0; i<a.length; i++){
//     var b = a[i];
//     if(b>90){
//         console.log("The largest number is "+b);
//     }
// }

//? Q9

// var a = [24, 53, 78, 91, 12];
// console.log(a);
// for(i=0; i<a.length; i++){
//     var c = a[i];
//     if(c<13){
//         console.log("The Smallest number is "+c);
//     }
// }

//? Q10

// for (let i = 1; i <= 100; i++) {

//     if (i % 5 === 0) {
//       console.log(i);
//     }
//   }


//TOdo ===============   Chapter 21 to 25 ====================

//?  Q1

// var firstName = prompt("Please enter your first name:");

// var lastName = prompt("Please enter your last name:");

// var fullName = firstName + " " + lastName;

// console.log("Hello, " + fullName + "! Welcome!");

//? Q2

// var favouriteMobile = prompt("Write your favourite mobile phone model");

// var value = favouriteMobile.length;
// console.log("My Favourite phone is "+favouriteMobile);
// console.log("Length of string is "+value);

//?  Q3

// var word = "Pakistani";
// var index = word.indexOf("n");
// document.write("The index of 'n' in the word 'Pakistani' is: "+index);

//? Q4

// var word2 = "Hello World"
// var index2 = word2.lastIndexOf("l");
// document.write("The index of 'l' in the word Hello World is: "+index2);

//? Q5

// var char = "Pakistani";
// var index3 = char.charAt(3);
// document.write("The character at index 3: "+index3);

//? Q6


// var firstName = prompt("Please enter your first name:");

// var lastName = prompt("Please enter your last name:");

// var fullName = firstName.concat(" ", lastName);  

// console.log("Hello, " + fullName + "! Welcome!");

//? Q7

// var orignalWord = "Hyderabad";
// var replaceWord = orignalWord.replace("Hyder","Islam");
// document.write("Orignal Word: "+ orignalWord + "<br>");
// document.write("After replacement: "+replaceWord);

//? Q8

// var orignalString = "This is an example and another example and yet another example.";
// var replaceString = orignalString.replace(/and/g, "&");

// document.write("Original String: " + orignalString + "<br>");
// document.write("After Replacement: " + replaceString);

//? Q9

// var stringNumber = "472";
// var convertedNumber = parseInt(stringNumber);
// document.write("Value: "+ stringNumber+ "<br>");
// document.write("Type "+ typeof stringNumber + "<br>");
// document.write("Value: "+convertedNumber+ "<br>");
// document.write("Type "+ typeof convertedNumber + "<br>");

//? Q10 

// var userInput = prompt("Please enter some text");
// var capitalLetters = userInput.toUpperCase();
// document.write("Orignal Input: "+ userInput + "<br>");
// document.write("Capialize Input: " + capitalLetters);

//? Q11

// var userInput = prompt("Please enter a sentence:");

// var words = userInput.split(' ');

// for (var i = 0; i < words.length; i++) {
//   var word = words[i];
//   words[i] = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
// }

// var titleCaseInput = words.join(' ');

// document.write("Original Input: " + userInput + "<br>");
// document.write("Title Case Input: " + titleCaseInput);

//? Q12

// var num = 35.36;
// var numString = num.toString().replace(".","");
// document.write("Number "+num + "<br>");
// document.write("Ressult "+numString);

//? 13

// var userName = prompt("Username: ");
// for (var i = 0; i < userName.length; i++) {
//     if (userName.charCodeAt(i) === 33 || userName.charCodeAt(i) === 44 || userName.charCodeAt(i) === 46 || userName.charCodeAt(i) === 64) {
//         alert("Please Enter a Valid User Name")
//     }
// }



//? Q14

// var bakeryProduct = ["cake", "apple pie", "cookie", "chips", "patties"];
//     var Input2 = prompt("Welcome to Bakery.What do you want to order sir/ma'am?");
//     var toChange = false;
//     for( i=0; i<bakeryProduct.length; i++){
//         var bkr = bakeryProduct[i];
//         if( bkr === Input2){
//             console.log("cookie is available at index "+ i + " in our bakery");
//             toChange = true;
//         }
//     }

//    if(toChange === false){
//     console.log("we are sorry "+Input2+" is not available in our bakery");
//    }

//? Q15

// var password = prompt("Enter the password");

// document.write(password + "<br>");
// var count = 0;

// if (password.length >= 6) {
//     for (var i = 0; i < password.length; i++) {
//         const charCode = password.charCodeAt(i);
//         if ((charCode >= 48 && charCode <= 57) || (charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)) {
//             count += 1;
//         }
//     }
//     if (count !== password.length) {
//         document.write("Please Enter a Valid Password<br>Password should contain Alphabets and Numbers");
//     }
//     else if (password.charCodeAt(0) >= 48 && password.charCodeAt(0) <= 57) {
//         document.write("Please Enter a Valid Password<br>Password Cannot begin with a Number");
//     }
// }
// else {
//     document.write("Please Enter a Valid Password<br>Password must at least 6 characters long")
// }

//? Q16

// var university = "University of Karachi";
// var arr = university.split("");
// document.write(arr.join("<br>"));
// console.log(arr.join("<br>"));

//? Q17

// var input = "Pakistan";
// var b = input.charAt(input.length - 1);
// console.log(b);

//? Q18

// var text = "The quick brown fox jumps over the lazy dog";
// text = text.toLowerCase();
// var word = text.split("the").length - 1;
// document.write("There are " + word + " occurence(s) of the word 'the'");