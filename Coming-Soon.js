
//
// Navbar
//

'use strict';

$((function() {
    "use strict";

    $.scrollUp({
        scrollName: "page_scroller",
        scrollDistance: 300,
        scrollFrom: "top",
        scrollSpeed: 500,
        easingType: "linear",
        animation: "fade",
        animationSpeed: 200,
        scrollTrigger: !1,
        scrollTarget: !1,
        scrollText: '<i class="fa fa-chevron-up"></i>',
        scrollTitle: !1,
        scrollImg: !1,
        activeOverlay: !1,
        zIndex: 2147483647
    }),
    $((function() {}
    ))
    
}
));


$('textarea').keyup(function() {
    
    var characterCount = $(this).val().length,
        current = $('#current'),
        maximum = $('#maximum'),
        theCount = $('#counter');
      
    current.text(characterCount);
   
    
    /*This isn't entirely necessary, just playin around*/
    if (characterCount < 70) {
      current.css('color', '#666');
    }
    if (characterCount > 70 && characterCount < 90) {
      current.css('color', '#6d5555');
    }
    if (characterCount > 90 && characterCount < 100) {
      current.css('color', '#793535');
    }
    if (characterCount > 100 && characterCount < 120) {
      current.css('color', '#841c1c');
    }
    if (characterCount > 120 && characterCount < 139) {
      current.css('color', '#8f0001');
    }
    
    if (characterCount >= 140) {
      maximum.css('color', '#8f0001');
      current.css('color', '#8f0001');
      theCount.css('font-weight','bold');
    } else {
      maximum.css('color','#666');
      theCount.css('font-weight','normal');
    }
    
        
  });
  