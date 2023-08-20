import React, { useEffect } from 'react';
import './App.css';
import { DisplayCard } from './modules/display-card';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import { DetailPage } from './modules/details-page';


function App() {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      window.addEventListener("load", () => {
        navigator.serviceWorker.register("/service-worker.js", { scope: "/" }).then((registration) => {
          console.log("Service worker registered: ", registration);
        }).catch((registrationError) => {
          console.log("Service worker registration failed: ", registrationError);
        });
      });
    }
  }, []);
  return (
    <div className="App"> 
    <Router>
      <Routes>
      <Route path="/" element={<DisplayCard />} />
        <Route path="/movie/:movieId" element={<DetailPage />} />
      </Routes>
    </Router>
   
    </div>
  );
}

export default App;
