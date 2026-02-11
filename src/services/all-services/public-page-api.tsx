import { showToast } from "@/utilities/ToastNotification";
import { Api_Url } from "../all-api-url/api-url";
import { getHeaders, getHeadersForImage } from "../header/header1";

const Gateway_Url = "helpdesk/v1/api";

const MASTER_URL = `${Api_Url}/${Gateway_Url}`;

export const attachmentUploadWorkPermit = async (token: string, payload: any) => {
  try {
    const header = await getHeaders(token);
    const response = await fetch(`${MASTER_URL}/work-permit/upload`, {
      method: "POST",
      headers: await getHeadersForImage(token),
      body: payload,
    });
    if (!response.ok) {
      const result = await response.json();
      throw new Error(JSON.stringify({ ...result, status: response.status }));
    }
    const result = await response.json();
    return result;
  } catch (err: any) {
    try {
      var unstrobj = JSON.parse(err?.message);
      showToast(unstrobj?.errorMessage, "error");
    } catch (e) {}
    console.error("Error creating department:", err.message);
    return null;
  }
};

export const getImageByFileNameWorkPermit = async (token: string, fileName: any) => {
  try {
    const header = await getHeaders(token);
    const response = await fetch(
      `${MASTER_URL}/work-permit/upload?filename=${fileName}`,
      {
        method: "GET",
        headers: await getHeaders(token),
      }
    );
    if (!response.ok) {
      const result = await response.json();
      throw new Error(JSON.stringify({ ...result, status: response.status }));
    }
    const result = await response.json();
    return result;
  } catch (err: any) {
    try {
      var unstrobj = JSON.parse(err?.message);
      showToast(unstrobj?.errorMessage, "error");
    } catch (e) {}
    console.error("Error creating department:", err.message);
    return null;
  }
};

export const postWorkPermitDetails  = async ( payload:any, siteId:any) => {
  try {
    const response = await fetch(`${MASTER_URL}/public/work-order?siteId=${siteId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    });
    if (!response.ok) {
      const result = await response.json();
      throw new Error(JSON.stringify({ ...result, status: response.status }));
    }
    const result = await response.json();
    showToast("Work Permit Request Created Successfully", "success");
    return result;
  } catch (err: any) {
    console.error("Error fetching sites:", err.message);
    return null;
  }
};

export const getSubWorkType  = async () => {
  try {
    const response = await fetch(`${MASTER_URL}/public/working-type-details`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    });
    if (!response.ok) {
      const result = await response.json();
      throw new Error(JSON.stringify({ ...result, status: response.status }));
    }
    const result = await response.json();
    return result;
  } catch (err: any) {
    console.error("Error fetching sites:", err.message);
    return null;
  }
};

export const getPublicWorkType  = async () => {
  try {
    const response = await fetch(`${MASTER_URL}/public/working-type`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    });
    if (!response.ok) {
      const result = await response.json();
      throw new Error(JSON.stringify({ ...result, status: response.status }));
    }
    const result = await response.json();
    return result;
  } catch (err: any) {
    console.error("Error fetching sites:", err.message);
    return null;
  }
};