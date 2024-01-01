let brands = document.querySelector('ul.brands');
  total_brands=brands.children.length;
  document.documentElement.style.setProperty("--total-brand",  total_brands);
  for(let i =0;i< total_brands; i++){
      brands.appendChild(brands.children[i].cloneNode(true));
  };
  var loader=document.getElementById("preloader");
  window.addEventListener("load", function(){
      loader.style.display="none";
  });