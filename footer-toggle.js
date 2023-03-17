$(document).ready(function() {
    $(".fixed-footer").css("display", "none");
  });

$(window).scroll(function () {
    // console.log($(this).scrollTop() + $(window).height());
    // console.log($(this).scrollTop());
    if ($(window).scrollTop() + $(window).height() >= $(document).height() - 3) {
        console.log("You have reached the bottom!");
        $(".fixed-footer").css("display", "initial");
    }
    else if ($(this).scrollTop() == 0) {
        $(".fixed-footer").css("display", "none");
    }
    else {
        $(".fixed-footer").css("display", "none");
    }
});