"use client";
import React from "react";
import { useSession } from "next-auth/react";

export async function getHeaders(token: string) {
  //const { data: session }:any = useSession();
  // const token = session?.accessToken
  const tenantId =
    typeof window !== "undefined"
      ? localStorage.getItem("defaultTenantId")
      : null;
  const now = new Date();
  const frontendDateTime = now.toUTCString();
  const options: any = {
    hour: "2-digit",
    minute: "2-digit",
    second: undefined,
  };
  const frontendLocalTime = now.toLocaleTimeString(undefined, options);
  now.setHours(0, 0, 0, 0);
  const frontendDate = now.toUTCString();

  let headers: any = {
    "Content-Type": "application/json",
    Accept: "application/json",
    frontenddate: frontendDate,
    frontenddatetime: frontendDateTime,
    frontendtime: frontendLocalTime,
    tenantId: tenantId,
  };

  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  return headers;
}

export async function getHeadersForImage(token: string) {
  //const { data: session }:any = useSession();
  // const token = session?.accessToken
  const now = new Date();
  const frontendDateTime = now.toUTCString();
  const options: any = {
    hour: "2-digit",
    minute: "2-digit",
    second: undefined,
  };
  const frontendLocalTime = now.toLocaleTimeString(undefined, options);
  now.setHours(0, 0, 0, 0);
  const frontendDate = now.toUTCString();

  let headers: any = {
    frontenddate: frontendDate,
    frontenddatetime: frontendDateTime,
    frontendtime: frontendLocalTime,
  };

  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  return headers;
}

export async function getPublicHeaders() {
  const now = new Date();

  const frontendDateTime = now.toUTCString();
  const options: Intl.DateTimeFormatOptions = {
    hour: "2-digit",
    minute: "2-digit",
  };
  const frontendLocalTime = now.toLocaleTimeString(undefined, options);

  now.setHours(0, 0, 0, 0);
  const frontendDate = now.toUTCString();

  const headers: Record<string, string> = {
    "Content-Type": "application/json",
    Accept: "application/json",
    frontenddate: frontendDate,
    frontenddatetime: frontendDateTime,
    frontendtime: frontendLocalTime,
  };

  return headers;
}

export async function getHeadersForImagePublic() {
  //const { data: session }:any = useSession();
  // const token = session?.accessToken
  const now = new Date();
  const frontendDateTime = now.toUTCString();
  const options: any = {
    hour: "2-digit",
    minute: "2-digit",
    second: undefined,
  };
  const frontendLocalTime = now.toLocaleTimeString(undefined, options);
  now.setHours(0, 0, 0, 0);
  const frontendDate = now.toUTCString();

  let headers: any = {
    frontenddate: frontendDate,
    frontenddatetime: frontendDateTime,
    frontendtime: frontendLocalTime,
  };

  return headers;
}
