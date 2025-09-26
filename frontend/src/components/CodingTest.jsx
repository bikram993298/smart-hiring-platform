import React, { useState } from "react";
import MonacoEditor from "@monaco-editor/react";
import axios from "axios";

export default function CodingTest() {
  const [language, setLanguage] = useState("javascript");
  const [code, setCode] = useState(getDefaultCode("javascript"));
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);

  // Default template per language
  function getDefaultCode(lang) {
    switch (lang) {
      case "cpp":
        return `#include <bits/stdc++.h>
using namespace std;

int main() {
    cout << "Hello, World!";
    return 0;
}`;
      case "python":
        return `print("Hello, World!")`;
      case "javascript":
      default:
        return `console.log("Hello, World!");`;
    }
  }

  const handleLanguageChange = (e) => {
    const lang = e.target.value;
    setLanguage(lang);
    setCode(getDefaultCode(lang));
  };

  const runCode = async () => {
    setLoading(true);
    try {
      const res = await axios.post("http://localhost:5000/api/execute", {
        language,
        code,
        input,
      });
      setOutput(res.data.output);
    } catch (err) {
      setOutput("❌ Error: " + err.message);
    }
    setLoading(false);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen flex justify-center">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-6xl p-5">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-gray-800">Coding Playground</h2>
          <div className="flex items-center gap-3">
            <label className="text-gray-700 font-medium">Language:</label>
            <select
              value={language}
              onChange={handleLanguageChange}
              className="px-3 py-2 border rounded-lg focus:ring focus:ring-blue-300"
            >
              <option value="javascript">JavaScript</option>
              <option value="python">Python</option>
              <option value="cpp">C++</option>
            </select>
          </div>
        </div>

        {/* Code editor */}
        <div className="border rounded-lg overflow-hidden mb-4">
          <MonacoEditor
            height="400px"
            language={language === "cpp" ? "cpp" : language}
            value={code}
            onChange={(val) => setCode(val)}
            theme="vs-dark"
            options={{
              fontSize: 14,
              minimap: { enabled: false },
              scrollBeyondLastLine: false,
            }}
          />
        </div>

        {/* Input / Output section */}
        <div className="grid grid-cols-2 gap-4">
          {/* Input */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Custom Input
            </label>
            <textarea
              rows="6"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="w-full border rounded-lg p-3 focus:ring focus:ring-blue-300"
              placeholder="Enter custom input..."
            />
          </div>

          {/* Output */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Output
            </label>
            <pre className="w-full h-[150px] bg-black text-green-400 rounded-lg p-3 overflow-auto">
              {output || "⏳ Run code to see output..."}
            </pre>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-3 mt-4">
          <button
            onClick={runCode}
            className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            disabled={loading}
          >
            {loading ? "Running..." : "Run Code"}
          </button>
          <button
            onClick={() => alert("Code submitted!")}
            className="px-5 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
