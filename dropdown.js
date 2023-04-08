$(document).ready(function () {
    $('#dropdown-menu').css('display', 'none');
    $('#dropdown-toggle').click(function () {
      // Toggle the visibility of the dropdown menu
      // $('#dropdown-menu').toggle();

      // Toggle the icon between hamburger and X
      if ($(window).width() <= 720) {
        $(this).text(function (i, text) {
          if (text === "\u2630") {
            $('#dropdown-menu').css('display', 'flex');
            return "\u2715";
          } else {
            $('#dropdown-menu').css('display', 'none');
            return "\u2630";
          }
        });
      } else {

      }

    });

  });
  $(window).resize(function () {
    if ($(window).width() >= 720) {
      $('#dropdown-menu').css('display', 'none');
    }
  });