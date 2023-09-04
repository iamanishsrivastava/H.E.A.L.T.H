// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-analytics.js";
import { getFirestore, collection ,query, where, getDocs } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-firestore.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBli_Me6b_KfAlyyWKB2sF2NEJISY9PvII",
  authDomain: "medicare-f3618.firebaseapp.com",
  projectId: "medicare-f3618",
  storageBucket: "medicare-f3618.appspot.com",
  messagingSenderId: "464603648074",
  appId: "1:464603648074:web:4c930223092d5360d056b3",
//   measurementId: "G-K4SWEPK6X2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// // init firebase app
// initializeApp(firebaseConfig)

// init services
const db = getFirestore()

// collection ref
const colRef = collection(db, 'Medicine')


// Assume you have a search input field with id "searchInput" and a button with id "searchButton" in your HTML

const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const resultsDiv = document.getElementById('resultsDiv'); // This is where you'll display the search results

searchButton.addEventListener('click', () => {
    const searchTerm = searchInput.value.trim().toLowerCase();

    // Create a reference to the "Medicine" collection
    const medicineRef = collection(db, 'Medicine');

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
                    resultItem.innerHTML = `Name: ${capitalizedName}<br>Symptoms: ${capitalizedSymptoms}<br>Usage: ${medicineData.Usage}`;
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
