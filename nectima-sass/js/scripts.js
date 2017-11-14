$(function(){

    $('.tools-list').children(':first-child').addClass('active');

    var display = $('.container--display-cont');
    var displayFont = $('.container--display-font');
    var displayWeight = $('.container--display-weight');
    var displayStyle = $('.container--display-style');

    var fontActive = $('.container--typeface').children('.active').attr('data-font');
    var fontActiveName = $('.container--typeface').children('.active').attr('data-name');
    var styleActiveWeight = $('.container--styling').children('.active').text();

    var styleActiveItalic = $('.container--styling').children('.italic-active').attr('data-style');
    var colorActive = $('.container--bg').children('.active').attr('data-color');

    display.attr({'data-display-font': fontActive, 'data-display-weight': styleActiveWeight});
    display.css({'backgroundColor': colorActive});

    displayFont.text(fontActiveName);
    displayWeight.text(styleActiveWeight);
    displayStyle.text(styleActiveItalic);

    $('.container--typeface').on('click', '.container--typeface-itm', function() {
        display.attr("data-display-font", $(this).attr('data-font'));
        $(this).addClass('active').siblings().removeClass('active');

        if ($(this).attr('data-italic') !== "true") {
            $('.container--styling-itm[data-style="italic"]').addClass('italic-noactive').removeClass('italic-active');
            display.attr('data-display-style', 'normal');
            displayStyle.empty();
        } else {
            $('.container--styling-itm[data-style="italic"]').removeClass('italic-noactive');
        };

        displayFont.text($(this).attr('data-name'));
    });

    $('.container--styling').on('click', '.container--styling-itm', function() {

        var attrWeight = $(this).attr('data-weight');
        var attrStyle = $(this).attr('data-style');

        if (typeof attrWeight !== typeof undefined && attrWeight !== false) {
            display.attr("data-display-weight", $(this).attr('data-weight'));
            $(this).addClass('active').siblings().removeClass('active');
            displayWeight.text($(this).text());
        };

        if ((typeof attrStyle !== typeof undefined && attrStyle !== false) && !($(this).hasClass('italic-noactive')) ) {
            if ($(this).hasClass('italic-active')) {
                display.attr('data-display-style', 'normal');
                $(this).removeClass('italic-active');
                displayStyle.empty();
            } else {
                display.attr('data-display-style', $(this).attr('data-style'));

                $(this).addClass('italic-active');
                displayStyle.text($(this).text());
            };
        };

    });

    $('.container--bg').on('click', '.container--bg-itm', function() {

        var colorInvert = $(this).attr('data-invert');

        display.css('backgroundColor', $(this).attr('data-color'));
        $(this).addClass('active').siblings().removeClass('active');

        if (colorInvert == 'true') {
            display.css('color', '#000');
        } else {
            display.css('color', '#fff');
        };

    });

});