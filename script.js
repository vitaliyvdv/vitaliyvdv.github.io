$(function() {

    $('.bar').each(function(){
        var bar = $(this);
        var barPosition = bar.offset().top;

        function fixedbar() {
            var scrl = $(window).scrollTop();

            //if (($(".bar.fixed").length < 1) && (scrl > barPosition)) {
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