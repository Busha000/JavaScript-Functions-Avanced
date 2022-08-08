//alert("hellow world");
// Global console, alert 

// function key word in Javascript

function convertUsdToPound () {
    "use strict"

    var amount = document.getElementById("dollar").value,  //100

    result = amount * 3.75,

    message = document.getElementById("message");

    message.innerHTML = 

    amount + " Dollar Is Worth " + result + " Pound";

    if (amount === "") {// amount can't be empty

        message.innerHTML = "This Field can't be empty";

    } else if (isNaN(amount)) { //amount must be number

        message.innerHTML = "This Field Accept Numbers Only"; 

    } else if (amount === "0") {// Amount can't be Zero

        message.innerHTML = "The value Must Not Be 0"; 

    } else if (amount < 0) {// Amount can't be negative number

        message.innerHTML = "The value Must Not Be negative a number";
    }
    else {

        message.innerHTML = amount + " Dollar Is Worth " + result + " Pound";
    }
}
