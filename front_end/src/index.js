import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import RegisterPage from "./Components/Registration/RegisterPage";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./Components/Home/HomePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/NavBar/Navbar";
import SummaryPage from "./Components/SummaryPage";
import StudyJourneyPage from "./Components/StudyJourneyPage";

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Navbar></Navbar>
    <Router>
      <Routes>
        <Route path="" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/SummaryPage" element={<SummaryPage />} />
        <Route path="/StudyJourneyPage" element={<StudyJourneyPage />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
