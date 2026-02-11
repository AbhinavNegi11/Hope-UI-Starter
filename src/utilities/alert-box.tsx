import React from "react";

interface AlertBoxProps {
  msg: string;
  onConfirm: () => void;
  onCancel?: () => void;
  confirmText?: string;
  cancelText?: string;
}

const AlertBox: React.FC<AlertBoxProps> = ({
  msg,
  onConfirm,
  onCancel,
  confirmText = "OK",
  cancelText = "Cancel",
}) => {
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
    padding: "20px", // ensures spacing on small screens
    boxSizing: "border-box",
  };

  const boxStyle: React.CSSProperties = {
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "12px",
    width: "100%",
    maxWidth: "400px",
    textAlign: "center",
    boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
    boxSizing: "border-box",
  };

  const messageStyle: React.CSSProperties = {
    fontSize: "16px",
    lineHeight: "1.5",
    marginBottom: "20px",
    wordWrap: "break-word",
  };

  const buttonGroupStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "10px",
  };

  const buttonStyle: React.CSSProperties = {
    padding: "10px 20px",
    borderRadius: "6px",
    border: "none",
    cursor: "pointer",
    fontWeight: 600,
    fontSize: "14px",
    minWidth: "100px",
  };

  const confirmButtonStyle: React.CSSProperties = {
    ...buttonStyle,
    backgroundColor: "#0070f3",
    color: "#fff",
  };

  const cancelButtonStyle: React.CSSProperties = {
    ...buttonStyle,
    backgroundColor: "#e0e0e0",
    color: "#333",
  };

  return (
    <div style={overlayStyle}>
      <div style={boxStyle}>
        <p style={messageStyle}>{msg}</p>
        <div style={buttonGroupStyle}>
          {onCancel && (
            <button style={cancelButtonStyle} onClick={onCancel}>
              {cancelText}
            </button>
          )}
          <button style={confirmButtonStyle} onClick={onConfirm}>
            {confirmText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AlertBox;
