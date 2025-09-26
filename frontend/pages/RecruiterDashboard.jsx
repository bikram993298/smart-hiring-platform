import React, { useEffect, useState } from "react";
import { getCandidates } from "../src/services/api";

export default function RecruiterDashboard() {
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getCandidates();
      setCandidates(res.data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Recruiter Dashboard</h1>
      <ul>
        {candidates.map(c => (
          <li key={c.id}>{c.name} - {c.email}</li>
        ))}
      </ul>
    </div>
  );
}
