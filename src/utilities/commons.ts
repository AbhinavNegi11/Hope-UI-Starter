import { getSession } from "next-auth/react";

export async function getAccessTocken() {
  const session: any = await getSession();
  if (session) {
    return session?.accessToken;
  }
  return null;
}

export const handleShowPicker = (e: any) => {
  if (typeof e.target.showPicker === "function") {
    e.target.showPicker(); // open the native picker
  }
};
