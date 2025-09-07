function compute() { // starts a reusable set of intructions for a recipe(function), the name of the recipe is called (compute), and {} is where the cooking steps/intructions will live.
    var principal = document.getElementById("principal").value; // grabs the users input from the "principal" id input box from the html file and stores it in a variable box called principal in javascript
    var rate = document.getElementById("rate").value; // grabs the users input from teh "rate" id input box from the html file and stores it in a variable box called rate in javascript
    var years = document.getElementById("years").value; // grabs the users input for "years" id input box from the html file and stores it in a varable box called years in javascript
    
    var interest = principal * years * rate / 100; // creates a variable box named interest that calculates the simple interest of principal*years*rate/100
    var year = new Date().getFullYear() + parseInt(years); // creates a varaible box named year that calculates the future year when the investment ends by adding the users chosen number "years" in javascript and adding to the current year of investment
    var amount = parseInt(principal) + parseFloat(interest); // creates a variable box named amount that will store the vinal value of the principal + interest. Parses the principal to a whole number integer and parses the ionterest as a decimal number and saves the sum as a the final amount(like combining the pizza base with the toppings)
    var result = document.getElementById("result"); // creates a variable box named result to find the element "id=result" in the html document and stores it in the variable box result so the script can stay up to date. Gives direction on where to sand and give updated output on the html side through the working of javascript
    
    if (principal <= 0) { // checks to see if the user input for investment money is 0 or less than which would not make sense.
        alert('Please enter a positive number!'); // pop up that will ask the user to enter a positive number
        document.getElementById("principal").focus(); // after the alert pop up, the cursor jumps back into the input box with id="principal" so the user can immediately re-type the correct number
    }
    else { // if the user did type a postitve integer then this would happen
        result.innerHTML = "If you deposit $" + "<mark>" + principal + "</mark>" + ",\<br\> at an interest rate of " + "<mark>" + rate + "%" + "</mark>" + "\<br\> You will receive an amount of $" + "<mark>" + amount + "</mark>" + ",\<br\> in the year " + "<mark>" + year + "</mark>" + "\<br\>";
    } // This code builds a complete result messgae using the user's inputs and calculated values, then displays it inside the result box on the webpage. 
}
function updateRate() // updateRate() takes the current value of the interest rate slider and updates the text on the page so the user can see the exacrt rate they picked.
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval;
}