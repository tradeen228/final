
function soundClick() {
var audio = new Audio();
audio.src = 'shop.mp3';
audio.autoplay = true;
}
let mybutton = document.getElementById("btn-back-to-top");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

two1.onclick=function(){
  var m=10;
  let timer=setInterval(function(){
    m=m+30;
    two1.style.left=m/5+"px";
    if(m>2000)clearInterval(timer);
  },25);

}
var btn = document.getElementById("theme-button");
var link = document.getElementById("theme-link");

btn.addEventListener("click", function () { ChangeTheme(); });
