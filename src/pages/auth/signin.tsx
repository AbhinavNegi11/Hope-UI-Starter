import { useState } from "react";
import { getProviders, signIn } from "next-auth/react";
import { GetServerSideProps } from "next";
// Usage in /pages/auth/signin.tsx


// Example usage: <SignIn providers={providers} />
function SignIn({ providers }: { providers: any }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleCredentialsLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await signIn("credentials", {
      redirect: false,
      username: email,
      password,
    });
      console.log("signIn response:", res);

    if (res?.error) {
      setError("Invalid email or password");
    } else if (res?.ok) {
      window.location.href = "/";
    }
  };

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
      }}>Sign In to Your Account</h2>

      {/* Credentials Form */}
      {providers?.credentials && (
        <form onSubmit={handleCredentialsLogin} style={{ marginBottom: 24 }}>
          <div style={{ marginBottom: 16 }}>
            <label style={{ display: "block", marginBottom: 6, color: "#4a5568" }}>Email</label>
            <input
              type="email"
              name="username"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              autoComplete="username"
              placeholder="you@email.com"
              style={{
                width: "100%",
                padding: "10px 12px",
                borderRadius: 8,
                border: "1px solid #cbd5e1",
                fontSize: 16,
                outline: "none",
                transition: "border 0.2s"
              }}
            />
          </div>
          <div style={{ marginBottom: 16 }}>
            <label style={{ display: "block", marginBottom: 6, color: "#4a5568" }}>Password</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
              autoComplete="current-password"
              placeholder="Your password"
              style={{
                width: "100%",
                padding: "10px 12px",
                borderRadius: 8,
                border: "1px solid #cbd5e1",
                fontSize: 16,
                outline: "none",
                transition: "border 0.2s"
              }}
            />
          </div>
          {error && <div style={{ color: "#e53e3e", marginBottom: 12 }}>{error}</div>}
          <button
            type="submit"
            style={{
              width: "100%",
              padding: "12px 0",
              background: "linear-gradient(90deg, #667eea 0%, #5a67d8 100%)",
              color: "#fff",
              border: "none",
              borderRadius: 8,
              fontWeight: 600,
              fontSize: 16,
              cursor: "pointer",
              boxShadow: "0 2px 8px rgba(90,103,216,0.12)"
            }}
          >
            Sign In 
          </button>
        </form>
      )}

      {/* Divider */}
      <div style={{
        textAlign: "center",
        margin: "18px 0",
        color: "#a0aec0",
        fontSize: 14,
        letterSpacing: 1
      }}>
        OR
      </div>

      {/* OAuth Providers */}
      {Object.values(providers).map((provider: any) =>
        provider.id !== "credentials" && (
          <button
            key={provider.id}
            onClick={() => signIn(provider.id)}
            style={{
              width: "100%",
              padding: "12px 0",
              marginBottom: 12,
              background: provider.id === "google"
                ? "#ea4335"
                : provider.id === "github"
                ? "#24292f"
                : "#3b5998",
              color: "#fff",
              border: "none",
              borderRadius: 8,
              fontWeight: 600,
              fontSize: 16,
              cursor: "pointer",
              boxShadow: "0 2px 8px rgba(0,0,0,0.10)",
              display: "block"
            }}
          >
            Sign In with SSO
          </button>
        )
      )}
    </div>
  );
}
export const getServerSideProps: GetServerSideProps = async () => {
  const providers = await getProviders();
  return { props: { providers } };
};

// Set the layout to "Blank"
SignIn.layout = "Blank";
export default SignIn