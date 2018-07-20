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
use .css to set img element to hero class 
Example: 
$('.js-hide-it').addClass('hidden');
also update alt attribute 
*/

'use strict';
/* global $ */
//$(function(){ }) vs function() { }?
function handleSelectImg () {
  $('.thumbnail').on('click', function(event) {
    $('.thumbnail').addClass('hero img');
    $('.img').addClass('hero img');
    $('alt').addClass('hero img');
    
  });
}
$(handleSelectImg);