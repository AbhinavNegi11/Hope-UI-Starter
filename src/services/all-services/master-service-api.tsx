import { showToast } from "@/utilities/ToastNotification";
import { Api_Url } from "../all-api-url/api-url";
import { getHeaders } from "../header/header1";
import { method } from "lodash";

const Gateway_Url = "ms/v1/api";

const MASTER_URL = `${Api_Url}/${Gateway_Url}`;

//  Sites Controller for getting all sites

export const getAllSite = async (token: string) => {
  try {
    const header = await getHeaders(token);
    const response = await fetch(`${MASTER_URL}/sites/`, {
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

export const getBlocksBySiteId = async (
  token: string,
  siteId: string,
  status?: string
) => {
  try {
    const header = await getHeaders(token);
    const url = new URL(`${MASTER_URL}/blocks/siteId/${siteId}`);
    if (status) {
      url.searchParams.append("status", status);
    }

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
      var unstrobj = JSON.parse(err?.message);
      showToast(unstrobj?.errorMessage, "error");
    } catch (e) {}
    console.error("Error creating department:", err.message);
    return null;
  }
};

export const getAllBlocks = async (token: string) => {
  try {
    const header = await getHeaders(token);
    const response = await fetch(`${MASTER_URL}/blocks`, {
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

export const createBlock = async (token: string, payload: any) => {
  try {
    const header = await getHeaders(token);
    const response = await fetch(`${MASTER_URL}/blocks`, {
      method: "POST",
      headers: header,
      body: JSON.stringify(payload),
    });
    if (!response.ok) {
      const result = await response.json();
      throw new Error(JSON.stringify({ ...result, status: response.status }));
    }
    const result = await response.json();
    showToast("Success saved ", "success");
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

export const createBlockStatus = async (token: string, payload: any) => {
  try {
    const header = await getHeaders(token);
    const response = await fetch(`${MASTER_URL}/blocks`, {
      method: "POST",
      headers: header,
      body: JSON.stringify(payload),
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
    console.error("Error change Status:", err.message);
    return null;
  }
};

export const getFloorsByBlockId = async (
  token: string,
  blockId: string,
  status?: string
) => {
  try {
    const header = await getHeaders(token);

    const url = new URL(`${MASTER_URL}/blocks/${blockId}/floors`);
    if (status) {
      url.searchParams.append("status", status);
    }

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
      var unstrobj = JSON.parse(err?.message);
      showToast(unstrobj?.errorMessage, "error");
    } catch (e) {}
    console.error("Error creating department:", err.message);
    return null;
  }
};

export const createFloor = async (token: string, payload: any) => {
  try {
    const header = await getHeaders(token);
    const response = await fetch(`${MASTER_URL}/floors`, {
      method: "POST",
      headers: header,
      body: JSON.stringify(payload),
    });
    if (!response.ok) {
      const result = await response.json();
      throw new Error(JSON.stringify({ ...result, status: response.status }));
    }
    const result = await response.json();
    showToast("Success saved ", "success");
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

export const createFloorStatus = async (token: string, payload: any) => {
  try {
    const header = await getHeaders(token);
    const response = await fetch(`${MASTER_URL}/floors`, {
      method: "POST",
      headers: header,
      body: JSON.stringify(payload),
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
    console.error("Error Change Status:", err.message);
    return null;
  }
};

export const getZonesByFloorId = async (
  token: string,
  floorId: string,
  status?: string // made optional
) => {
  try {
    const header = await getHeaders(token);

    const url = new URL(`${MASTER_URL}/floors/${floorId}/zones`);
    if (status) {
      url.searchParams.append("status", status);
    }

    const response = await fetch(url, {
      method: "GET",
      headers: header,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    return result;
  } catch (err: any) {
    console.error("Error fetching zones:", err.message);
    return null;
  }
};

export const createZone = async (token: string, payload: any) => {
  try {
    const header = await getHeaders(token);
    const response = await fetch(`${MASTER_URL}/zones`, {
      method: "POST",
      headers: header,
      body: JSON.stringify(payload),
    });
    if (!response.ok) {
      const result = await response.json();
      throw new Error(JSON.stringify({ ...result, status: response.status }));
    }
    const result = await response.json();
    showToast("Success saved ", "success");
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

export const createZoneStatus = async (token: string, payload: any) => {
  try {
    const header = await getHeaders(token);
    const response = await fetch(`${MASTER_URL}/zones`, {
      method: "POST",
      headers: header,
      body: JSON.stringify(payload),
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

export const getPartners = async (
  token: string,
  page: number,
  rowsPerPage: number,
  search: string,
  status: string
) => {
  try {
    const header = await getHeaders(token);

    let FUNALURL = `${MASTER_URL}/partner?`;
    if (page && page !== 0) {
      FUNALURL = `${FUNALURL}page=${page}`;
    } else {
      FUNALURL = `${FUNALURL}page=0`;
    }
    if (rowsPerPage && rowsPerPage !== 0) {
      FUNALURL = `${FUNALURL}&size=${rowsPerPage}`;
    } else {
      FUNALURL = `${FUNALURL}&size=10`;
    }

    if (search && search !== "") {
      FUNALURL = `${FUNALURL}&search=${search}`;
    }

    if (status && status !== "") {
      FUNALURL = `${FUNALURL}&status=${status}`;
    }

    const response = await fetch(FUNALURL, {
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

export const createPartner = async (token: string, payload: any) => {
  try {
    const header = await getHeaders(token);
    const method = payload.id ? "PUT" : "POST";
    const response = await fetch(`${MASTER_URL}/partner`, {
      method: method,
      headers: header,
      body: JSON.stringify(payload),
    });
    if (!response.ok) {
      const result = await response.json();
      throw new Error(JSON.stringify({ ...result, status: response.status }));
    }
    const result = await response.json();
    showToast("Success saved ", "success");
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

export const createDepartment = async (token: string, payload: any) => {
  try {
    const header = await getHeaders(token);
    const response = await fetch(`${MASTER_URL}/departments`, {
      method: "POST",
      headers: header,
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const result = await response.json();
      throw new Error(JSON.stringify({ ...result, status: response.status }));
    }
    const result = await response.json();
    showToast("Success saved ", "success");
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

export const updateDepartment = async (token: string, payload: any) => {
  try {
    const header = await getHeaders(token);
    const response = await fetch(`${MASTER_URL}/departments`, {
      method: "PUT",
      headers: header,
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const result = await response.json();
      throw new Error(JSON.stringify({ ...result, status: response.status }));
    }
    const result = await response.json();
    showToast("Success saved ", "success");
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

export const getDepartments = async (
  token: any,
  page: any,
  rowsPerPage: any,
  search?: any,
  status?: any
) => {
  try {
    let finalUrl = `${MASTER_URL}/departments?page=${
      page - 1
    }&size=${rowsPerPage}&sort=id`;

    if (search && search !== "") {
      finalUrl += `&search=${encodeURIComponent(search)}`;
    }
    if (status && status !== "") {
      finalUrl += `&status=${status}`;
    }

    const header = await getHeaders(token);
    const response = await fetch(`${finalUrl}`, {
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

export const getDepartmentsByStateId = async (
  token: string,
  stateId: string
) => {
  try {
    const header = await getHeaders(token);
    const response = await fetch(
      `${MASTER_URL}/states/${stateId}/departments`,
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

export const createDepartmentIssue = async (token: string, payload: any) => {
  try {
    const header = await getHeaders(token);
    const response = await fetch(`${MASTER_URL}/department/issues`, {
      method: "POST",
      headers: header,
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const result = await response.json();
      throw new Error(JSON.stringify({ ...result, status: response.status }));
    }
    const result = await response.json();
    showToast("Department Issue created successfully", "success");
    return result;
  } catch (err: any) {
    try {
      const unstrobj = JSON.parse(err?.message);
      showToast(unstrobj?.errorMessage, "error");
    } catch (e) {}
    console.error("Error creating department issue:", err.message);
    return null;
  }
};

export const updateDepartmentIssue = async (token: string, payload: any) => {
  try {
    const header = await getHeaders(token);
    const response = await fetch(`${MASTER_URL}/department/issues`, {
      method: "PUT",
      headers: header,
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const result = await response.json();
      throw new Error(JSON.stringify({ ...result, status: response.status }));
    }
    const result = await response.json();
    showToast("Department Issue updated successfully", "success");
    return result;
  } catch (err: any) {
    try {
      const unstrobj = JSON.parse(err?.message);
      showToast(unstrobj?.errorMessage, "error");
    } catch (e) {}
    console.error("Error updating department issue:", err.message);
    return null;
  }
};

export const getDepartmentIssues = async (
  token: string,
  page: number,
  rowsPerPage: number,
  departmentId: number,
  search: string,
  status?: string
) => {
  try {
    let FUNALURL = `${MASTER_URL}/departments/${departmentId}/issues?`;

    if (search && search !== "") {
      FUNALURL = `${FUNALURL}search=${search}`;
    }
    if (status && status !== "") {
      FUNALURL = `${FUNALURL}&status=${status}`;
    }
    if (page && page !== 0) {
      FUNALURL = `${FUNALURL}&page=${page}`;
    } else {
      FUNALURL = `${FUNALURL}&page=0`;
    }
    if (rowsPerPage && rowsPerPage !== 0) {
      FUNALURL = `${FUNALURL}&size=${rowsPerPage}`;
    } else {
      FUNALURL = `${FUNALURL}&size=10`;
    }

    const header = await getHeaders(token);
    const response = await fetch(`${FUNALURL}`, {
      method: "GET",
      headers: header,
    });
    if (!response.ok) {
      const result = await response.json();
      throw new Error(JSON.stringify({ ...result, status: response.status }));
    }
    const result = await response.json();
    console.log("Department Issues:", result);
    return result;
  } catch (err: any) {
    try {
      const unstrobj = JSON.parse(err?.message);
      showToast(unstrobj?.errorMessage, "error");
    } catch (e) {}
    console.error("Error fetching department issues:", err.message);
    return null;
  }
};

export const getDepartmentIssuesById = async (
  token: string,
  departmentId: number
) => {
  try {
    let FUNALURL = `${MASTER_URL}/departments/${departmentId}/issues`;
    const header = await getHeaders(token);
    const response = await fetch(`${FUNALURL}`, {
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
    console.error("Error fetching department issues:", err.message);
    return null;
  }
};

export const getAllUnits = async (
  token: string,
  page?: number,
  rowsPerPage?: number,
  search?: string,
  status?: string
) => {
  try {
    let url = `${MASTER_URL}/units`;

    const params: Record<string, any> = {};

    if (page !== undefined && rowsPerPage !== undefined) {
      params.page = page;
      params.size = rowsPerPage;
    }

    if (search) {
      params.search = encodeURIComponent(search);
    }

    if (status) {
      params.status = status;
    }

    // build query string dynamically
    const queryString = new URLSearchParams(params).toString();
    if (queryString) {
      url += `?${queryString}`;
    }

    const headers = await getHeaders(token);
    const response = await fetch(url, {
      method: "GET",
      headers,
    });

    if (!response.ok) {
      const result = await response.json();
      throw new Error(JSON.stringify({ ...result, status: response.status }));
    }

    return await response.json();
  } catch (err: any) {
    try {
      const errorObj = JSON.parse(err?.message);
      showToast(errorObj?.detail, "error");
    } catch {}
    console.error("Error fetching units:", err.message);
    return null;
  }
};

export const getAllStore = async (
  token: string,
  page = 0,
  rowsPerPage = 10,
  search = ""
) => {
  try {
    let url = `${MASTER_URL}/storedetail?page=${page}&size=${rowsPerPage}`;

    if (search) {
      url += `&search=${encodeURIComponent(search)}`;
    }

    const headers = await getHeaders(token);
    const response = await fetch(url, {
      method: "GET",
      headers,
    });

    if (!response.ok) {
      const result = await response.json();
      throw new Error(JSON.stringify({ ...result, status: response.status }));
    }

    const result = await response.json();
    return result;
  } catch (err: any) {
    try {
      const errorObj = JSON.parse(err?.message);
      showToast(errorObj?.detail, "error");
    } catch {}
    console.error("Error fetching units:", err.message);
    return null;
  }
};

export const updateCreateUnit = async (token: string, payload: any) => {
  try {
    const header = await getHeaders(token);
    let method = "POST";
    if (payload.id) {
      method = "PUT";
    }
    const response = await fetch(`${MASTER_URL}/units`, {
      method: method,
      headers: header,
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const result = await response.json();
      throw new Error(JSON.stringify({ ...result, status: response.status }));
    }
    const result = await response.json();
    showToast(
      `Unit ${payload.id ? "updated" : "created"} successfully`,
      "success"
    );
    return result;
  } catch (err: any) {
    try {
      const unstrobj = JSON.parse(err?.message);
      if (unstrobj?.detail) {
        showToast(unstrobj?.detail, "error");
      } else {
        showToast(unstrobj?.errorMessage, "error");
      }
    } catch (e) {}
    console.error("Error updating department issue:", err.message);
    return null;
  }
};

export const updateStoreDetails = async (token: string, payload: any) => {
  try {
    const header = await getHeaders(token);
    let method = "POST";
    if (payload.id) {
      method = "PUT";
    }
    const response = await fetch(`${MASTER_URL}/storedetail`, {
      method: method,
      headers: header,
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const result = await response.json();
      throw new Error(JSON.stringify({ ...result, status: response.status }));
    }
    const result = await response.json();
    showToast(
      `Store ${payload.id ? "updated" : "created"} successfully`,
      "success"
    );
    return result;
  } catch (err: any) {
    try {
      const unstrobj = JSON.parse(err?.message);
      showToast(unstrobj?.errorMessage, "error");
    } catch (e) {}
    console.error("Error for store:", err.message);
    return null;
  }
};

export const updateUnit = async (token: string, payload: any) => {
  try {
    const header = await getHeaders(token);

    let FUNALURL = `${MASTER_URL}/units?`;

    const response = await fetch(`${FUNALURL}`, {
      method: "POST",
      headers: header,
      body: JSON.stringify(payload),
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
    console.error("Error fetching department issues:", err.message);
    return null;
  }
};

export const createEquipmentChecklist = async (token: string, payload: any) => {
  try {
    const header = await getHeaders(token);

    let FUNALURL = `${MASTER_URL}/equipment-checklist`;

    const response = await fetch(`${FUNALURL}`, {
      method: "POST",
      headers: header,
      body: JSON.stringify(payload),
    });
    if (!response.ok) {
      const result = await response.json();
      throw new Error(JSON.stringify({ ...result, status: response.status }));
    }
    const result = await response.json();
    showToast("success saved", "success");
    return result;
  } catch (err: any) {
    try {
      const unstrobj = JSON.parse(err?.message);
      showToast(unstrobj?.errorMessage, "error");
    } catch (e) {}
    console.error("Error fetching department issues:", err.message);
    return null;
  }
};

export const deletePPMChecklist = async (token: string, id: any) => {
  try {
    const headers = await getHeaders(token);

    const url = `${MASTER_URL}/equipment-checklist/${id}`;

    const response = await fetch(url, {
      method: "DELETE",
      headers,
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(JSON.stringify({ ...result, status: response.status }));
    }

    showToast("Checklist deleted successfully", "success");
    return result;
  } catch (err: any) {
    try {
      const parsed = JSON.parse(err?.message);
      showToast(parsed?.errorMessage || "An error occurred", "error");
    } catch (e) {
      showToast("Something went wrong", "error");
    }

    console.error("Error deleting checklist:", err.message);
    return null;
  }
};

export const updateEquipmentChecklist = async (token: string, payload: any) => {
  try {
    const header = await getHeaders(token);

    let FUNALURL = `${MASTER_URL}/equipment-checklist`;

    const response = await fetch(`${FUNALURL}`, {
      method: "PUT",
      headers: header,
      body: JSON.stringify(payload),
    });
    if (!response.ok) {
      const result = await response.json();
      throw new Error(JSON.stringify({ ...result, status: response.status }));
    }
    const result = await response.json();
    showToast("success saved", "success");
    return result;
  } catch (err: any) {
    try {
      const unstrobj = JSON.parse(err?.message);
      showToast(unstrobj?.errorMessage, "error");
    } catch (e) {}
    console.error("Error fetching department issues:", err.message);
    return null;
  }
};

export const getStandardType = async (token: string) => {
  try {
    let FUNALURL = `https://gateway.fm.apps.workeye.in/ts/v1/api/public/standard/type`;
    const header = await getHeaders(token);
    const response = await fetch(`${FUNALURL}`, {
      method: "GET",
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
    console.error("Error fetching department issues:", err.message);
    return null;
  }
};

export const getShedule = async (token: string) => {
  try {
    let FUNALURL = `https://gateway.fm.apps.workeye.in/ts/v1/api/public/schedule`;
    const header = await getHeaders(token);
    const response = await fetch(`${FUNALURL}`, {
      method: "GET",
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
    console.error("Error fetching department issues:", err.message);
    return null;
  }
};

export const getEquipmentChecklist = async (
  token: string,
  siteId: string,
  equipmentGroupId: string,
  equipmentId: string,
  schedule: string
) => {
  try {
    let FUNALURL = `${MASTER_URL}/equipment-checklist?siteId=${siteId}&equipmentGroupId=${equipmentGroupId}&equipmentId=${equipmentId}&schedule=${schedule}`;
    const header = await getHeaders(token);
    const response = await fetch(`${FUNALURL}`, {
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
    console.error("Error fetching department issues:", err.message);
    return null;
  }
};

export const createAMCChecklist = async (token: string, payload: any) => {
  try {
    const header = await getHeaders(token);

    let FUNALURL = `${MASTER_URL}/amc/equipment/checklist`;

    const response = await fetch(`${FUNALURL}`, {
      method: "POST",
      headers: header,
      body: JSON.stringify(payload),
    });
    if (!response.ok) {
      const result = await response.json();
      throw new Error(JSON.stringify({ ...result, status: response.status }));
    }
    const result = await response.json();
    showToast("success saved", "success");
    return result;
  } catch (err: any) {
    try {
      const unstrobj = JSON.parse(err?.message);
      showToast(unstrobj?.errorMessage, "error");
    } catch (e) {}
    console.error("Error fetching department issues:", err.message);
    return null;
  }
};

export const deleteAMCChecklist = async (token: string, id: any) => {
  try {
    const headers = await getHeaders(token);

    const url = `${MASTER_URL}/amc/equipment/checklist/${id}`;

    const response = await fetch(url, {
      method: "DELETE",
      headers,
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(JSON.stringify({ ...result, status: response.status }));
    }

    showToast("Checklist deleted successfully", "success");
    return result;
  } catch (err: any) {
    try {
      const parsed = JSON.parse(err?.message);
      showToast(parsed?.errorMessage || "An error occurred", "error");
    } catch (e) {
      showToast("Something went wrong", "error");
    }

    console.error("Error deleting checklist:", err.message);
    return null;
  }
};

export const getAMCChecklist = async (
  token: string,
  siteId: string,
  equipmentGroupId: string,
  equipmentId: string
) => {
  try {
    let FUNALURL = `${MASTER_URL}/amc/equipment/checklist?siteId=${siteId}&equipmentGroupId=${equipmentGroupId}&equipmentId=${equipmentId}`;
    const header = await getHeaders(token);
    const response = await fetch(`${FUNALURL}`, {
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
    console.error("Error fetching department issues:", err.message);
    return null;
  }
};

export const updateAMCChecklist = async (token: string, payload: any) => {
  try {
    const header = await getHeaders(token);

    let FUNALURL = `${MASTER_URL}/amc/equipment/checklist`;

    const response = await fetch(`${FUNALURL}`, {
      method: "PUT",
      headers: header,
      body: JSON.stringify(payload),
    });
    if (!response.ok) {
      const result = await response.json();
      throw new Error(JSON.stringify({ ...result, status: response.status }));
    }
    const result = await response.json();
    showToast("success saved", "success");
    return result;
  } catch (err: any) {
    try {
      const unstrobj = JSON.parse(err?.message);
      showToast(unstrobj?.errorMessage, "error");
    } catch (e) {}
    console.error("Error fetching department issues:", err.message);
    return null;
  }
};

export const getQrConfig = async (token: string) => {
  try {
    const header = await getHeaders(token);

    const url = new URL(`${MASTER_URL}/siteqr/all`);
    const response = await fetch(url, {
      method: "GET",
      headers: header,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    return result;
  } catch (err: any) {
    console.error("Error fetching QR config:", err.message);
    return null;
  }
};

export const updateQrConfig = async (token: string, payload: any) => {
  try {
    const header = await getHeaders(token);

    let FUNALURL = `${MASTER_URL}/siteqr`;

    const response = await fetch(`${FUNALURL}`, {
      method: "POST",
      headers: header,
      body: JSON.stringify(payload),
    });
    if (!response.ok) {
      const result = await response.json();
      throw new Error(JSON.stringify({ ...result, status: response.status }));
    }
    const result = await response.json();
    showToast("Config Saved", "success");
    return result;
  } catch (err: any) {
    try {
      const unstrobj = JSON.parse(err?.message);
      showToast(unstrobj?.errorMessage, "error");
    } catch (e) {}
    console.error("Error fetching department issues:", err.message);
    return null;
  }
};

export const getQrData = async (token: string) => {
  try {
    const header = await getHeaders(token);

    const url = new URL(`${MASTER_URL}/siteqr/site-qr/details`);
    const response = await fetch(url, {
      method: "GET",
      headers: header,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    return result;
  } catch (err: any) {
    console.error("Error fetching QR config:", err.message);
    return null;
  }
};
