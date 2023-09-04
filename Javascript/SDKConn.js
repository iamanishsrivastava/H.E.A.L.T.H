// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-analytics.js";
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
  measurementId: "G-K4SWEPK6X2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// init firebase app
initializeApp(firebaseConfig)

// init services
const db = getFirestore()


// Assume you have a search input field with id "searchInput" and a button with id "searchButton" in your HTML

const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const resultsDiv = document.getElementById('resultsDiv'); // This is where you'll display the search results

// Add an event listener for the search button click
searchButton.addEventListener('click', () => {
    const searchTerm = searchInput.value.trim().toLowerCase();

    // Create a reference to the "Medicine" collection
    const medicineRef = collection(db, 'Medicine');

    // Construct a query to search for the medicine by name
    const query = query(medicineRef, where('Name', '==', searchTerm));

    // Execute the query
    getDocs(query)
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
                    resultItem.textContent = `Name: ${medicineData.Name}, Symptoms: ${medicineData.Symptoms}, Usage: ${medicineData.Usage}`;
                    resultsDiv.appendChild(resultItem);
                });
            }
        })
        .catch((error) => {
            console.error('Error searching for medicine:', error);
        });
});
