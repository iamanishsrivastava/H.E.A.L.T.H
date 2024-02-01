// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-analytics.js";
import { getFirestore, collection ,query, where, getDocs } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-firestore.js";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// Official Firebase Database - v1.0
const firebaseConfig = {
    apiKey: "AIzaSyD4o1v6UK1kdDEXqNr6hfAv-qJFS4FnonY",
    authDomain: "medicare-e4720.firebaseapp.com",
    projectId: "medicare-e4720",
    storageBucket: "medicare-e4720.appspot.com",
    messagingSenderId: "709271768982",
    appId: "1:709271768982:web:49cc356f5725f0950a97b7",
    measurementId: "G-XWM48C3Z7D"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// init services
const db = getFirestore()

// Assume you have a search input field with id "searchInput" and a button with id "searchButton" in your HTML
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const resultsDiv = document.getElementById('resultsDiv'); // This is where you'll display the search results

searchButton.addEventListener('click', () => {
    const searchTerm = searchInput.value.trim().toLowerCase();

    // Create a reference to the "medicine" collection
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
                    let capitalizedName="", capitalizedSymptoms="", capitalizedUsage="";
                    const medicineData = doc.data();

                    const resultItem = document.createElement('div');
                    resultItem.classList.add('highlight-text'); // Add a CSS class
                    
                    // Conditions to deal with null values of fields and print Not Found error
                    // then Capitalize the first letter of the name and symptoms
                    if(medicineData.Name!=null){
                        capitalizedName = capitalizeFirstLetter(medicineData.Name);
                        resultItem.innerHTML+=`Name: ${capitalizedName}<br>`;
                    }
                    else
                        resultItem.innerHTML+=`Name: Not found<br>`;

                    if(medicineData.Symptoms!=null){
                        capitalizedSymptoms = capitalizeFirstLetter(medicineData.Symptoms);
                        resultItem.innerHTML+=`Symptoms: ${capitalizedSymptoms}<br>`;
                    }
                    else
                        resultItem.innerHTML+=`Symptoms: Not found<br>`;

                    if(medicineData.Usage!=null){
                        capitalizedUsage = capitalizeFirstLetter(medicineData.Usage);
                        resultItem.innerHTML+=`Usage: ${capitalizedUsage}<br>`;
                    }
                    else
                        resultItem.innerHTML+=`Usage: Not found<br>`;

                    resultsDiv.appendChild(resultItem);
                });
            }
        })
        .catch((error) => {
            console.error('Error searching for medicine:', error);
        });
});

function capitalizeFirstLetter(string) {
    // Check if the input string is undefined, null, or empty
    if (!string) {
        return ""; // Return an empty string or handle the case as needed
    }
    // Capitalize the first letter of the input string
    return string.charAt(0).toUpperCase() + string.slice(1);
}