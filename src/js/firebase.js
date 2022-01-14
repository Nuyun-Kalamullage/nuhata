
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.3/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.3/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDFCmq4xFzvcGDZsyt9eNKqMA1PcnGSoDA",
    authDomain: "nuhata.firebaseapp.com",
    projectId: "nuhata",
    storageBucket: "nuhata.appspot.com",
    messagingSenderId: "762549103905",
    appId: "1:762549103905:web:8acb9a10b245e043d5e260",
    measurementId: "G-0J1BY3BXNC"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
