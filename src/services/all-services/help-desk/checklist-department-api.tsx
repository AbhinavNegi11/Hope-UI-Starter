import { Api_Url } from "@/services/all-api-url/api-url";
import { getHeaders } from "@/services/header/header1";
import { showToast } from "@/utilities/ToastNotification";

const Gateway_Url = "helpdesk/v1/api";

const MASTER_URL = `${Api_Url}/${Gateway_Url}`;

// Get all department

export const getChecklistDepartment = async (
  token: any,
  page: any,
  rowsPerPage: any,
  search?: any,
  status?: any
) => {
  try {
    let finalUrl = `${MASTER_URL}/checklist-departments?page=${
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

export const createChecklistDepartment = async (
  token: string,
  payload: any
) => {
  try {
    const header = await getHeaders(token);
    const response = await fetch(`${MASTER_URL}/checklist-departments`, {
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

export const checklistDepartmentStatus = async (
  token: string,
  id: string,
  status: string
) => {
  try {
    const header = await getHeaders(token);
    const response = await fetch(
      `${MASTER_URL}/checklist-departments/active-inactive?id=${id}&status=${status}`,
      {
        method: "POST",
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
