function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("header").style.background = "#02475E";
    document.getElementById("header").style.position = "fixed";

  } else {
    document.getElementById("header").style.background = "transparent";
      document.getElementById("header").style.position = "relative";
  }
}

$(document).ready(function(){
    $(".ham-menu").click(function(){
      $(".menu-open").slideToggle(300);
    });
  });

