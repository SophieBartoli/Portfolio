import "./App.css";
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Apropos from "./Components/Apropos";
import Competences from "./Components/Competences";
import Projets from "./Components/Projets";
import Contact from "./Components/Contact"; 


const App = () => {
    return (
        <React.StrictMode>
            <Router>
              <Header />
                <Apropos />
                <Competences/>
                <Projets/>
                <Contact/>
              <Footer />
            </Router>
        </React.StrictMode>
    );
};

export default App;