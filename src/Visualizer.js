import React, { useState, useEffect } from "react";

const Visualizer = () => {
  const [audioData, setAudioData] = useState([]);
  const colors = [
    "#61dafb",
    "#ff7e67",
    "#7effa0",
    "#ffb6c1",
    "#a0a0a0",
    "#ffd700",
    "#8a2be2",
    "#ff6347",
    "#00ced1",
    "#ff4500",
  ];
  useEffect(() => {
    // Simulate audio data (replace this with actual audio analysis)
    const interval = setInterval(() => {
      const newData = Array.from({ length: 10 }, () => Math.random() * 100);
      setAudioData(newData);
    }, 500);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="visualizer">
      {audioData.map((height, index) => (
        <div
          key={index}
          className="bar"
          style={{
            height: `${height}px`,
            backgroundColor: colors[index % colors.length],
          }}
        ></div>
      ))}
    </div>
  );
};
export default Visualizer;
