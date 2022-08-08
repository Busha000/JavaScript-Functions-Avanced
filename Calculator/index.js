const buttons = document.querySelectorAll(".btn");
const result = document.getElementById('result');

buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        result.textContent = +e.target.id;
    }); 
});

equal.addEventListener("click", () => {
    result.textContent = eval(result.textContent);
});
 
clear.addEventListener("click", () => {
    result.textContent = "";
});


////-------------------------------------

// AddEventlistener Vs onclick

//document.body.onclick = () => {
    //console.log("Click !");
//};

// Browser Object Modèle le BOM

//console.log(window.innerHeight);
//console.log(window.scrollY);

//window.open('https://www.google.fr/', "cours js", "height=600, width=800")

//window.close() 

// Evenements Adosssés à window
//alert("Hello World");

//CONFIRM
//clear.addEventListener("click", () => {
    //confirm("Would you really want to go wrog ?");
//});


//Prompt 

//Timer, compte à rebours


//setTimeout(() => {
    
    
//}, timeout);


let interval = setInterval(() => {
    document.body.innerHTML += 
    `
    <div class='box'>
    <h2>Nouvelle Boite  De Pandor!</h2>
    </div>
    `;
}, 4000);

document.body.addEventListener("Click", (e) => {
    e.target.remove();
    clearInterval(interval);
});

/// Location 
///console.log(location.href);
//console.log(location.host);
//console.log(location.pathname);
//console.log(location.search);
//location.replace("http://lequipe.fr");



//Navigator
//console.log(navigator.userAgent);


//début du code sur la geolocalisation en Javascript

/*var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };
  
  function success(pos) {
    var crd = pos.coords;
  
    console.log('Votre position actuelle est :');
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude : ${crd.longitude}`);
    console.log(`La précision est de ${crd.accuracy} mètres.`);
  }
  
  function error(err) {
    console.warn(`ERREUR (${err.code}): ${err.message}`);
  }
  
  navigator.geolocation.getCurrentPosition(success, error, options);
  
  */
  

//History 

//console.log(history);


