let layout = document.querySelector(".layout");
let h1 =document.querySelectorAll("h1");
let span =document.querySelector(".layout .container h1 span");


layout.addEventListener("mouseenter", () => {
          layout.style.opacity ="1";
          setTimeout(() => {
               span.style.opacity ="1";
          }, 500);
          setTimeout(() => {
               h1[0].style.opacity = "1";
          }, 1500);
          setTimeout(() => {
               h1[1].style.opacity = "1";
          }, 2500);
     });


layout.addEventListener("mouseleave", () => {
     layout.style.opacity = "0";
});

