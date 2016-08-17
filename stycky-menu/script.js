$(function() {

    var stickyElmnt = $('.bar');

    stickyElmnt.each(function(index) {
        var bar = $(this);
        var barPosition = bar.offset().top;
        var barHeight = bar.height();
        var barIndx = bar.index(stickyElmnt);
        var stickyPos = barPosition + barHeight;

        if (barIndx == 0) {
            stickyPos = barPosition;
        };

        function fixedbar() {

            var scrl = $(window).scrollTop();

            if (!bar.hasClass('sticky') && (scrl > stickyPos)) {
                bar.addClass('sticky');
            } else if (scrl < stickyPos) {
                bar.removeClass('sticky');
            };

        };

        fixedbar();

        $(window).on('resize scroll', function() {
            fixedbar();
        });
    });

});