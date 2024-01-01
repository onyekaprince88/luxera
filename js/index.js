var loader=document.getElementById("preloader");
window.addEventListener("load", function(){
    loader.style.display="none";
});
var countDownDate=new Date("mar 31,2024 00:00:00").getTime();
var x=setInterval(function(){
    var now=new Date().getTime();
    var distance=countDownDate-now;
    // to calculate the date
    var days=Math.floor(distance/(1000*60*60*24));
    var hours=Math.floor((distance%(1000*60*60*60*24))/(1000*60*60*24));
    var minutes=Math.floor((distance%(1000*60*60))/(1000*60));
    var seconds=Math.floor((distance%(1000*60))/1000);
    // to select the html elements
    document.getElementById("days").innerHTML=days;
    document.getElementById("hours").innerHTML=hours;
    document.getElementById("minutes").innerHTML=minutes;
    document.getElementById("seconds").innerHTML=seconds;
    if(distance<0){
        clearInterval(x);
        document.getElementById("days").innerHTML= "00";
    document.getElementById("hours").innerHTML="00";
    document.getElementById("minutes").innerHTML="00";
    document.getElementById("seconds").innerHTML="00";
    document.getElementsByClassName("t").style.display="none";
    document.getElementsByClassName("z").style.textDecoration="none";
    };
},1000);
let brands = document.querySelector('ul.brands');
  total_brands=brands.children.length;
  document.documentElement.style.setProperty("--total-brand",  total_brands);
  for(let i =0;i< total_brands; i++){
      brands.appendChild(brands.children[i].cloneNode(true));
  };