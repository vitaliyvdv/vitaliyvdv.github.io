$(function(){$(".tools-list").children(":first-child").addClass("active");var t=$(".container--display-cont"),a=$(".container--display-font"),i=$(".container--display-weight"),e=$(".container--display-style"),s=$(".container--typeface").children(".active").attr("data-font"),c=$(".container--typeface").children(".active").attr("data-name"),n=$(".container--styling").children(".active").text(),l=$(".container--styling").children(".italic-active").attr("data-style"),r=$(".container--bg").children(".active").attr("data-color");t.attr({"data-display-font":s,"data-display-weight":n}),t.css({backgroundColor:r}),a.text(c),i.text(n),e.text(l),$(".container--typeface").on("click",".container--typeface-itm",function(){t.attr("data-display-font",$(this).attr("data-font")),$(this).addClass("active").siblings().removeClass("active"),"true"!==$(this).attr("data-italic")?($('.container--styling-itm[data-style="italic"]').addClass("italic-noactive").removeClass("italic-active"),t.attr("data-display-style","normal"),e.empty()):$('.container--styling-itm[data-style="italic"]').removeClass("italic-noactive"),a.text($(this).attr("data-name"))}),$(".container--styling").on("click",".container--styling-itm",function(){var a=$(this).attr("data-weight"),s=$(this).attr("data-style");void 0!==a&&!1!==a&&(t.attr("data-display-weight",$(this).attr("data-weight")),$(this).addClass("active").siblings().removeClass("active"),i.text($(this).text())),void 0===s||!1===s||$(this).hasClass("italic-noactive")||($(this).hasClass("italic-active")?(t.attr("data-display-style","normal"),$(this).removeClass("italic-active"),e.empty()):(t.attr("data-display-style",$(this).attr("data-style")),$(this).addClass("italic-active"),e.text($(this).text())))}),$(".container--bg").on("click",".container--bg-itm",function(){var a=$(this).attr("data-invert");t.css("backgroundColor",$(this).attr("data-color")),$(this).addClass("active").siblings().removeClass("active"),"true"==a?t.css("color","#000"):t.css("color","#fff")})});