// Form validation and table management
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('studentForm');
    const tableBody = document.getElementById('tableBody');
    let studentCounter = 1;

    // Enhanced form submission with validation
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get Asc
