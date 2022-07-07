/*
make hands on clock move according to current time
*/

const deg = 6; // 6 degrees per "tick" of the second hand
const hourHand = document.querySelector("#hr");
const minuteHand = document.querySelector("#min");
const secondHand = document.querySelector("#sec");

setInterval(() => {
    let day = new Date(); 
    let hours = day.getHours() * 30; // 30 degrees around circle per hour 
    let minutes = day.getMinutes() * deg; 
    let seconds = day.getSeconds() * deg;
    hourHand.style.transform = `rotateZ(${hours+(minutes/12)}deg)`; 
    minuteHand.style.transform = `rotateZ(${minutes}deg)`;
    secondHand.style.transform = `rotateZ(${seconds}deg)`;
});

/*
change stylesheets based on whether in 'light mode' or 'dark mode'
*/

const styleSheet = document.getElementById('stylesheet'); //link at beginning of html file
const toggler = document.getElementById('mode'); //button with moon emoji
const main = 'assets/css/style.css'; //light mode
const darkmode = 'assets/css/darkmode.css'; //dark mode

toggler.onclick = function swapStyles() {
    if(styleSheet.getAttribute('href') == main) {
        styleSheet.setAttribute('href', darkmode); //when you click the toggler, if the current stylesheet is index.css, switch it 
        toggler.innerHTML = "🌕"; //to darkmode.css and change the button from a dark moon emoji to a light moon emoji
    } 
    else if (styleSheet.getAttribute('href') == darkmode) { //when you click the toggler, if the current stylesheet is darkmode.css,
        styleSheet.setAttribute('href', main); //switch it to index.css and change the buttom from the light moon emoji to the 
        toggler.innerHTML = "🌑"; //dark moon emoji
    }
}

