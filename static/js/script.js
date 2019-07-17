$(window).scroll(function(e){ 
    var $el = $('.gal_menu'); 
    var isPositionFixed = ($el.css('position') == 'fixed');
    if ($(this).scrollTop() > 500 && !isPositionFixed){ 
        if (screen.width < 960) {
            $('.gal_menu').css({'position': 'fixed', 'top': '53px'}); 
        }
        else {
            $('.gal_menu').css({'position': 'fixed', 'top': '77px'});
        }
    }
    if ($(this).scrollTop() < 500 && isPositionFixed)
    {
      $('.gal_menu').css({'position': 'static', 'top': '0px'}); 
    } 
  });

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function(){

        this.classList.toggle("active");

        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    }
}
