// Get the search input and search button elements by their ids
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
// Get the theme toggle checkbox element by its id
const themeToggle = document.getElementById('theme-toggle-checkbox');

// Add an event listener for the "change" event on the theme toggle
themeToggle.addEventListener('change', function() {
    // Check if the toggle checkbox is checked
    if (this.checked) {
        // Add the brown-teal theme class to the body
        document.body.classList.add('brown-teal');
        // Remove the navy-blue-light theme class from the body
        document.body.classList.remove('navy-blue-light');
    } else {
        // Add the navy-blue-light theme class to the body
        document.body.classList.add('navy-blue-light');
        // Remove the brown-teal theme class from the body
        document.body.classList.remove('brown-teal');
    }
});

// Add an event listener for the "keydown" event on the search input
searchInput.addEventListener('keydown', function(event) {
    // Check if the pressed key is "Enter" (key code 13)
    if (event.keyCode === 13) {
        // Trigger the search button click
        searchButton.click();
        // Clear the search input field - stopped currently
        // searchInput.value = '';

    }
});

// Add an event listener for the click event on the search button
searchButton.addEventListener('click', function() {
    // Perform the search functionality here
    // For example, you can redirect to a search results page or display search results below
});