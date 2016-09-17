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