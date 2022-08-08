/*const btn = document.querySelector('#btn');
const img = document.getElementById('img');

btn.addEventListener('click', () => {
    img.classList.toggle('show')
    alert('ça a changé')
})

/// mousemove Events 
const mousemove = document.querySelector(".mousemove");

window.addEventListener("mousemove", (e) => {
    mousemove.style.left = e.pageX + "px";
    mousemove.style.top = e.pageY + "px";

}); 

mousemove.addEventListener("mousedown", () => {
    mousemove.style.transform = "scale(2) translate(-25%, -25%)";
});
 
window.addEventListener("mouseup", () => {
    mousemove.style.transform = "scale(1) translate(-50%, -50%)";
    mousemove.style.border = "2px solid lightblue";
});*/


/// Keypress event 

const KeypressContainer = document.querySelector(".keypress");
const key = document.getElementById("key");

const ring = () => {
    const Audio = new Audio();
    Audio.src = "./Enter.mp3";
    Audio.play();
};


document.addEventListener("keypress", (e) => {
    key.textContent = e.key;
    if (e.key === "j") {
        KeypressContainer.style.background = "yellow";
    }else if (e.key === "h"){
        KeypressContainer.style.background = "green";
    }else {
        KeypressContainer.style.background = "red";
    }

    ring();
});


/// Scroll Events 

const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
    console.log("Test !!!");
});

/// ---------------------------------------

// Form Events 
const inputName = document.querySelector('input[type="text"]');
inputName.addEventListener("input", () => {
    console.log("Yes !!!");
});

/// load event

window.addEventListener("load", () => {
    console.log("document Chargé !!");
});
