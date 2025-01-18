// Question 1:Declare 3 variables in one statement. 
let x = 10, y = 20, z = 30;


//Question 2: Declare 5 legal & 5 illegal variable names. 
// Legal variable names
let ages = 25;
let _name = "John";
let user123 = "Alice";
let firstName = "Bob";
let lastname = true;
// Illegal variable names
// let 123name = "Invalid";  
// let @user = "Invalid";   
// let function = "Invalid"; 
// let let = "Invalid";     
// let var = "Invalid";      
console.log(ages, _name, user123, firstName, lastname);


// Question 3:
var heading = document.createElement("h1");
 heading.textContent = "Rules for naming JS variables";

var paragraph1 = document.createElement("p");
paragraph1.textContent = "Variable names can only contain letters, digits, underscores (_) and dollar signs ($). For example $my_1stVariable.";

 var paragraph2 = document.createElement("p");
 paragraph2.textContent = "Variables must begin with a letter, underscore (_) or dollar sign ($). For example $name, _name or name.";

 var paragraph3 = document.createElement("p");
 paragraph3.textContent = "Variable names are case sensitive.";

 var paragraph4 = document.createElement("p");
 paragraph4.textContent = "Variable names should not be JS reserved words.";

        document.body.appendChild(heading);
        document.body.appendChild(paragraph1);
        document.body.appendChild(paragraph2);
        document.body.appendChild(paragraph3);
        document.body.appendChild(paragraph4);

