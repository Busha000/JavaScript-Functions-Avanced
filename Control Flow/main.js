/** Global control, alert, prompt
 * 
 switch (expression) {
 case x: 
     code to be executed;
    break;

 case x: 
     code to be executed;
    break;

 case x: 
     code to be executed;
     break;

 case x: 
    code to be executed;
    break;

 case x: 
    code to be executed;
    break;

 default: 
    code to be executed;
    break;

 }
 */

 var season = prompt("Whats the best season for you ?");
 
 switch (season) {

    case "Winter":

      alert("Winter is cold");
        
        break;
        
    case "Summer":

        alert("Summer is too hot");

        break;

    case "Autumn":

    alert("Autumn is very good");

        break;
    case "Spring":

        alert("Spring is amazing");

        break;

 default:

      alert("You didn't enter a season name");
        
        break;
 }