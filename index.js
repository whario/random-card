const number= ["A","2","3","4","5","6","7","8","9","10","J","Q","K"];
const icon=["\u2665","\u2666","\u2663","\u2660"];

function numberRandom  (myArray){
    let numRandom = Math.floor(Math.random() * (myArray.length));
    console.log(numRandom);
    return numRandom;
}

let iconShow = icon[numberRandom(icon)];
if(iconShow == "\u2665" || iconShow =="\u2666"){
    document.querySelector(".top").style.color="#c72b39";
    document.querySelector(".bottom").style.color="#c72b39";
}else if(iconShow == "\u2663" || iconShow =="\u2660"){
    document.querySelector(".top").style.color="#333333";
    document.querySelector(".bottom").style.color="#333333";
}

window.onload = () => {
    document.querySelector('.top').innerHTML = iconShow;
    document.querySelector('.bottom').innerHTML = iconShow;
    document.querySelector('.number').innerHTML = number[numberRandom(number)]; 
};