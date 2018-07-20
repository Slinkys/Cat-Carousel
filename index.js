/*Cat Carousel instructions
when a user selects one of the thumbnail images using the mouse or keyboard, 
that image should be displayed in the full-size image container at the top. 
Updating the image should also update its alt attribute. 
To test keyboard interactivity, you can Tab to one of the thumbnails and press the Enter key.

function to handle select image using click button or return key
Example:
$("button").on('click', function(event) {
    console.log("A button was clicked");
});
Inside this function display the image that the user selected 
Also update alt attribute 
*/

'use strict';
/* global $ */
function handleSelectImg () {
  $('.thumbnail').on('click', function(event) {

    const imageSelected = $(this).find('img').attr('src');
    const imageAlt = $(this).find('img').attr('alt');
    console.log(imageSelected, imageAlt);
    const destinationImg = $('.hero').find('img');
    destinationImg.attr('src', imageSelected);
    destinationImg.attr('alt', imageAlt);

  });
}
$(handleSelectImg);