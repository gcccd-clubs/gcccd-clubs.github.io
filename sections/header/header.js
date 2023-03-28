//Prepares the document (check for jQuery). Remember to load jQuery in the html file BEFORE running any scripts with jQuery.
function setHeaderText(headerText) {
    $(document).ready(function () {
        var urls = ["/about.html", "/alumni.html", "/contact.html"];

        // Get the first header iframe element with the id of header
        var header = $('#header');
        //get the contents of this id, since this id is connected to an iframe, we want the iframe, not the id of the iframe
        var headerI = header.contents()[0];
        //Sets the active page, the html page that is in the URL bar of your browser (since you remember that header and footer are their own html files, but its URL is not loaded in the URL bar)
        var currentPath = location.pathname; // e.g., "/folder/subfolder/index.html"
        var parentPath = currentPath.substring(0, currentPath.lastIndexOf('/')); // e.g., "/folder/subfolder"
        var parentDir = parentPath.substring(parentPath.lastIndexOf('/') + 1);
        console.log(currentPath + '\t' + parentPath + '\t' + parentDir);

        $(headerI).find('.clubName a').text(headerText);
        $(headerI).find('.clubName a').attr("href", parentPath + "/index.html");


        $(headerI).find('nav a').each(function (index, element) {
            var text = $(element).text();
            console.log(text);
            $(element).attr("href", parentPath + urls[index]);
        });
        console.log(parentPath + urls[0]);

    });
}