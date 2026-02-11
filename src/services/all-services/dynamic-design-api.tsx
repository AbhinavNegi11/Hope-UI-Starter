import { showToast } from "@/utilities/ToastNotification";
import { Api_Url } from "../all-api-url/api-url";
import { getHeaders } from "../header/header1";
import { method } from "lodash";

const Gateway_Url = "ts/v1/api";

const MASTER_URL = `${Api_Url}/${Gateway_Url}`;

//  Sites Controller for getting all sites

export const getAllComponents = async (token: string) => {
  try {
    const header = await getHeaders(token);
    const response = await fetch(`${MASTER_URL}/report/component`, {
      method: "GET",
      headers: header,
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

export const getAllComponentsAndGroups = async (token: string) => {
  try {
    const header = await getHeaders(token);
    const response = await fetch(`${MASTER_URL}/component-groups`, {
      method: "GET",
      headers: header,
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

export const getExistingData = async (token: string, id: any) => {
  try {
    // const Api_Url= process.env.API_BASE_URL
    const header = await getHeaders(token);
    const response = await fetch(
      `${MASTER_URL}/dynamic/report/tenantId/${id}`,
      {
        method: "GET",
        headers: header,
      }
    );

    const result = await response.json();
    return result;
  } catch (err: any) {
    console.error("Error fetching tenants:", err.message);
    throw err;
  }
};

export const deleteExistingData = async (token: string, id: any) => {
  try {
    // const Api_Url= process.env.API_BASE_URL
    const header = await getHeaders(token);
    const response = await fetch(`${MASTER_URL}/dynamic/report/row/${id}`, {
      method: "DELETE",
      headers: header,
    });

    if (response?.ok) {
      return true;
    }
  } catch (err: any) {
    console.error("Error fetching tenants:", err.message);
    throw err;
  }
};

export const postDynamicComponents = async (token: string, payload: any) => {
  try {
    const header = await getHeaders(token);
    const response = await fetch(`${MASTER_URL}/dynamic/report`, {
      method: "POST",
      headers: header,
      body: payload,
    });
    if (!response.ok) {
      const result = await response.json();
      throw new Error(JSON.stringify({ ...result, status: response.status }));
    }
    const result = await response.json();
    showToast("Saved sucessfully", "success");
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

export const postDynamicComponentsPublish = async (token: string, id: any) => {
  try {
    const header = await getHeaders(token);
    const response = await fetch(`${MASTER_URL}/dynamic/report/${id}/publish`, {
      method: "POST",
      headers: header,
    });
    if (!response.ok) {
      const result = await response.json();
      throw new Error(JSON.stringify({ ...result, status: response.status }));
    }
    const result = await response.json();
    showToast("Saved sucessfully", "success");
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

export const getReportCategory = async (token: string) => {
  try {
    const header = await getHeaders(token);
    const response = await fetch(`${MASTER_URL}/dynamic/master/report-enum`, {
      method: "GET",
      headers: header,
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
