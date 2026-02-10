// import { login, getLoginDetails } from "@/services/all-services/user-info";
import NextAuth from "next-auth";
import KeycloakProvider from "next-auth/providers/keycloak";
import CredentialsProvider from "next-auth/providers/credentials";
import { jwtDecode } from "jwt-decode";

async function refreshAccessToken(token) {
  try {
    const response = await fetch(
      `${process.env.KEYCLOAK_ISSUER}/protocol/openid-connect/token`,
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          client_id: process.env.KEYCLOAK_CLIENT_ID,
          client_secret: process.env.KEYCLOAK_CLIENT_SECRET,
          grant_type: "refresh_token",
          refresh_token: token.refreshToken,
        }),
      }
    );

    if (!response.ok) {
      throw new Error("Failed to refresh access token");
    }

    const refreshedTokens = await response.json();

    return {
      ...token,
      accessToken: refreshedTokens.access_token,
      refreshToken: refreshedTokens.refresh_token ?? token.refreshToken,
      accessTokenExpires: Date.now() + refreshedTokens.expires_in * 1000,
      error: undefined, // clear error if refresh is successful
    };
  } catch (error) {
    console.error("Error refreshing access token", error);
    // Mark error so client can handle redirect
    return {
      ...token,
      error: "RefreshAccessTokenError",
    };
  }
}

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Email and Password",
      credentials: {
        username: {
          label: "Email Id",
          type: "text",
          placeholder: "jsmith@email.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        // Check if credentials is defined and has the expected properties
        // console.log(credentials)
        // console.log("Credentials:", credentials);
        // console.log("User Found:", user);
        if (!credentials || !credentials.username || !credentials.password) {
          return null;
        }
        // Replace this with your real authentication logic
        const user = await login(credentials.username, credentials.password);

        // If user is not found or credentials are invalid, return null/false
        if (!user) return null; // This triggers a 401

        // If authentication is successful, return a user 
        return {
          ...user,
          email: credentials.username,
          access_token: user.access_token,
          refresh_token: user.refresh_token,
          expires_in: user.expires_in,
        };
      },
    }),
    KeycloakProvider({
      clientId: process.env.KEYCLOAK_CLIENT_ID,
      clientSecret: process.env.KEYCLOAK_CLIENT_SECRET,
      issuer: process.env.KEYCLOAK_ISSUER,
      authorization: {
        params: {
          prompt: "login",
        },
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/auth/signin",
    signOut: "/auth/signout",
    error: "/auth/error", // Error code passed in query string as ?error=
    verifyRequest: "/auth/verify-request", // (used for check email message)
    newUser: "/auth/new-user", // New users will be directed here on first sign in (leave the property out if not of interest)
  },
  callbacks: {
    async redirect({ url, baseUrl }) {
      return baseUrl;
    },
    
    async session({ session, token }) {
      debugger;
      const loginUser = await getLoginDetails(token.accessToken);
      console.log("loginUser in session callback:", loginUser);

      session.accessToken = token.accessToken;
      session.refreshToken = token.refreshToken;
      session.kl_account = token.kl_account;
      session.error = token.error; // Pass error to session
      session.userType = loginUser?.defaultTenant?.userType; // Pass userType to session
      session.admin = loginUser?.defaultTenant?.admin; // Pass userType to session
      session.tfmRequestFlow = loginUser?.defaultTenant?.tenant?.tfmRequestFlow
        ? loginUser?.defaultTenant?.tenant?.tfmRequestFlow
        : "";
      session.timeZone = loginUser?.defaultTenant?.tenant?.timeZoneId
        ? loginUser?.defaultTenant?.tenant?.timeZoneId
        : "";
      return session;
    },
    async jwt({ token, user, account }) {
      // Initial sign in
      if (account && user) {
        if (account.provider === "credentials") {
          // For credentials provider, we don't have account details like access_token
          const decoded = await jwtDecode(user.access_token);
          return {
            ...token,
            email: user.email, // Assuming user object has email
            sub: decoded.sub, // Use decoded sub from JWT
            name: user.name, // Assuming user object has name
            accessToken: user.access_token, // Assuming user object has accessToken
            refreshToken: user.refresh_token, // Assuming user object has refreshToken
            accessTokenExpires: decoded.exp * 1000, // Set a default expiry time
            kl_account: {
              provider: "credentials",
              type: "credentials",
              access_token: user.access_token,
              refresh_token: user.refresh_token,
              expires_at: decoded.exp, // Set expiry time based on expires_in
              refresh_expires_in: user.refresh_expires_in,
              token_type: "Bearer",
              session_state: decoded.session_state,
              scope: decoded.scope,
            },
            error: undefined,
          };
        }
        return {
          ...token,
          kl_account: account,
          accessToken: account.access_token,
          refreshToken: account.refresh_token,
          accessTokenExpires: account.expires_at * 1000,
          error: undefined,
        };
      }

      // If token is still valid, return it
      if (token.accessTokenExpires && Date.now() < token.accessTokenExpires) {
        return token;
      }

      // Try to refresh token
      return await refreshAccessToken(token);
    },
  },
  events: {
    async signIn(message) {
      /* on successful sign in */ console.log("User signed in", message);
    },
    async signOut(message) {
      /* on signout */ console;
    },
    async createUser(message) {
      /* user created */ console;
    },
    async updateUser(message) {
      /* user updated - e.g. their email was verified */ console.log(
        "User updated",
        message
      );
    },
    async linkAccount(message) {
      /* account (e.g. Twitter) linked to a user */ console.log(
        "Account linked",
        message
      );
    },
    async session(message) {
      /* session is active */ console.log("Session active", message);
    },
  },
};

export default NextAuth(authOptions);
