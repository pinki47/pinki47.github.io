
document.body.onload = function() {
showPosition(17.4875,78.42547);
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
     
     document.getElementById('map1').setAttribute("style","display:block;height:500px"); 

     map = new google.maps.Map(document.getElementById("map1"), myOptions);
        // marker refers to a global variable
           marker = new google.maps.Marker({
           position: myLatlng,
           map: map
      });
  }  