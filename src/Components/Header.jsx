import React from "react";

const MiniHeader = () => {
  // Scroll to a specific section smoothly
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="mini-header">
      <button onClick={() => scrollToSection("section1")}>Section 1</button>
      <button onClick={() => scrollToSection("section2")}>Section 2</button>
      <button onClick={() => scrollToSection("section3")}>Section 3</button>

      {/* Styles for mini-header */}
      <style jsx>{`
        .mini-header {
          position: fixed;
          top: 0;
          width: 100%;
          background: #333;
          color: white;
          display: flex;
          justify-content: center;
          padding: 10px;
          gap: 10px;
        }

        .mini-header button {
          background: white;
          border: none;
          padding: 8px 16px;
          cursor: pointer;
          border-radius: 4px;
          font-weight: bold;
        }
      `}</style>
    </div>
  );
};

export default MiniHeader;
