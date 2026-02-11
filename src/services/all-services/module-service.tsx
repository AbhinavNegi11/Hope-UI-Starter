import { showToast } from "@/utilities/ToastNotification";
import { Api_Url } from "../all-api-url/api-url";
import { getHeaders } from "../header/header1";

const Gateway_Url = "ts/v1/api";

const MASTER_URL = `${Api_Url}/${Gateway_Url}`;

export const getAllModule = async (
  token: string,
  options?: {
    keyword?: string;
    page?: number;
    size?: number;
  }
) => {
  try {
    const header = await getHeaders(token);

    // Build query parameters
    const params = new URLSearchParams();

    if (options?.keyword) {
      params.append("keyword", options.keyword);
    }
    if (options?.page !== undefined) {
      params.append("page", options.page.toString());
    }
    if (options?.size !== undefined) {
      params.append("size", options.size.toString());
    }
    params.append("sort", "ascending");

    const response = await fetch(
      `${MASTER_URL}/app/modules/search?${params.toString()}`,
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
      const unstrobj = JSON.parse(err?.message);
      showToast(unstrobj?.detail, "error");
    } catch (e) {}
    console.error("Error fetching modules:", err.message);
    return null;
  }
};

export const addModule = async (token: string, payload: any) => {
  try {
    const header = await getHeaders(token);
    const response = await fetch(`${MASTER_URL}/app/modules`, {
      method: "POST",
      headers: header,
      body: JSON.stringify(payload),
    });
    if (!response.ok) {
      const result = await response.json();
      throw new Error(JSON.stringify({ ...result, status: response.status }));
    }
    const result = await response.json();
    showToast("save success", "success");
    return result;
  } catch (err: any) {
    try {
      var unstrobj = JSON.parse(err?.message);
      showToast(unstrobj?.detail, "error");
    } catch (e) {}
    console.error("Error add new stock:", err.message);
    return null;
  }
};

export const getMenuByModuleId = async (token: string, id: any, deboSearch:any) => {
  try {
    let url = `${MASTER_URL}/app/menus/Module/${id}`;
    if (deboSearch) {
      url += `?keyword=${deboSearch}`;
    }
    const header = await getHeaders(token);
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
      showToast(unstrobj?.detail, "error");
    } catch (e) {}
    console.error("Error creating department:", err.message);
    return null;
  }
};

export const addMenu = async (token: string, payload: any) => {
  try {
    const header = await getHeaders(token);
    const response = await fetch(`${MASTER_URL}/app/menus`, {
      method: "POST",
      headers: header,
      body: JSON.stringify(payload),
    });
    if (!response.ok) {
      const result = await response.json();
      throw new Error(JSON.stringify({ ...result, status: response.status }));
    }
    const result = await response.json();
    showToast("save success", "success");
    return result;
  } catch (err: any) {
    try {
      var unstrobj = JSON.parse(err?.message);
      showToast(unstrobj?.detail, "error");
    } catch (e) {}
    console.error("Error add new stock:", err.message);
    return null;
  }
};
