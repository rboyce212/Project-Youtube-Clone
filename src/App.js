import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home.js";
import About from "./components/About/About.js";
import NavBar from "./components/NavBar/NavBar.js";
import PlayVideo from "./components/PlayVideo/PlayVideo.js";

function App() {
  const apiUrl = process.env.REACT_APP_API_BASE_URL;
  const apiKey = process.env.REACT_APP_API_KEY;
  
  return (
    <div className="App">
      <div>
        <Router>
          <NavBar />
          <Routes>
            <Route
              path="/"
              element={<Home apiUrl={apiUrl} apiKey={apiKey} />}
            />
            <Route path="/about" element={<About />} />
            <Route
              path="/videos/:id"
              element={<PlayVideo apiUrl={apiUrl} apiKey={apiKey} />}
            />
          </Routes>
        </Router>
      </div>
      <main></main>
    </div>
  );
}

export default App;
