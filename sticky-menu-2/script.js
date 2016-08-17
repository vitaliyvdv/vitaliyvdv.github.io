$(function() {

    var stickyElmnt = $('.bar');

    stickyElmnt.each(function(index) {
        var bar = $(this);
        var barPosition = bar.offset().top;

        function fixedbar() {

            var scrl = $(window).scrollTop();

            if (!bar.hasClass('sticky') && (scrl > barPosition)) {
                bar.addClass('sticky');
            } else if (scrl < barPosition) {
                bar.removeClass('sticky');
            };

        };

        fixedbar();

        $(window).on('resize scroll', function() {
            fixedbar();
        });
    });

});