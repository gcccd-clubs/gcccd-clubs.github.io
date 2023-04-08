$("#footer").on("load", function () {
    var header = $('#header');
    var headerI = header.contents()[0];
    var activePage = window.top.$('html').contents();

    var footer = $('#footer');
    var footerI = footer.contents()[0];
    var color = $(headerI).find("header").css("background-color");
    console.log("col " + color);

    $(headerI).find('.icon').click(function () {
        event.preventDefault();
        //Set the icon id to a variable

        var icon = $(headerI).find('.icon');
        var logo = $(headerI).find('#clubLogo');

        //Toggle between the two images, this checks if the image is equal to moon.png (=== operator), then you change it to sun.png
        if (icon.attr('src') === '/media/moon.png') {
            darkmode();
            //But if the icon is not moon.png, THEN we set it to moon, and change all the properties that we changed earlier back
        } else {
            lightmode();
        }

        //*** FUNCTIONS TO LESSEN CODE ***/
        function darkmode() {
            icon.attr('src', '/media/whitesun.png');
            logo.attr('src', '/grossmont/computer-science-and-cybersecurity-organization/media/dark_adjusted logo.png')

            $('body').css('background-color', 'var(--primary-color)');
            var invertedColor = invert(componentToHex(color));
            $(headerI).find('header, #dropdown-menu a').css('background-color', '#313338');
            $(headerI).find('.clubName a, .tab , #dropdown-toggle').css('color', 'white');
            activePage.css('background-color', 'var(--secondary-color)');

            activePage.find('h1, h2, h3, h4, p, a, li').css('color', 'var(--primary-color)');

            $(footerI).find('body, footer').css('background-color', 'var(--secondary-color)');//secondary color = #171717 (black)
            $(footerI).find('p, a').css('color', 'white');//primary color = white
        }
        function lightmode() {
            icon.attr('src', '/media/moon.png');
            logo.attr('src', '/grossmont/computer-science-and-cybersecurity-organization/media/adjusted logo.png')

            $('body').css('background-color', 'var(--primary-color)');
            $(headerI).find('header, #dropdown-menu a').css('background-color', color);
            $(headerI).find('.clubName a, .tab , #dropdown-toggle').css('color', 'var(--secondary-color)');

            activePage.find('h1, h2, h3, h4, p, a, li').css('color', 'var(--secondary-color)');

            $(footerI).find('body, footer').css('background-color', 'var(--primary-color)');
            $(footerI).find('p, a').css('color', 'var(--secondary-color)');
        }
    });
});

function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

function invert(rgb) {
    rgb = [].slice.call(arguments).join(",").replace(/rgb\(|\)|rgba\(|\)|\s/gi, '').split(',');
    for (var i = 0; i < rgb.length; i++) rgb[i] = (i === 3 ? 1 : 255) - rgb[i];
    return rgbToHex(rgb[0], rgb[1], rgb[2]);
}