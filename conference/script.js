document.addEventListener("DOMContentLoaded", function() {
    // Get all navigation links
    var navLinks = document.querySelectorAll(".nav-link");
    
    // Get all content sections
    var contentSections = document.querySelectorAll(".content-section");

    // Add click event listener to each navigation link
    navLinks.forEach(function(link) {
        link.addEventListener("click", function(event) {
            event.preventDefault(); // Prevent default link behavior
            var targetId = this.getAttribute("data-target"); // Get the target content id from data attribute

            // Hide all content sections
            contentSections.forEach(function(section) {
                section.style.display = "none";
            });

            // Display the target content section
            document.getElementById(targetId).style.display = "block";
        });
    });
});
