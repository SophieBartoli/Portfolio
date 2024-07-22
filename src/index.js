import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


/*
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
const cong = initializeApp(firebaseConfig);

export default cong;

// init services
const db = getFirestore()


// collection ref
const colRef = collection(db, 'Messages')

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




