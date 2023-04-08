$('.accordion').on('click', '.accordion-control', function (e) { // When clicked
  e.preventDefault();                    // Prevent default action of button
  $(this)                                // Get the element the user clicked on
    .next('.accordion-panel')            // Select following panel 
    .not(':animated')                    // If it is not currently animating
    .slideToggle();                      // Use slide toggle to show or hide it
});


$('.tab-list').each(function () {                   // Find lists of tabs
  var $this = $(this),                            // Store this list
    $tab = $this.find('li.active'),             // Get the active list item
    $link = $tab.find('a'),                     // Get link from active tab
    $panel = $($link.attr('href'));             // Get active panel

  $this.on('click', '.tab-control', function (e) { // When click on a tab
    e.preventDefault();                           // Prevent link behavior
    var $link = $(this),                          // Store the current link
      id = this.hash;                           // Get href of clicked tab 


    if (id && !$link.is('.active')) {             // If not currently active
      $panel.removeClass('active');               // Make panel inactive
      $tab.removeClass('active');                 // Make tab inactive

      $panel = $(id).addClass('active');          // Make new panel active
      $tab = $link.parent().addClass('active');   // Make new tab active 
      var activeElement = $(".tab-panel.active");
      var clubLogo = $('#clubLogo');

      if (activeElement.length) {
        var activeElementId = activeElement.attr("id");
        console.log(activeElementId);
        if(activeElementId === "tab-4"){
          console.log("Match");
          clubLogo.attr('src', '/grossmont/computer-science-and-cybersecurity-organization/media/Logo.png');
        }else{
          clubLogo.attr('src', '/media/District-Logo-Icon-4canvas.png');
        }
      }
    }
  });

});