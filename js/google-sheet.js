// Variable to hold request
var request;
//variable to hold geovalues
var longitude;
var latitude;

document.body.onload = function() {
getLocation();
}

//get geo location 
  function getLocation()  {                   
  if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);    
     }
  }

//get  values of longitude and latitude
function showPosition(position) {    
    latitude  = position.coords.latitude;    
    longitude = position.coords.longitude;         
}

// Bind to the submit event of our form
$("#contact-form").submit(function(event){ 
 
    var hres = 'pinki47.github.io/map.html?latitude=' + latitude + '&longitude=' + longitude;  
 
    $('<input />').attr('type', 'hidden')
          .attr('name', "latitude")
          .attr('value', latitude)
          .appendTo('#contact-form');

    $('<input />').attr('type', 'hidden')
          .attr('name', "longitude")
          .attr('value', longitude)
          .appendTo('#contact-form');

    $('<input />').attr('type', 'hidden')
          .attr('name', "URL")
          .attr('value', hres)
          .appendTo('#contact-form');

    
    // Abort any pending request
    if (request) {
        request.abort();
    }
    // setup some local variables
    var $form = $(this);  
    

    // Let's select and cache all the fields
    var $inputs = $form.find("input, select, button, textarea,hidden");

    // Serialize the data in the form
    var serializedData = $form.serialize();

    // Let's disable the inputs for the duration of the Ajax request.
    // Note: we disable elements AFTER the form data has been serialized.
    // Disabled form elements will not be serialized.
    $inputs.prop("disabled", true);

    // Fire off the request to /form.php
    request = $.ajax({
        url: "https://script.google.com/macros/s/AKfycbx_3Q_-iYYAVFq8JP0PKw45coR5k1Bo3YpF6DuEK0qB62KAZXk/exec",
        type: "post",
        data: serializedData
    });

    // Callback handler that will be called on success
    request.done(function (response, textStatus, jqXHR){
        // Log a message to the console        
        console.log(response);
        console.log(textStatus);
        console.log(jqXHR);
    });

    // Callback handler that will be called on failure
    request.fail(function (jqXHR, textStatus, errorThrown){
        // Log the error to the console
        console.error(
            "The following error occurred: "+
            textStatus, errorThrown
        );
    });

    // Callback handler that will be called regardless
    // if the request failed or succeeded
    request.always(function () {
        // Reenable the inputs
        $inputs.prop("disabled", false);
    });

    // Prevent default posting of form
    event.preventDefault();
});