import { showToast } from "@/utilities/ToastNotification";
import {
  getHeaders,
  getHeadersForImage,
  getHeadersForImagePublic,
  getPublicHeaders,
} from "../../header/header1";
import { Api_Url } from "../../all-api-url/api-url";
import { isValidQueryParam } from "@/utilities/ValidationApi";

const Gateway_Url = "tfm/v1/api";

const MASTER_URL = `${Api_Url}/${Gateway_Url}`;

export const getTfmBlocksBySiteIdPublic = async (siteId: any) => {
  try {
    const header = await getPublicHeaders();
    const response = await fetch(
      `${MASTER_URL}/public/site/blocks?siteId=${siteId}&status=ACTIVE`,
      {
        method: "GET",
        headers: header,
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

export const getTfmDepartmentBySiteIdPublic = async (siteId: any) => {
  try {
    const header = await getPublicHeaders();
    const response = await fetch(
      `${MASTER_URL}/public/departments/by-login-user?siteId=${siteId}`,
      {
        method: "GET",
        headers: header,
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

export const getTfmFloorPublic = async (siteId: any, blockId: any) => {
  try {
    const header = await getPublicHeaders();
    const response = await fetch(
      `${MASTER_URL}/public/floors?siteId=${siteId}&blockId=${blockId}&status=ACTIVE`,
      {
        method: "GET",
        headers: header,
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

export const getTfmZonePublic = async (
  siteId: any,
  blockId: any,
  floorId: any
) => {
  try {
    const header = await getPublicHeaders();
    const response = await fetch(
      `${MASTER_URL}/public/zones?siteId=${siteId}&blockId=${blockId}&floorId=${floorId}&status=ACTIVE`,
      {
        method: "GET",
        headers: header,
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

export const createTfmRequestPublic = async (payload: any) => {
  try {
    const header = await getPublicHeaders();
    const response = await fetch(`${MASTER_URL}/public/tfm/request`, {
      method: "POST",
      headers: header,
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const result = await response.json();
      throw new Error(JSON.stringify({ ...result, status: response.status }));
    }
    const result = await response.json();
    showToast("TFM request created", "success");
    return result;
  } catch (err: any) {
    try {
      const unstrobj = JSON.parse(err?.message);
      showToast(unstrobj?.errorMessage, "error");
    } catch (e) {}
    console.error("Error create tfm request :", err.message);
    return null;
  }
};

export const uploadImageTfmRequestPublic = async (file: File) => {
  const formData = new FormData();
  formData.append("file", file);

  const headers = await getHeadersForImagePublic();

  const response = await fetch(`${MASTER_URL}/public/upload`, {
    method: "POST",
    headers,
    body: formData,
  });

  if (!response.ok) {
    throw new Error("File upload failed");
  }

  const data = await response.json();
  return data;
};

export const getImageTfmRequestPublic = async (fileName: any) => {
  const headers = await getHeadersForImagePublic();

  const response = await fetch(
    `${MASTER_URL}/public/upload?filename=${fileName}`,
    {
      method: "GET",
      headers,
    }
  );

  if (!response.ok) {
    throw new Error("File retrieval failed");
  }

  const data = await response.json();
  return data;
};
