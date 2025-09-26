import React, { useState } from "react";
import MonacoEditor from "@monaco-editor/react";

export default function CodingTest() {
  const [code, setCode] = useState("// Write your code here");

  return (
    <div>
      <MonacoEditor
        height="400px"
        language="javascript"
        value={code}
        onChange={setCode}
        theme="vs-dark"
      />
      <button onClick={() => alert("Code submitted!")}>Submit</button>
    </div>
  );
}
