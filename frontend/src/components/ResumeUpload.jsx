import React, { useState } from "react";
import { addCandidate } from "../services/api";

export default function ResumeUpload() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [resumeUrl, setResumeUrl] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addCandidate({ name, email, resumeUrl });
    alert("Candidate added!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
      <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
      <input placeholder="Resume URL" value={resumeUrl} onChange={e => setResumeUrl(e.target.value)} />
      <button type="submit">Upload</button>
    </form>
  );
}
