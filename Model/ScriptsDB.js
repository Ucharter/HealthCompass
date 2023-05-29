import { initializeApp } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-app.js";
import { getStorage, ref, uploadBytes , getDownloadURL }from "https://www.gstatic.com/firebasejs/9.5.0/firebase-storage.js";
import {getFirestore, doc, getDoc, setDoc, collection, addDoc, updateDoc, deleteDoc, deleteField, query, where, getDocs} from "https://www.gstatic.com/firebasejs/9.5.0/firebase-firestore.js";
import { getDatabase,ref as ref2 , onValue, set, remove} from "https://www.gstatic.com/firebasejs/9.5.0/firebase-database.js";
import { getAuth , createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-auth.js";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBfVMTvk37mEsYBUwRWIEGdY52WUnHRpAo",
  authDomain: "liquor-store-9c0d9.firebaseapp.com",
  databaseURL: "https://liquor-store-9c0d9-default-rtdb.firebaseio.com",
  projectId: "liquor-store-9c0d9",
  storageBucket: "liquor-store-9c0d9.appspot.com",
  messagingSenderId: "743260586080",
  appId: "1:743260586080:web:181791566ebd34a3878305",
  measurementId: "G-W8YWBF13T7"
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
