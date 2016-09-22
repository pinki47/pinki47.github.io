// Variable to hold request
var request;
//variable to hold geovalues
var longitude;
var latitude;

document.body.onload = function() {
getLocation();
reveal();
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

//get visitors count
function reveal() {

 $.getJSON( "https://spreadsheets.google.com/feeds/list/19weOqnGlADXwhxUUtVnfZYv2uH6UJUeSmV5WQXQ5Ccc/od6/public/values?alt=json-in-script&callback=?",
    function (data) {   
      var a4 = data.feed.entry[3].gsx$spielername.$t;
      alert(a4);
  });

var val = document.getElementById("visitorsCount").textContent;
var result = parseInt(val) + parseInt(1);
document.getElementById("visitorsCount").textContent = result;
}

// Bind to the submit event of our form
$("#contact-form").submit(function(event){
  
    $('<input />').attr('type', 'hidden')
          .attr('name', "latitude")
          .attr('value', latitude)
          .appendTo('#contact-form');

    $('<input />').attr('type', 'hidden')
          .attr('name', "longitude")
          .attr('value', longitude)
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
        url: "https://script.google.com/macros/s/AKfycbw_v77oNciQ_eEnZAMzkO1wvuYOAFlki67aPB0ZgT4WrWWuuKA/exec",
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