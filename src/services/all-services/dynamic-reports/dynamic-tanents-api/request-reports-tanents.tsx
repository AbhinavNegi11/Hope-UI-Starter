import { Api_Url } from "@/services/all-api-url/api-url";
import { getHeaders } from "@/services/header/header1";
import { showToast } from "@/utilities/ToastNotification";
import { method } from "lodash";

const Gateway_Url = "ts/v1/api";

const MASTER_URL = `${Api_Url}/${Gateway_Url}`;

export const dailyOnHandTaskTenants = async (
  token: any,
  tenantId?: any,
  selectedSite?: any,
  category?: any,
  startDate?: any,
  endDate?: any
) => {
  try {
    const header = await getHeaders(token);

    // Build query params only if values exist
    const params = new URLSearchParams();
    if (tenantId) params.append("tenantId", tenantId);
    if (selectedSite) params.append("siteId", selectedSite);
    if (startDate) params.append("startDate", startDate + "T00:00:00");
    if (endDate) params.append("endDate", endDate + "T23:59:59");
    if (category) params.append("tfmDepartmentId", category);

    const url = `${MASTER_URL}/dynamic-request-reports/daily${
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

export const monthlyOnHandTaskTenants = async (
  token: any,
  tenantId?: any,
  selectedSite?: any,
  category?: any,
  startDate?: any,
  endDate?: any
) => {
  try {
    const header = await getHeaders(token);

    // Build query params only if values exist
    const params = new URLSearchParams();
    if (tenantId) params.append("tenantId", tenantId);
    if (selectedSite) params.append("siteId", selectedSite);
    if (startDate) params.append("startDate", startDate);
    if (endDate) params.append("endDate", endDate);
    if (category) params.append("tfmDepartmentId", category);

    const url = `${MASTER_URL}/dynamic-request-reports/monthly${
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

export const taskSummaryByStatusReportsTenants = async (
  token: any,
  tenantId?: any,
  selectedSite?: any,
  category?: any,
  startDate?: any,
  endDate?: any
) => {
  try {
    const header = await getHeaders(token);

    // Build query params only if values exist
    const params = new URLSearchParams();
    if (tenantId) params.append("tenantId", tenantId);
    if (selectedSite) params.append("siteId", selectedSite);
    if (startDate) params.append("startDate", startDate);
    if (endDate) params.append("endDate", endDate);
    if (category) params.append("tfmDepartmentId", category);

    const url = `${MASTER_URL}/dynamic-request-reports/summary-by-status${
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

export const taskStatusByCategoryReportsTenants = async (
  token: any,
  tenantId?: any,
  selectedSite?: any,
  category?: any,
  startDate?: any,
  endDate?: any
) => {
  try {
    const header = await getHeaders(token);

    // Build query params only if values exist
    const params = new URLSearchParams();
    if (tenantId) params.append("tenantId", tenantId);
    if (selectedSite) params.append("siteId", selectedSite);
    if (startDate) params.append("startDate", startDate);
    if (endDate) params.append("endDate", endDate);
    if (category) params.append("tfmDepartmentId", category);

    const url = `${MASTER_URL}/dynamic-request-reports/tasks-by-department${
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

export const totalTaskByBuildingNameTenants = async (
  token: any,
  tenantId?: any,
  selectedSite?: any,
  category?: any,
  startDate?: any,
  endDate?: any
) => {
  try {
    const header = await getHeaders(token);

    // Build query params only if values exist
    const params = new URLSearchParams();
    if (tenantId) params.append("tenantId", tenantId);
    if (selectedSite) params.append("siteId", selectedSite);
    if (startDate) params.append("startDate", startDate);
    if (endDate) params.append("endDate", endDate);
    if (category) params.append("tfmDepartmentId", category);

    const url = `${MASTER_URL}/dynamic-request-reports/status-by-block${
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

export const totalTaskWipReasonTenants = async (
  token: any,
  tenantId?: any,
  selectedSite?: any,
  category?: any,
  startDate?: any,
  endDate?: any
) => {
  try {
    const header = await getHeaders(token);

    // Build query params only if values exist
    const params = new URLSearchParams();
    if (tenantId) params.append("tenantId", tenantId);
    if (selectedSite) params.append("siteId", selectedSite);
    if (startDate) params.append("startDate", startDate);
    if (endDate) params.append("endDate", endDate);
    if (category) params.append("tfmDepartmentId", category);

    const url = `${MASTER_URL}/dynamic-request-reports/wip-reasons${
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

export const totalTaskByEachReporterTenants = async (
  token: any,
  tenantId?: any,
  selectedSite?: any,
  category?: any,
  startDate?: any,
  endDate?: any
) => {
  try {
    const header = await getHeaders(token);

    // Build query params only if values exist
    const params = new URLSearchParams();
    if (tenantId) params.append("tenantId", tenantId);
    if (selectedSite) params.append("siteId", selectedSite);
    if (startDate) params.append("startDate", startDate);
    if (endDate) params.append("endDate", endDate);
    if (category) params.append("tfmDepartmentId", category);

    const url = `${MASTER_URL}/dynamic-request-reports/tasks-by-user${
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

export const top10TaskByCategoryTenants = async (
  token: any,
  tenantId?: any,
  selectedSite?: any,
  category?: any,
  startDate?: any,
  endDate?: any
) => {
  try {
    const header = await getHeaders(token);

    // Build query params only if values exist
    const params = new URLSearchParams();
    if (tenantId) params.append("tenantId", tenantId);
    if (selectedSite) params.append("siteId", selectedSite);
    if (startDate) params.append("startDate", startDate);
    if (endDate) params.append("endDate", endDate);
    if (category) params.append("tfmDepartmentId", category);

    const url = `${MASTER_URL}/dynamic-request-reports/tasks-by-department${
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
