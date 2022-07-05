// const text = document.querySelectorAll('h1');
// // const a={
// //     'name':"Sebuhi"
// // }
// // console.log(a.name);

// localStorage.setItem("name","Elgun"); //localstorage melumati daxil etmek uchun
// localStorage.removeItem('name');//localStorageden melumati silmek

// localStorage.setItem('name1',"Elgun");
// localStorage.setItem('name2',"Sebuhi");
// localStorage.clear();

// text[0].innerHTML = localStorage.getItem('name1');//localStorageden melumati cagirmaq uchun
// text[1].innerHTML = localStorage.getItem('name2');//localStorageden melumati cagirmaq uchun


// Selectors
const navMenu = document.querySelector('nav');
const modeBtn = document.querySelector('#mode-btn');

// functions
const modeFunc = () => {
    if (navMenu.className == 'navbar navbar-expand-lg navbar-light bg-light') {
        const modeOne = "navbar navbar-expand-lg navbar-dark bg-dark";
        localStorage.setItem('mode', modeOne);
        navMenu.className = localStorage.getItem('mode');
    } else {
        const modeOne = "navbar navbar-expand-lg navbar-light bg-light";
        localStorage.setItem('mode', modeOne);
        navMenu.className = localStorage.getItem('mode');

    }
    // console.log('a');
}

modeBtn.onclick = modeFunc;

navMenu.className = localStorage.getItem('mode');


// =================================================================
//                   MULTILANG with LOCALSTORAGE
// =================================================================

// selectors
const langItem = document.querySelectorAll('a');
const multiBtn = document.querySelector('#multi-lang');
// arrays
const az = ["Ana Sehife", "Haqqimizda", "Xidmetlerimiz", "Meqale", "Elaqe"];
const en = ["Home", "About", "Services", "Blog", "Contact"];

// functions
const multiLang = () => {
    if (multiBtn.innerHTML == 'AZ') {
        for (let i = 0; i < az.length; i++) {
            langItem[i].innerHTML = az[i];
        }
        localStorage.setItem('lang',az);
        localStorage.setItem('langBtn','EN');
        multiBtn.innerHTML = localStorage.getItem('langBtn');
    } else {
        for (let i = 0; i < en.length; i++) {
            langItem[i].innerHTML = en[i];
        }
        localStorage.setItem('lang',en);
        localStorage.setItem('langBtn','AZ');
        multiBtn.innerHTML = localStorage.getItem('langBtn');
    }
}
// actions 
multiBtn.onclick = multiLang;

for (let i = 0; i < az.length; i++) {
    langItem[i].innerHTML = localStorage.getItem('lang').split(',')[i];
}
multiBtn.innerHTML = localStorage.getItem('langBtn');