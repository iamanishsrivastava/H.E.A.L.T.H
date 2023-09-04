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
