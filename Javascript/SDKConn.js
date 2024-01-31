// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-analytics.js";
import { getFirestore, collection ,query, where, getDocs } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-firestore.js";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA37muoW74fX8Az6cMzde-KKMTK1MUKBeQ",
    authDomain: "medicare-602b5.firebaseapp.com",
    projectId: "medicare-602b5",
    storageBucket: "medicare-602b5.appspot.com",
    messagingSenderId: "260736167415",
    appId: "1:260736167415:web:dd175d7bcc15cbffba52f2",
    measurementId: "G-19ZX6LNE4R"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// init services
const db = getFirestore()

// collection ref
const colRef = collection(db, 'medicine')


// Assume you have a search input field with id "searchInput" and a button with id "searchButton" in your HTML

const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const resultsDiv = document.getElementById('resultsDiv'); // This is where you'll display the search results

searchButton.addEventListener('click', () => {
    const searchTerm = searchInput.value.trim().toLowerCase();

    // Create a reference to the "Medicine" collection
    const medicineRef = collection(db, 'medicine');

    // Construct a query to search for the medicine by name or symptom
    const medicineQuery = query(medicineRef, where('Name', '==', searchTerm));

    // Execute the query
    getDocs(medicineQuery)
        .then((querySnapshot) => {
            // Clear previous search results
            resultsDiv.innerHTML = '';

            // Check if any documents match the search term
            if (querySnapshot.size === 0) {
                resultsDiv.innerHTML = 'No results found.';
            } else {
                // Display the search results   
                querySnapshot.forEach((doc) => {
                    const medicineData = doc.data();
                    const resultItem = document.createElement('div');
                    resultItem.classList.add('highlight-text'); // Add a CSS class
                    // Capitalize the first letter of the name and symptoms
                    const capitalizedName = capitalizeFirstLetter(medicineData.Name);
                    const capitalizedSymptoms = capitalizeFirstLetter(medicineData.Symptoms);
                    const capitalizedUsage = capitalizeFirstLetter(medicineData.Usage);
                    resultItem.innerHTML = `Name: ${capitalizedName}<br>Symptoms: ${capitalizedSymptoms}<br>Usage: ${capitalizedUsage}`;
                    resultsDiv.appendChild(resultItem);
                });
            }
        })
        .catch((error) => {
            console.error('Error searching for medicine:', error);
        });
});

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
