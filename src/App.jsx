import React, { useState } from "react";
import "./App.css";

const ButtonColorAssignment = () => {
  const colors = [
    "coral",
    "teal",
    "purple",
    "orange",
    "pink",
    "blue",
    "green",
    "brown",
    "indigo",
  ];
  const [assignedColors, setAssignedColors] = useState(Array(9).fill(null));
  const [colorIndex, setColorIndex] = useState(0);

  const handleClick = (index) => {
    if (colorIndex < colors.length) {
      const newColors = [...assignedColors];
      newColors[index] = colors[colorIndex];
      setAssignedColors(newColors);
      setColorIndex(colorIndex + 1);
    }
  };

  const handleReset = () => {
    setAssignedColors(Array(9).fill(null));
    setColorIndex(0);
  };

  const getTextColor = (color) => {
    if (!color) return "black";
    const lightColors = ["coral", "orange", "pink", "yellow"];
    return lightColors.includes(color) ? "black" : "white";
  };

  return (
    <div className="app">
      <div className="app-container">
        <h2 className="title">🎨 Color Button Assignment</h2>
        <p className="subtitle">
          Click any button to assign the next color in sequence
        </p>

        {/* Color Sequence Grid */}
        <div className="sequence-container">
          <h4>Color Sequence</h4>
          <div className="sequence-grid">
            {colors.map((color, i) => (
              <div key={i} className="sequence-item">
                <div
                  className={`color-box ${i === colorIndex ? "active" : ""} ${
                    assignedColors.includes(color) ? "used" : ""
                  }`}
                  style={{ backgroundColor: color }}
                />
                <small>{color}</small>
              </div>
            ))}
          </div>
          <p className="next-color">
            <strong>Next Color: </strong>
            <span style={{ color: colors[colorIndex] }}>
              {colors[colorIndex] || "None"}
            </span>
          </p>
        </div>

        {/* Buttons Grid */}
        <div className="buttons-grid">
          {assignedColors.map((btnColor, index) => (
            <button
              key={index}
              onClick={() => handleClick(index)}
              disabled={btnColor !== null}
              className="color-button"
              style={{
                backgroundColor: btnColor || "#f0f0f0",
                color: getTextColor(btnColor),
              }}
            >
              {btnColor ? btnColor.toUpperCase() : `Button ${index + 1}`}
            </button>
          ))}
        </div>

        {/* Reset Button */}
        <button onClick={handleReset} className="reset-button">
          Reset Grid
        </button>

        {/* Progress Bar */}
        <div className="progress-container">
          <p>
            Progress: {assignedColors.filter(Boolean).length} / {colors.length}{" "}
            colors assigned
          </p>
          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{
                width: `${
                  (assignedColors.filter(Boolean).length / colors.length) * 100
                }%`,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ButtonColorAssignment;
