// Get the search input and search button elements by their ids
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
// Get the theme toggle checkbox element by its id
const themeToggle = document.getElementById('theme-toggle-checkbox');

const circularMenu = document.getElementById('circularMenu');
const circularMenuList = document.getElementById('circularMenuList');
const navbar = document.querySelector('.navbar'); // Select the navbar element

const menuIcon = document.getElementById('menuIcon'); // Get the menu icon element

// Add an event listener for click on the circular menu
circularMenu.addEventListener('click', () => {
    circularMenuList.classList.toggle('show'); // Toggle the visibility of the menu list
    
    // Toggle the menu icon between a plus and a cross
    if (menuIcon.innerText === '+') {
        menuIcon.innerText = '×'; // Set to cross
        menuIcon.style.transform = 'translate(-50%, -50%) rotate(45deg)'; // Rotate the cross
    } else {
        menuIcon.innerText = '+'; // Set back to plus
        menuIcon.style.transform = 'translate(-50%, -50%) rotate(0deg)'; // Reset rotation
    }
});

// Add an event listener for mouseenter on the circular menu
circularMenu.addEventListener('mouseenter', () => {
    if (!circularMenuList.classList.contains('show')) {
        menuIcon.innerText = '+'; // Set to cross when mouse enters
        menuIcon.style.transform = 'translate(-50%, -50%) rotate(45deg)'; // Rotate the cross
    }
    circularMenuList.classList.add('show'); // Add the show class to display the menu items
});

// Close the menu when clicking outside of it
document.addEventListener('click', (event) => {
    if (!circularMenu.contains(event.target) && !circularMenuList.contains(event.target)) {
        circularMenuList.classList.remove('show');
        menuIcon.innerText = '+'; // Reset to plus icon
        menuIcon.style.transform = 'translate(-50%, -50%) rotate(0deg)'; // Reset rotation
    }
});


// Add an event listener for mouseenter on the circular menu
circularMenu.addEventListener('mouseenter', () => {
    circularMenuList.classList.add('show'); // Add the show class to display the menu items
});

// Add an event listener for click on the circular menu
circularMenu.addEventListener('click', () => {
    circularMenuList.classList.toggle('show'); // Toggle the visibility of the menu list
});

// Close the menu when clicking outside of it
document.addEventListener('click', (event) => {
    if (!circularMenu.contains(event.target) && !circularMenuList.contains(event.target)) {
        circularMenuList.classList.remove('show');
    }
});

// Add an event listener for scrolling
window.addEventListener("scroll", function () {
    if (window.scrollY > navbar.clientHeight) {
        circularMenu.style.display = 'block'; // Display circular menu when scrolled past navbar
    } else {
        circularMenu.style.display = 'none'; // Hide circular menu when at the top
        circularMenuList.classList.remove('show'); // Also close the menu list if open
    }
});

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

document.addEventListener("DOMContentLoaded", function () {
    const inputFields = document.querySelectorAll(".contact-form input, .contact-form textarea");

    // This variable will help track whether an input was focused or not
    let inputFocused = false;

    inputFields.forEach((inputField) => {
        inputField.addEventListener("focus", () => {
            inputFocused = true; // Set inputFocused to true when an input gains focus
            inputField.style.backgroundColor = "#4c4c6d";
            inputField.style.color = "#ffe194";
        });

        inputField.addEventListener("blur", () => {
            inputFocused = false; // Set inputFocused to false when an input loses focus
            if (!inputField.value.trim()) {
                inputField.style.backgroundColor = "#ffffff";
                inputField.style.color = "#333333";
            }
        });

        inputField.addEventListener("input", () => {
            // Only apply the color changes if an input was focused
            if (inputFocused) {
                inputField.style.backgroundColor = "#4c4c6d";
                inputField.style.color = "#ffe194";
            }
        });

        // When the user hovers over an input
        inputField.addEventListener("mouseenter", () => {
            // Only apply the hover color change if an input was not focused
            if (!inputFocused) {
                inputField.style.backgroundColor = "#4c4c6d";
                inputField.style.color = "#ffe194";
            }
        });

        // When the user stops hovering over an input
        inputField.addEventListener("mouseleave", () => {
            // Only revert the hover color change if an input was not focused
            if (!inputFocused && !inputField.value.trim()) {
                inputField.style.backgroundColor = "#ffffff";
                inputField.style.color = "#333333";
            }
        });
    });
});

// Add an event listener for the click event on the search button
searchButton.addEventListener('click', function() {
    // Perform the search functionality here
    // For example, you can redirect to a search results page or display search results below
});

// JavaScript to handle the hover effect
const doctorCards = document.querySelectorAll('.doctors');

doctorCards.forEach((card) => {
    card.addEventListener('mouseenter', () => {
        // Disable images and rotate names for other cards
        doctorCards.forEach((otherCard) => {
            if (otherCard !== card) {
                otherCard.classList.remove('active');
            }
        });
        card.classList.add('active');
    });

    card.addEventListener('mouseleave', () => {
        // Reset images and names when not hovering
        doctorCards.forEach((otherCard) => {
            if (otherCard !== card) {
                otherCard.classList.add('active');
            }
        });
    });
});
