// select content
const hero = document.querySelector('.hero');
const secTwo = document.querySelector('.secTwo');
// select button
const heroBtn = document.querySelector('#heroBtn');
const menuBtn = document.querySelector('#menuBtn');

// functions
const showMenu = ()=>{
    hero.attributes[0].value = "hide";
    secTwo.attributes[0].value = "show";
}

const hideMenu = ()=>{
    hero.attributes[0].value = "show";
    secTwo.attributes[0].value = "hide";
}

// events
heroBtn.onclick = showMenu;
menuBtn.onclick = hideMenu;

heroBtn.accessKey = "w";
menuBtn.accessKey = "q";