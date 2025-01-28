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
                    // Manually handle the navigation without causing the sidebar to move
                    var targetId = event.target.getAttribute('href').split('#')[1];
                    if (targetId) {
                        var targetElement = document.getElementById(targetId);
                        if (targetElement) {
                            targetElement.scrollIntoView({ behavior: 'smooth' });
                        }
                    } else {
                        window.location.href = event.target.href;
                    }
                }
            }
        });
    }
});