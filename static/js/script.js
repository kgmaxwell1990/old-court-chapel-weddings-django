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

function initMap() {
    var options = {
      zoom:8,
      center:{lat:54.367288,lng:-5.560291}
    }

    var map = new
    google.maps.Map(document.getElementById('map'), options);

    var marker = new google.maps.Marker({
      position:{lat:54.367288,lng:-5.560291},
      map:map
    });
}

function myFunction() {
    alert("Your information was received & we will get back to you as soon as possible!");
}