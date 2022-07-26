// const btn = document.querySelector(".a");
// const text = document.querySelector("h1");

// btn.onclick = () => {
//   if (btn.innerHTML === "EN") {
//     text.innerHTML = "Hello";
//     btn.innerHTML = "AZ";
//   } else {
//     text.innerHTML = "Salam";
//     btn.innerHTML = "EN";
//   }
// };

// $(function () {
//   $("button").click(function () {
//     if ($("button").html() === "tr") {
//       $("p").load("../data/infotr.txt");
//       $("button").html("en");
//     } else {
//       $("p").load("../data/infoen.txt");
//       $("button").html("tr");
//     }
//   });
// });

$(document).ready(function(){
    $("button").click(function(){
      $("p").load("../data/infotr.txt", function(responseTxt, statusTxt, xhr){
        if(statusTxt == "success")
          alert("External content loaded successfully!");
        if(statusTxt == "error")
          alert("Error: " + xhr.status + ": " + xhr.statusText);
      });
    });
  });
