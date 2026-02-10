
import { useEffect } from "react";
import { getProviders, signIn, signOut } from "next-auth/react";
import { useState } from "react";
import { GetServerSideProps } from "next";

function SignOut() {
  useEffect(() => {
    signOut({ redirect: false });
    // const timer = setTimeout(() => {
    //   window.location.href = "/";
    // }, 2000);
    // return () => clearTimeout(timer);
  }, []);

  return (
    <div style={{
      maxWidth: 400,
      margin: "60px auto",
      padding: 32,
      borderRadius: 18,
      background: "#fff",
      boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
      fontFamily: "Segoe UI, sans-serif"
    }}>
      <h2 style={{
        textAlign: "center",
        marginBottom: 28,
        color: "#2d3748",
        letterSpacing: 1
      }}>You have been signed out</h2>
      <p style={{ color: "#4a5568", marginBottom: 28, textAlign: "center" }}>
        Thank you for using TEAMS FM.<br />
        You will be redirected to the home page shortly.<br />
        To sign in again, click below.
      </p>
      <a href="/auth/signin" style={{
        display: "inline-block",
        padding: "12px 32px",
        background: "linear-gradient(90deg, #667eea 0%, #5a67d8 100%)",
        color: "#fff",
        borderRadius: 8,
        fontWeight: 600,
        fontSize: 16,
        textDecoration: "none",
        boxShadow: "0 2px 8px rgba(90,103,216,0.12)"
      }}>Sign In Again</a>
    </div>
  );
}




SignOut.layout = "Blank";
export default SignOut;