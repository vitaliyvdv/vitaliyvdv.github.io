head.ready(function() {

    // no transition

    var noTransition = function() {
        setTimeout(function() {
            $('body').removeClass('no-transition');
        }, 0);
    };


    $.scrollIt({
        upKey: 38, // key code to navigate to the next section
        downKey: 40, // key code to navigate to the previous section
        easing: 'linear', // the easing function for animation
        scrollTime: 600, // how long (in ms) the animation takes
        activeClass: 'active', // class given to the active nav element
        onPageChange: null, // function(pageIndex) that is called when page is changed
        topOffset: -64 // offste (in px) for fixed top navigation
    });
});