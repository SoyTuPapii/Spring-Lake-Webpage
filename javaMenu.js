// Script to Add a mobile dropdown menu

document.addEventListener("DOMContentLoaded", function() {
    // Select the element that will toggle the dropdown menu (usually a button or icon)
    const menuToggle = document.getElementById("menuToggle");
    
    // Select the dropdown menu element that will be shown/hidden
    const dropdownMenu = document.getElementById("dropdownMenu");

    // Add a click event listener to the toggle button
    menuToggle.addEventListener("click", function() {
        // Toggle the "show" class on the dropdown menu
        // This will either show or hide the menu depending on its current state
        dropdownMenu.classList.toggle("show");
    });
});