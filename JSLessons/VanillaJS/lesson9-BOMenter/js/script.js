const text = document.querySelector('span');
// text.innerHTML = window.innerHeight;
// text.innerHTML = window.innerWidth;
// text.innerHTML = screen.height;
// text.innerHTML = screen.width;
// text.innerHTML = screen.availHeight;
// text.innerHTML = screen.availWidth;
// text.innerHTML = screen.colorDepth;

// text.innerHTML = location.host
// text.innerHTML = location.pathname
// text.innerHTML = location.hostname
// text.innerHTML = location.origin
// text.innerHTML = location.port
// text.innerHTML = location.protocol
// text.innerHTML = location.assign('https://webluna.az')
// text.innerHTML = navigator.appCodeName;
// text.innerHTML = navigator.appName;
// text.innerHTML = navigator.platform;
// text.innerHTML = navigator.product;
// text.innerHTML = navigator.language;

// if (navigator.language == "en-US") {
//     alert("Hello En")
// }



// alert("Hey man")
// prompt('Adnizi daxil edin');
// text.innerHTML = prompt("Adinizi daxil edin");


// 1000ms = 1s
// setInterval(()=>{document.write('Hello')},1000);

// text.innerHTML = new Date();
//  setInterval(()=>{text.innerHTML = new Date().getMilliseconds()},1);
// setTimeout(()=>{document.write('Hello')},2000)



let a = setInterval(myTimer, 1000);

function myTimer() {
  const d = new Date();
  document.getElementById("demo").innerHTML = d.toLocaleTimeString();
}
document.querySelector('button').onclick = ()=>{clearInterval(a)};
