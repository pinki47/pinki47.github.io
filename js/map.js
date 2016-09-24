
document.body.onload = function() {
fillForm(); 
showPosition(document.getElementById('latitude').value,document.getElementById('longitude').value);
}

//fill the form with url content
function fillForm(){
var params = {};
var param_array = window.location.href.split('?')[1].split('&');
    for(var i in param_array){
        x = param_array[i].split('=');
        params[x[0]] = x[1];
    }
for (var i in params) {
document.getElementById(i).value = params[i];
}
}

//load Map
var map;
  function showPosition(latitude,longitude) {
     var myLatlng = new google.maps.LatLng(latitude,longitude);
     var myOptions = {
     zoom:14,
     center: myLatlng,
     mapTypeId: google.maps.MapTypeId.ROADMAP
      }
     
     document.getElementById('mapholder').setAttribute("style","display:block;width:80%;height:500px"); 

     map = new google.maps.Map(document.getElementById("mapholder"), myOptions);
        // marker refers to a global variable
           marker = new google.maps.Marker({
           position: myLatlng,
           map: map
      });
  }  