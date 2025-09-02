document.addEventListener('DOMContentLoaded', function() {
    const hamburgerIcon = document.querySelector('.hamburger-icon');
    const sidebar = document.querySelector('.sidebar'); // Get sidebar element
    const body = document.body;

    if (hamburgerIcon) {
        hamburgerIcon.addEventListener('click', function(event) {
            event.stopPropagation(); // Prevent this click from immediately closing the sidebar
            body.classList.toggle('sidebar-open');
        });
    }

    // Close sidebar when clicking outside
    document.addEventListener('click', function(event) {
        // Check if the sidebar is open AND the click is outside the sidebar AND not the hamburger icon
        if (body.classList.contains('sidebar-open') &&
            !sidebar.contains(event.target) &&
            !hamburgerIcon.contains(event.target)) {
            body.classList.remove('sidebar-open');
        }
    });
});