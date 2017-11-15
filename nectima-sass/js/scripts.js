$(function(){

    $('.tools-list').children(':first-child').addClass('active');

    var display = $('.container--display-cont');
    var displayFont = $('.container--display-font');
    var displayWeight = $('.container--display-weight');

    var fontActive = $('.container--typeface').children('.active').attr('data-font');
    var fontActiveName = $('.container--typeface').children('.active').attr('data-name');
    var styleActiveWeight = $('.container--styling').children('.active').text();
    var styleActiveTitle = $('.container--bg').children('.active').attr('data-title-invert');
    var colorActive = $('.container--bg').children('.active').attr('data-color');

    var italicItm = $('.container--styling-itm[data-font-style="italic"]');

    display.attr({'data-display-font': fontActive, 'data-display-weight': styleActiveWeight});
    display.css({'backgroundColor': colorActive});
    displayFont.text(fontActiveName);
    displayWeight.text(styleActiveWeight);

    if (styleActiveTitle == 'true') {
        $('.color-var').addClass('light');
    } else {
        $('.color-var').addClass('dark');
    };

    $('.container--typeface').on('click', '.container--typeface-itm', function() {
        display.attr("data-display-font", $(this).attr('data-font'));
        $(this).addClass('active').siblings().removeClass('active');

        if ($(this).attr('data-italic') !== "true") {
            italicItm.addClass('no-italic');

            if (italicItm.hasClass('active')) {
                italicItm.removeClass('active');
                $('.container--styling-itm[data-font-style="normal"]').click();
            };
        } else {
            italicItm.removeClass('no-italic');
        };

        displayFont.text($(this).attr('data-name'));
    });

    $('.container--styling').on('click', '.container--styling-itm', function() {

        var attrFontType = $(this).attr('data-font-style');

        if (!($(this).hasClass('no-italic'))) {
            $(this).addClass('active').siblings().removeClass('active');
            display.attr("data-display-weight", attrFontType);
            displayWeight.text($(this).text());
        };

    });

    $('.container--bg').on('click', '.container--bg-itm', function() {

        var colorTextInvert = $(this).attr('data-text-invert');
        var colorTitleInvert = $(this).attr('data-title-invert');

        display.css('backgroundColor', $(this).attr('data-color'));
        $(this).addClass('active').siblings().removeClass('active');

        if (colorTextInvert == 'true') {
            display.css('color', '#000');
        } else {
            display.css('color', '#fff');
        };

        if (colorTitleInvert == 'true') {
            $('.color-var').removeClass('dark').addClass('light');
        } else {
            $('.color-var').removeClass('light').addClass('dark');
        };

    });

});