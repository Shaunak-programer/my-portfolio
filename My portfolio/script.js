// ===========================================
// 1. BACKGROUND THEME SWITCHING LOGIC (NEW)
// ===========================================

// Function to apply the chosen background class
function setBackground(theme) {
    // Get the body element
    const body = document.body;
    
    // Define all possible theme classes
    const themeClasses = ['bg-dark', 'bg-live', 'bg-custom']; 
    
    // Clear any existing background classes
    body.classList.remove(...themeClasses);

    // Apply the new class based on the theme
    if (theme === 'dark') {
        body.classList.add('bg-dark');
    } else if (theme === 'live') {
        body.classList.add('bg-live');
    } else if (theme === 'custom') {
        body.classList.add('bg-custom');
    }
    // If theme is 'default', no class is added (relies on default CSS)
    
    // Save the user's preference to their browser's storage
    localStorage.setItem('portfolioTheme', theme);
}

// Event listener to run when the page loads
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Check for and apply a saved theme from the last visit
    const savedTheme = localStorage.getItem('portfolioTheme');
    if (savedTheme) {
        setBackground(savedTheme);
    }
    
    // 2. Attach listeners to the background control buttons
    const buttons = document.querySelectorAll('.background-controls button');
    
    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            const theme = e.target.getAttribute('data-bg');
            if (theme) {
                setBackground(theme);
            }
        });
    });


// ===========================================
// 2. SMOOTH SCROLLING LOGIC (ORIGINAL CODE)
// ===========================================

    // Function for smooth scrolling when clicking navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            // Only apply to links that point to an ID on the same page
            if (this.getAttribute('href').length > 1) { 
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

}); // End of DOMContentLoaded