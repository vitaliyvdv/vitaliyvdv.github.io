$(function(){

    $('.tools-list').children(':first-child').addClass('active');

    var fontActive = $('.container--typeface').children('.active').attr('data-font');
    var fontActiveName = $('.container--typeface').children('.active').attr('data-name');
    var styleActive = $('.container--styling').children('.active').attr('data-weight');
    var styleActiveItalic = $('.container--styling').children('.italic-active').attr('data-style');
    var colorActive = $('.container--bg').children('.active').attr('data-color');

    $('.container--display-cont').css({'fontFamily': fontActive, 'fontWeight': styleActive, 'backgroundColor': colorActive});

    $('.container--display-font').text(fontActiveName);
    $('.container--display-weight').text(styleActive);
    $('.container--display-style').text(styleActiveItalic);

    $('.container--typeface').on('click', '.container--typeface-itm', function() {
        $('.container--display-cont').css('fontFamily', $(this).attr('data-font'));
        $(this).addClass('active').siblings().removeClass('active');

        if ($(this).attr('data-italic') !== "true") {
            $('.container--styling-itm[data-style="Italic"]').addClass('italic-noactive').removeClass('italic-active');
            $('.container--display-cont').css('fontStyle', 'normal');
            $('.container--display-style').empty();
        } else {
            $('.container--styling-itm[data-style="Italic"]').removeClass('italic-noactive');
        };

        $('.container--display-font').text($(this).attr('data-name'));
    });

    $('.container--styling').on('click', '.container--styling-itm', function() {

        var attrWeight = $(this).attr('data-weight');
        var attrStyle = $(this).attr('data-style');

        if (typeof attrWeight !== typeof undefined && attrWeight !== false) {
            $('.container--display-cont').css('fontWeight', $(this).attr('data-weight'));
            $(this).addClass('active').siblings().removeClass('active');
            $('.container--display-weight').text($(this).text());
        };

        if ((typeof attrStyle !== typeof undefined && attrStyle !== false) && !($(this).hasClass('italic-noactive')) ) {
            if ($(this).hasClass('italic-active')) {
                $('.container--display-cont').css('fontStyle', 'normal');
                $(this).removeClass('italic-active');
                $('.container--display-style').empty();
            } else {
                $('.container--display-cont').css('fontStyle', $(this).attr('data-style'));
                $(this).addClass('italic-active');
                $('.container--display-style').text($(this).text());
            };
        };

    });

    $('.container--bg').on('click', '.container--bg-itm', function() {

        var colorInvert = $(this).attr('data-invert');

        $('.container--display-cont').css('backgroundColor', $(this).attr('data-color'));
        $(this).addClass('active').siblings().removeClass('active');

        if (colorInvert == 'true') {
            $('.container--display-cont').css('color', '#000');
        } else {
            $('.container--display-cont').css('color', '#fff');
        };

    });

});