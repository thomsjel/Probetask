import React, { useState, useEffect } from "react";

function Cursor({ image, children }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const cursorStyle = {
    position: "fixed",
    top: `${position.y}px`,
    left: `${position.x}px`,
    pointerEvents: "none",
    transform: "translate(-50%, -50%)",
    zIndex: 9999,
  };

  return (
    <div style={cursorStyle}>
      <img alt="cursor" src={image} width={40} height={40} />
    </div>
  );
}

export default Cursor;
