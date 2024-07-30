
import { initializeApp } from "firebase/app";
import {
    getFirestore
  } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

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
export const storage = getStorage(app);

export default getFirestore();

