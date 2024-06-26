
import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
import {
    getFirestore
  } from 'firebase/firestore';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-geMLGEIQWRHAcY-RVgR_WlOP1b8BMgY",
  authDomain: "portfolio-64336.firebaseapp.com",
  projectId: "portfolio-64336",
  storageBucket: "portfolio-64336.appspot.com",
  messagingSenderId: "49540685711",
  appId: "1:49540685711:web:72dd8bf5ae82b3477335fa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default getFirestore();

/*
// get collection data
getDocs(colRef)
  .then(snapshot => {
    // console.log(snapshot.docs)
    let messages = []
    snapshot.docs.forEach(doc => {
      messages.push({ ...doc.data(), id: doc.id })
    })
    console.log(messages)
  })
  .catch(err => {
    console.log(err.message)
  })
    */