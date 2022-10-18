var row = document.querySelector(".row");
var countStart = 0;
var countEnd = 50;
var countryData = function () {
    fetch("https://restcountries.com/v3.1/all")
        .then(function (res) { return res.json(); })
        .then(function (data) {
        var div = "";
        // data.map((fd:any,i:number)=>{
        //     console.log(fd);})
        for (var x = countStart; x < countEnd; x++) {
            console.log(data[x + 1]);
            div += "<div data-aos=\"flip-left\" class=\"card\" style=\"width: 18rem;\">\n        <img src=\"".concat(data[x].flags.png, "\" class=\"card-img-top\" alt=\"...\">\n        <div class=\"card-body\">\n          <h5 class=\"card-title\">").concat(data[x].name.common, "</h5>\n          <p>").concat(x + 1, "</p>\n        </div>\n      </div>");
        }
        row.innerHTML = div;
    });
};
document.querySelectorAll("button")[0].onclick = function () {
    countStart = 0;
    countEnd = 50;
    countryData();
};
document.querySelectorAll("button")[1].onclick = function () {
    countStart = 50;
    countEnd = 100;
    countryData();
};
document.querySelectorAll("button")[2].onclick = function () {
    countStart = 100;
    countEnd = 150;
    countryData();
};
document.querySelectorAll("button")[3].onclick = function () {
    countStart = 150;
    countEnd = 200;
    countryData();
};
document.querySelectorAll("button")[4].onclick = function () {
    countStart = 200;
    countEnd = 250;
    countryData();
};
countryData();
