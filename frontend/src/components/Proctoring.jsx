import React, { useEffect } from "react";

export default function Proctoring() {
  useEffect(() => {
    // Simple webcam access
    const startWebcam = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        const video = document.getElementById("webcam");
        if (video) video.srcObject = stream;
      } catch (err) {
        console.error("Webcam access denied", err);
      }
    };
    startWebcam();
  }, []);

  return (
    <div>
      <h2>Proctoring</h2>
      <video id="webcam" autoPlay width="400" height="300" />
      <p>Tab-switch detection and webcam monitoring placeholder</p>
    </div>
  );
}
