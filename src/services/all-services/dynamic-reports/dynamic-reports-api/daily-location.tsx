import { Api_Url } from "@/services/all-api-url/api-url";
import { getHeaders } from "@/services/header/header1";
import { showToast } from "@/utilities/ToastNotification";
import { method } from "lodash";

const Gateway_Url = "report/v1/api";

const MASTER_URL = `${Api_Url}/${Gateway_Url}`;

export const summaryByStatusLoc = async (
  token: any,
  selectedSite?: any,
  checklistDepartmentId?: any,
  startDate?: any,
  endDate?: any
) => {
  try {
    const header = await getHeaders(token);

    // Build query params only if values exist
    const params = new URLSearchParams();
    if (selectedSite) params.append("siteId", selectedSite);
    if (startDate) params.append("startDate", startDate + "T00:00:00");
    if (endDate) params.append("endDate", endDate + "T23:59:59");
    if (checklistDepartmentId)
      params.append("checklistDepartmentId", checklistDepartmentId);

    const url = `${MASTER_URL}/dynamic/daily-location/summary-by-status${
      params.toString() ? `?${params.toString()}` : ""
    }`;

    const response = await fetch(url, {
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
      const unstrobj = JSON.parse(err?.message);
      showToast(unstrobj?.errorMessage, "error");
    } catch (e) {}
    console.error("Error creating department:", err.message);
    return null;
  }
};

export const taskStatusByCategory = async (
  token: any,
  selectedSite?: any,
  checklistDepartmentId?: any,
  startDate?: any,
  endDate?: any
) => {
  try {
    const header = await getHeaders(token);

    // Build query params only if values exist
    const params = new URLSearchParams();
    if (selectedSite) params.append("siteId", selectedSite);
    if (startDate) params.append("startDate", startDate + "T00:00:00");
    if (endDate) params.append("endDate", endDate + "T23:59:59");
    if (checklistDepartmentId)
      params.append("checklistDepartmentId", checklistDepartmentId);

    const url = `${MASTER_URL}/dynamic/daily-location/status-by-department${
      params.toString() ? `?${params.toString()}` : ""
    }`;

    const response = await fetch(url, {
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
      const unstrobj = JSON.parse(err?.message);
      showToast(unstrobj?.errorMessage, "error");
    } catch (e) {}
    console.error("Error creating department:", err.message);
    return null;
  }
};

export const statusByBlockLoc = async (
  token: any,
  selectedSite?: any,
  checklistDepartmentId?: any,
  startDate?: any,
  endDate?: any
) => {
  try {
    const header = await getHeaders(token);

    // Build query params only if values exist
    const params = new URLSearchParams();
    if (selectedSite) params.append("siteId", selectedSite);
    if (startDate) params.append("startDate", startDate + "T00:00:00");
    if (endDate) params.append("endDate", endDate + "T23:59:59");
    if (checklistDepartmentId)
      params.append("checklistDepartmentId", checklistDepartmentId);

    const url = `${MASTER_URL}/dynamic/daily-location/status-by-block${
      params.toString() ? `?${params.toString()}` : ""
    }`;

    const response = await fetch(url, {
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
      const unstrobj = JSON.parse(err?.message);
      showToast(unstrobj?.errorMessage, "error");
    } catch (e) {}
    console.error("Error creating department:", err.message);
    return null;
  }
};

export const monthlyOnHandLoc = async (
  token: any,
  selectedSite?: any,
  checklistDepartmentId?: any,
  startDate?: any,
  endDate?: any
) => {
  try {
    const header = await getHeaders(token);

    // Build query params only if values exist
    const params = new URLSearchParams();
    if (selectedSite) params.append("siteId", selectedSite);
    if (startDate) params.append("startDate", startDate + "T00:00:00");
    if (endDate) params.append("endDate", endDate + "T23:59:59");
    if (checklistDepartmentId)
      params.append("checklistDepartmentId", checklistDepartmentId);

    const url = `${MASTER_URL}/dynamic/daily-location/monthly${
      params.toString() ? `?${params.toString()}` : ""
    }`;

    const response = await fetch(url, {
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
      const unstrobj = JSON.parse(err?.message);
      showToast(unstrobj?.errorMessage, "error");
    } catch (e) {}
    console.error("Error creating department:", err.message);
    return null;
  }
};

export const dailyOnHandLoc = async (
  token: any,
  selectedSite?: any,
  checklistDepartmentId?: any,
  startDate?: any,
  endDate?: any
) => {
  try {
    const header = await getHeaders(token);

    // Build query params only if values exist
    const params = new URLSearchParams();
    if (selectedSite) params.append("siteId", selectedSite);
    if (startDate) params.append("startDate", startDate + "T00:00:00");
    if (endDate) params.append("endDate", endDate + "T23:59:59");
    if (checklistDepartmentId)
      params.append("checklistDepartmentId", checklistDepartmentId);

    const url = `${MASTER_URL}/dynamic/daily-location/daily${
      params.toString() ? `?${params.toString()}` : ""
    }`;

    const response = await fetch(url, {
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
      const unstrobj = JSON.parse(err?.message);
      showToast(unstrobj?.errorMessage, "error");
    } catch (e) {}
    console.error("Error creating department:", err.message);
    return null;
  }
};
