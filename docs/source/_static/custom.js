document.addEventListener("DOMContentLoaded", function() {
    // Prevent sidebar from jumping to the clicked item
    var sidebar = document.querySelector('.wy-nav-side');
    if (sidebar) {
        sidebar.addEventListener('click', function(event) {
            // Check if the clicked element is a link
            if (event.target.tagName === 'A') {
                // Prevent the default behavior only if the link is within the sidebar
                if (event.target.closest('.wy-nav-side')) {
                    event.preventDefault();
                    // Manually handle the navigation
                    window.location.href = event.target.href;
                }
            }
        });
    }
});