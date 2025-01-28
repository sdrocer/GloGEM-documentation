document.addEventListener("DOMContentLoaded", function() {
    // Prevent sidebar from jumping to the clicked item
    var sidebar = document.querySelector('.wy-nav-side');
    if (sidebar) {
        sidebar.addEventListener('click', function(event) {
            event.preventDefault();
        });
    }
});