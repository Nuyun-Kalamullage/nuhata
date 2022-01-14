/* import notesapi from "./NotesApi.js"

 console.log(notesapi.getallNote()); */

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.3/firebase-app.js";
import { getAuth,signOut} from "https://www.gstatic.com/firebasejs/9.6.3/firebase-auth.js";
import { getFirestore, doc, getDocs, collection, where, query, setDoc, addDoc, updateDoc, deleteDoc} from "https://www.gstatic.com/firebasejs/9.6.3/firebase-firestore.js";

var firebaseConfig = {
    apiKey: "AIzaSyDFCmq4xFzvcGDZsyt9eNKqMA1PcnGSoDA",
    authDomain: "nuhata.firebaseapp.com",
    projectId: "nuhata",
    storageBucket: "nuhata.appspot.com",
    messagingSenderId: "762549103905",
    appId: "1:762549103905:web:8acb9a10b245e043d5e260",
    measurementId: "G-0J1BY3BXNC"
};
// Initialize Firebase
const firebaseapp = initializeApp(firebaseConfig);
const fireDB = getFirestore();

var userSession = sessionStorage.getItem("firebase:authUser:AIzaSyDFCmq4xFzvcGDZsyt9eNKqMA1PcnGSoDA:[DEFAULT]");
const  userDetails = JSON.parse(userSession);
