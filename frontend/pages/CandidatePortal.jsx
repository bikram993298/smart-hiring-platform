import React from "react";
import { Link } from "react-router-dom";

export default function CandidatePortal() {
  return (
    <div>
      <h1>Candidate Portal</h1>
      <ul>
        <li><Link to="/candidate/upload">Upload Resume</Link></li>
        <li><Link to="/candidate/coding-test">Coding Test</Link></li>
        <li><Link to="/candidate/proctoring">Proctoring</Link></li>
      </ul>
    </div>
  );
}
