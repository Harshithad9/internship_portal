document.addEventListener('DOMContentLoaded', function() {
    const viewButtons = document.querySelectorAll('.view-btn');
    
    viewButtons.forEach(button => {
        button.addEventListener('click', function() {
            const card = this.closest('.internship-card');
            card.classList.toggle('active');
            
            // Change button text based on state
            if (card.classList.contains('active')) {
                this.textContent = 'Hide Details';
            } else {
                this.textContent = 'View Details';
            }
        });
    });
});