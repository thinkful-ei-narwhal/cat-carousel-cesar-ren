'use strict';
//when a user selects one of the thumbnail images using
//the mouse or keyboard, that image should be displayed in the
// full-size image container at the top.

//$('.thumbnail') selector for img

//$('.hero img') selector for large img

//all and src attribute for small img should be copied to
//to large img when clicked

$('.thumbnail').click(function(event) {
  event.preventDefault();
  const smallAlt = $(event.currentTarget)
    .find('img')
    .attr('alt');

  //$( "#greatphoto" ).attr( "alt", "Beijing Brush Seller" )

  const smallSrc = $(event.currentTarget)
    .find('img')
    .attr('src');

  $('.hero img')
    .attr('alt', smallAlt)
    .attr('src', smallSrc);

  console.log(smallSrc);
});
