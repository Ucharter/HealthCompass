import { initializeApp } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-app.js";
import { getStorage, ref, uploadBytes , getDownloadURL }from "https://www.gstatic.com/firebasejs/9.5.0/firebase-storage.js";
import {getFirestore, doc, getDoc, setDoc, collection, addDoc, updateDoc, deleteDoc, deleteField, query, where, getDocs} from "https://www.gstatic.com/firebasejs/9.5.0/firebase-firestore.js";
import { getDatabase,ref as ref2 , onValue, set, remove} from "https://www.gstatic.com/firebasejs/9.5.0/firebase-database.js";
import { getAuth , createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-auth.js";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {

};

// Export Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const db = getFirestore();
const rdb = getDatabase();
const auth = getAuth(app);

export{ storage, db, set,ref, doc, getDoc, uploadBytes, getDownloadURL,  setDoc, collection, 
        addDoc, rdb, updateDoc, remove, deleteDoc, deleteField, query, where, getDocs, app, 
        ref2, onValue,createUserWithEmailAndPassword, signInWithEmailAndPassword, auth, 
        sendPasswordResetEmail}
