if ($('.fixed-footer:hover').length != 0) {
    var iframe1 = $('#footer');
    var iframe1Doc = iframe1.contents()[0];
    $(iframe1Doc).css('background-color', 'var(--primary-color)');

}

$(document).mousemove(function () {
    if ($("footer:hover").length != 0) {
        console.log("Mouse is Over the DIV Element.");
        $('footer').css('background-color', 'blue');

    } else {
        console.log("Mouse is Outside the DIV Element.");
        $('footer').css('background-color', 'green');

    }
});