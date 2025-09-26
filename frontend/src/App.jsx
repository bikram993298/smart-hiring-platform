import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import CandidatePortal from "../pages/CandidatePortal";
import RecruiterDashboard from "../pages/RecruiterDashboard";
import Login from "./components/Login";
import ResumeUpload from "./components/ResumeUpload";
import CodingTest from "./components/CodingTest";
import Proctoring from "./components/Proctoring";

function App() {
  const isLoggedIn = !!localStorage.getItem("token"); // Simple auth check

  return (
    <Router>
      <Routes>

        <Route path="/" element={<CodingTest />} />
        {/* Public route */}
        <Route path="/login" element={<Login />} />

        {/* Protected routes */}
        <Route
          path="/candidate"
          element={isLoggedIn ? <CandidatePortal /> : <Navigate to="/login" />}
        />
        <Route
          path="/recruiter"
          element={isLoggedIn ? <RecruiterDashboard /> : <Navigate to="/login" />}
        />

        {/* Candidate sub-routes */}
        <Route
          path="/candidate/upload"
          element={isLoggedIn ? <ResumeUpload /> : <Navigate to="/login" />}
        />
        <Route
          path="/candidate/coding-test"
          element={isLoggedIn ? <CodingTest /> : <Navigate to="/login" />}
        />
        <Route
          path="/candidate/proctoring"
          element={isLoggedIn ? <Proctoring /> : <Navigate to="/login" />}
        />

        {/* Default route */}
        <Route path="*" element={<Navigate to={isLoggedIn ? "/candidate" : "/login"} />} />
      </Routes>
    </Router>
  );
}

export default App;
