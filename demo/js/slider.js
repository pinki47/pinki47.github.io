document.body.onload = function() {
setInterval(slide, 3000);
}


function slide() {
     var imgSrc = document.getElementById('slide').getAttribute('src');
        var currentPageNumber = imgSrc.substring(4, imgSrc.lastIndexOf('.'));        
       
        if (currentPageNumber == 2)
            currentPageNumber = 0;
             
        var newimgSrc = 'img/' + (Number(currentPageNumber)+1) + '.jpg';  
          
        document.getElementById('slide').setAttribute('src', newimgSrc);
   }