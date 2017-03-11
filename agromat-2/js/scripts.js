head.ready(function() {

    // no transition
/*
    $(function() {
        setTimeout(function() {
            $('body').removeClass('no-transition');
        }, 0);
    });*/

    // bug fix когда в кеше гугла не отображается svg (начало)
    head.ready(document, function() {
        $('svg>use').each(function() {
            $(this).attr('xlink:href', document.location.href.split('#')[0] + $(this).attr('xlink:href'));
        });
    });
    // bug fix когда в кеше гугла не отображается svg (конец)

    // выдвижная панель навигации (начало)

    var mobileNav = function() {

        var mobileNavPanel = $('.navigation');
        var mobileNavClose = $('.navigation-close');

        $('.menu-button').on('click', function() {
            if (mobileNavPanel.hasClass('active')) {
                mobileNavPanel.removeClass('active');
                $('body').removeClass('active');
            } else {
                mobileNavPanel.addClass('active');
                $('body').addClass('active');
            };
        });

        mobileNavClose.on('click', function() {
            mobileNavPanel.removeClass('active');
            $('body').removeClass('active');
        });

        $('body').keyup(function(ee) { // закрытие поиска при нажатии клавиши Esc
            if ((ee.keyCode == 27) && (mobileNavPanel.hasClass('active'))) {
                $('.menu-button').click();
            }
        });

        $('[data-scroll-nav]').click(function(e) {
            $('body').removeClass('active');
            mobileNavPanel.removeClass('active');
        });

    };

    mobileNav();

    // выдвижная панель навигации (начало)

    // попап почты (начало)

    $('.mail-init').click(function() {

        popupTarget = $(this).attr('popup-target');

        $('.' + popupTarget).addClass('active');

        $('.mail-close').on('click', function() {
            popupclose = $(this);
            popupclose.parents('.mail').removeClass('active');
        });


        if ($('.mail').hasClass('active')) {
            $(document).on('mousedown.mailpopup', function(e) { // событие клика по веб-документу
                var elementtaget = $('.mail-body'); // тут указываем ID элемента
                if (!elementtaget.is(e.target) // если клик был не по нашему блоку
                    &&
                    elementtaget.has(e.target).length === 0) { // и не по его дочерним элементам
                    $('.mail.active').find('.mail-close').click();
                    $(document).off('.mailpopup');

                };
            });

            $('body').keyup(function(ee) { // закрытие поиска при нажатии клавиши Esc
                if (ee.keyCode == 27) {
                    $('.mail.active').find('.mail-close').click();
                }
            });

        };

    });

    // попап почты (конец)

    // перемотка вверх (начало)
    var scrollToTop = function() {

        function scrolltop() {
            var scrl = $(window).scrollTop();

            if (($(".totop.active").length < 1) && (scrl > 120)) {
                $('.totop').addClass('active');
            } else if (scrl < 120) {
                $('.totop').removeClass('active');
            }
        };

        scrolltop();

        $(window).scroll(function() {
            scrolltop();
        });

        $('.totop').on('click', function() {
            var scrolltarget = $('#body').offset().top;
            $('html, body').animate({
                scrollTop: scrolltarget
            }, 1200, function() { //1200 - корость анимации, easeOutQuart - вид анимации
                $('.totop').removeClass('active');
            });
        });

    };
    scrollToTop();

    // перемотка вверх (конец)

    // слайдер (начало)

    $('.slider-list').slick({
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 300,
        adaptiveHeight: true,
        autoplay: false,
        fade: true,
        cssEase: 'linear',
        lazyLoad: 'ondemand'
    });

    // слайдер (конец)

    // скролл к блоку на странице (начало)

    var scrollToBlock = function() {

        var blheight = 0;

        if (Modernizr.mq('(min-width: 1281px)')) {
            var blheight = -110;
        };

        if (Modernizr.mq('(max-width: 1171px)')) {
            var blheight = -60;
        };

        $.scrollIt({
            upKey: 38, // key code to navigate to the next section
            downKey: 40, // key code to navigate to the previous section
            easing: 'linear', // the easing function for animation
            scrollTime: 600, // how long (in ms) the animation takes
            activeClass: 'active', // class given to the active nav element
            onPageChange: null, // function(pageIndex) that is called when page is changed
            topOffset: blheight // offste (in px) for fixed top navigation
        });

    };

    scrollToBlock();
    $(window).on('resize', function() {
        scrollToBlock();
    });

    // скролл к блоку на странице (конец)

});

$(window).load(function() {

    // sticky-header (начало)

    var stickyNav = function() {

        function fixedNav() {
            var scrl = $(window).scrollTop();

            if (Modernizr.mq('(min-width: 1281px)')) {
                if (scrl > 18) {
                    $('body').addClass('header-fixed');
                } else {
                    $('body').removeClass('header-fixed');
                };
            };

            if (Modernizr.mq('(max-width: 481px)')) {
                if (scrl > 60) {
                    $('body').addClass('header-fixed');
                } else {
                    $('body').removeClass('header-fixed');
                };
            };

        };

        fixedNav();

        $(window).on('scroll', function() {
            fixedNav();
        });

    };

    stickyNav();
    $(window).on('resize', function() {
        stickyNav();
    });

    // sticky-header (конец)

});