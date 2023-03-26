//Prepares the document (check for jQuery). Remember to load jQuery in the html file BEFORE running any scripts with jQuery.
$(document).ready(function () {

    // Get the first header iframe element with the id of header
    var header = $('#header');
    //get the contents of this id, since this id is connected to an iframe, we want the iframe, not the id of the iframe
    var headerI = header.contents()[0];
    //Sets the active page, the html page that is in the URL bar of your browser (since you remember that header and footer are their own html files, but its URL is not loaded in the URL bar)
    var activePage = window.top.$('html').contents();

    //We get the contents of the footer the same way, since we also want to change its value when we toggle dark/light mode
    var footer = $('#footer');
    var footerI = footer.contents()[0];
    //We find the icon id, which is the light/dark mode icon, and set a function that runs whenever it is clicked
    $(headerI).find('#icon').click(function () {
        event.preventDefault();
        //Set the icon id to a variable
        var icon = $(headerI).find('#icon');

        //Toggle between the two images, this checks if the image is equal to moon.png (=== operator), then you change it to sun.png
        if (icon.attr('src') === '/grossmont/computer-science-and-cybersecurity-organization/media/moon.png') {
            icon.attr('src', '/grossmont/computer-science-and-cybersecurity-organization/media/sun.png');

            //sets the body of the header to #333333
            //$('body').css('background-color', '#333333');
            //sets the header element of the header.html file to #333333;
            //$(headerI).find('header').css('background-color', '#333333');
            
            activePage.css('background-color', 'var(--secondary-color)'); 
            //not sure about the most optimal way to do this, but it works

            activePage.find('h1').css('color','var(--primary-color)'); 
            activePage.find('h2').css('color','var(--primary-color)'); 
            activePage.find('h3').css('color','var(--primary-color)'); 
            activePage.find('h4').css('color','var(--primary-color)'); 
            activePage.find('p').css('color','var(--primary-color)');

            activePage.find('a').css('color','var(--primary-color)'); 
            activePage.find('li').css('color','var(--primary-color)'); 
            

            //@suldanaa see if you can select the footer and change its color, also change the text color of the header and footer by seeing the syntax pattern of this code
            //and target the buttons to change its font color
            $(footerI).find('footer').css('background-color', 'var(--secondary-color)');//secondary color = #171717 (black)
            $(footerI).find('p').css('color', 'var(--primary-color)');//primary color = white
            $(footerI).find('a').css('color', 'var(--primary-color)');

        //But if the icon is not moon.png, THEN we set it to moon, and change all the properties that we changed earlier back
        
        } else {
            icon.attr('src', '/grossmont/computer-science-and-cybersecurity-organization/media/moon.png');

            //$('body').css('background-color', 'var(--primary-color)'); 
            activePage.css('background-color', 'var(--primary-color)');
            activePage.find('h1').css('color','var(--secondary-color)'); 
            activePage.find('h2').css('color','var(--secondary-color)'); 
            activePage.find('h3').css('color','var(--secondary-color)'); 
            activePage.find('h4').css('color','var(--secondary-color)'); 
            activePage.find('p').css('color','var(--secondary-color)');
            
            activePage.find('a').css('color','var(--secondary-color)'); 
            activePage.find('li').css('color','var(--secondary-color)'); 
            

            $(footerI).find('body').css('background-color', 'var(--primary-color)');
            //@suldanaa see if you can select the footer and header and change the color back, and the font color
            $(footerI).find('footer').css('background-color', 'var(--primary-color)');
            $(footerI).find('p').css('color', 'var(--secondary-color)');
            $(footerI).find('a').css('color', 'var(--secondary-color)');
        }
    });
});