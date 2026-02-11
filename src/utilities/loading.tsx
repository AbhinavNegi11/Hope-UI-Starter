import React from "react";
import { BsArrowRepeat } from "react-icons/bs"; // or any icon you like

const Loading: React.FC = () => {
  const overlayStyle: React.CSSProperties = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 9999,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const iconStyle: React.CSSProperties = {
    fontSize: "50px",
    color: "#ffffff",
    animation: "spin 1s linear infinite",
  };

  return (
    <>
      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
      <div style={overlayStyle}>
        <BsArrowRepeat style={iconStyle} />
      </div>
    </>
  );
};

export default Loading;
