// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
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

// init services
const db = getFirestore();

// Assume you have a search input field with id "searchInput" and a button with id "searchButton" in your HTML
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const medName = document.getElementById('medName'); // This is where you'll display the medicine name
const medUsage = document.getElementById('medUsage'); // This is where you'll display the medicine usage
const medSym = document.getElementById('medSym'); // This is where you'll display the medicine symptoms
const medAdvice = document.getElementById('medAdvice'); // This is where you'll display the search results

// variable for random image 
let randomImageElement = document.getElementById('randomImage');

// eventlistener for search button
searchButton.addEventListener('click', () => {
    const searchTerm = searchInput.value.trim().toLowerCase();

    // Create a reference to the "medicine" collection
    const medicineRef = collection(db, 'medicine');

    // Construct a query to search for the medicine by name or symptom (not yet implemented)
    const medicineQuery = query(medicineRef, where('Name', '==', searchTerm));

    // Execute the query
    getDocs(medicineQuery)
        .then((querySnapshot) => {
            // Clear previous search results
            
            medName.innerHTML = '';
            medUsage.innerHTML = '';
            medSym.innerHTML = '';
            medAdvice.innerHTML = '';

            // Check if any documents match the search term
            if (querySnapshot.size === 0) {
                medName.innerHTML = "No results found for '"+searchInput.value+"'.";
                medUsage.innerHTML = 'No results found.';
                medSym.innerHTML = 'No results found.';
                medAdvice.innerHTML = 'No results found.';
            } else {

                // Event listener for the search button
                document.getElementById('searchButton').addEventListener('click', updateImage(medName));

                // Display the search results   
                querySnapshot.forEach((doc) => {
                    let capitalizedName="", capitalizedSymptoms="", capitalizedUsage="", capitalizedAdvice="";
                    const medicineData = doc.data();
                    
                    // Conditions to deal with null values of fields and print Not Found error then Capitalize the first letter of the name and symptoms
                    if(medicineData.Name!=null){
                        capitalizedName = capitalizeFirstLetter(medicineData.Name);
                        medName.innerHTML+=`Name: ${capitalizedName}<br>`;
                    }
                    else
                        medName.innerHTML+=`No results found for '`+{searchInput}+`'.<br>`;

                    if(medicineData.Symptoms!=null){
                        capitalizedSymptoms = capitalizeFirstLetter(medicineData.Symptoms);
                        medSym.innerHTML+=`${capitalizedSymptoms}<br>`;
                    }
                    else
                        medSym.innerHTML+=`Not found<br>`;

                    if(medicineData.Usage!=null){
                        capitalizedUsage = capitalizeFirstLetter(medicineData.Usage);
                        medUsage.innerHTML+=`${capitalizedUsage}<br>`;
                    }
                    else
                        medUsage.innerHTML+=`Not found<br>`;

                    if(medicineData.Advice!=null){
                        capitalizedAdvice = capitalizeFirstLetter(medicineData.Advice);
                        medAdvice.innerHTML+=`${capitalizedAdvice}<br>`;
                    }
                    else
                        medAdvice.innerHTML+=`Experts advice not available at the moment, please try again later.<br>`;
                });
            }
        })
        .catch((error) => {
            console.error('Error searching for medicine:', error);
        });
});

// Function to update image source based on search term
function updateImage(searchTerm) {
    let medImage = document.getElementById('med-image');
 
    // If search term is empty, set default image
    if (!searchTerm) {
       medImage.src = "img/medicine-info-image.jpg";
       return;
    }
 
    /// Fetch a medicine-related image from Unsplash based on the search term
    fetch(`https://source.unsplash.com/featured/156x156/?medicine,${searchTerm}`)
    .then(response => {
        // Check if the response is redirected to an image URL
        if (response.redirected) {
            // Update the src attribute of the image element with the redirected URL
            medImage.src = response.url;
        } else {
            console.error('Unexpected response:', response);
        }
    })
    .catch(error => {
        console.error('Error fetching image:', error);
    });
}

// capitalizing first letters of the string
function capitalizeFirstLetter(string) {
    // Check if the input string is undefined, null, or empty
    if (!string) {
        return ""; // Return an empty string or handle the case as needed
    }
    // Capitalize the first letter of the input string
    return string.charAt(0).toUpperCase() + string.slice(1);
}