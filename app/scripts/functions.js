'use strict';

/*Sticky Menu*/
// Create a clone of the menu, right next to original.
jQuery('.menuholder').addClass('original').clone().insertAfter('.menuholder').addClass('cloned')
.css('position','fixed').css('top','0').css('margin-top','0').css('z-index','500')
.removeClass('original').hide();

var stickIt = function() {
    if (typeof(jQuery('.original').offset()) !== 'undefined') {
        
        var orgElementPos = jQuery('.original').offset();
        var orgElementTop = orgElementPos.top;               
        
        if (jQuery(window).scrollTop() >= (orgElementTop)) {
          // scrolled past the original position; now only show the cloned, sticky element.
        
          // Cloned element should always have same left position and width as original element.     
          var orgElement = jQuery('.original');
          var coordsOrgElement = orgElement.offset();
          var leftOrgElement = coordsOrgElement.left;  
          var widthOrgElement = orgElement.css('width');
          jQuery('.cloned').css('left',leftOrgElement+'px').css('top',0).css('width',widthOrgElement).show();
          jQuery('.original').css('visibility','hidden');
        } else {
          // not scrolled past the menu; only show the original menu.
          jQuery('.cloned').hide();
          jQuery('.original').css('visibility','visible');
        }
    }
};

var startStickIt = function(){
    var scrollIntervalID = setInterval(stickIt, 10);
};

startStickIt();



