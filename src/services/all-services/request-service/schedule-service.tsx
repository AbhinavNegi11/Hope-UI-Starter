import { showToast } from "@/utilities/ToastNotification";
import { getHeaders, getHeadersForImage } from "../../header/header1";
import { Api_Url } from "../../all-api-url/api-url";
import { isValidQueryParam } from "@/utilities/ValidationApi";

const Gateway_Url = "tfm/v1/api";

const MASTER_URL = `${Api_Url}/${Gateway_Url}`;

export async function getScheduleComplaint(
  token: any,
  filters?: {
    site?: any;
    block?: any;
    department?: any;
    assign?: any;
    enabled?: any;
    searchData?: any;
    page?: any;
    rowsPerPage?: any;
  }
) {
  try {
    const header = await getHeaders(token);
    const params = new URLSearchParams();
    if (filters) {
      const {
        site,
        block,
        department,
        assign,
        enabled,
        searchData,
        page,
        rowsPerPage,
      } = filters;

      if (isValidQueryParam(site)) params.append("site", site);
      if (isValidQueryParam(block)) params.append("block", block);
      if (isValidQueryParam(department))
        params.append("department", department);
      if (isValidQueryParam(assign)) params.append("assign", assign);
      if (isValidQueryParam(enabled)) params.append("enabled", enabled);
      if (isValidQueryParam(searchData)) params.append("search", searchData);
      if (isValidQueryParam(page)) params.append("page", String(page));
      if (isValidQueryParam(rowsPerPage))
        params.append("size", String(rowsPerPage));
    }

    const queryString = params.toString();
    const url = `${MASTER_URL}/schedule/complaint${
      queryString ? "?" + queryString : ""
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
      var unstrobj = JSON.parse(err?.message);
    } catch (e) {}
    console.error("Error fetching TFM requests:", err.message);
    return null;
  }
}

export const postScheduleComplaint = async (token: string, payload: any) => {
  try {
    const header = await getHeaders(token);
    const response = await fetch(`${MASTER_URL}/schedule/complaint`, {
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

export const getScheduleComplaintSite = async (token: string) => {
  try {
    const header = await getHeaders(token);
    const response = await fetch(
      `${MASTER_URL}/schedule/complaint/master/sites`,
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
    } catch (e) {}
    console.error("Error fetching tfm request:", err.message);
    return null;
  }
};

export const getScheduleComplaintBlockBySite = async (
  token: string,
  siteId: any
) => {
  try {
    const header = await getHeaders(token);
    const response = await fetch(
      `${MASTER_URL}/schedule/complaint/master/sites/${siteId}/blocks`,
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
    } catch (e) {}
    console.error("Error fetching tfm request:", err.message);
    return null;
  }
};

export const getScheduleComplaintFloorByBlock = async (
  token: string,
  siteId: any,
  blockId: any
) => {
  try {
    const header = await getHeaders(token);
    const response = await fetch(
      `${MASTER_URL}/schedule/complaint/master/sites/${siteId}/blocks/${blockId}/floors`,
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
    } catch (e) {}
    console.error("Error fetching tfm request:", err.message);
    return null;
  }
};

export const getScheduleComplaintZoneByFloor = async (
  token: string,
  siteId: any,
  blockId: any,
  floorId: any
) => {
  try {
    const header = await getHeaders(token);
    const response = await fetch(
      `${MASTER_URL}/schedule/complaint/master/sites/${siteId}/blocks/${blockId}/floors/${floorId}/zones`,
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
    } catch (e) {}
    console.error("Error fetching tfm request:", err.message);
    return null;
  }
};

export const getScheduleComplaintDepartment = async (token: string) => {
  try {
    const header = await getHeaders(token);
    const response = await fetch(
      `${MASTER_URL}/schedule/complaint/master/departments/by-login-user`,
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
    } catch (e) {}
    console.error("Error fetching tfm request:", err.message);
    return null;
  }
};

export const getScheduleComplaintIssueByDepId = async (
  token: string,
  depId: any
) => {
  try {
    const header = await getHeaders(token);
    const response = await fetch(
      `${MASTER_URL}/schedule/complaint/master/issues/by-tfm-department-id/${depId}`,
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
    } catch (e) {}
    console.error("Error fetching tfm request:", err.message);
    return null;
  }
};

export const getScheduleComplaintUserType = async (token: string) => {
  try {
    const header = await getHeaders(token);
    const response = await fetch(
      `${MASTER_URL}/schedule/complaint/master/user-type`,
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
    } catch (e) {}
    console.error("Error fetching tfm request:", err.message);
    return null;
  }
};

export const getScheduleComplaintUserBySite = async (
  token: string,
  siteId: any
) => {
  try {
    const header = await getHeaders(token);
    const response = await fetch(
      `${MASTER_URL}/schedule/complaint/master/user/by-site-id/${siteId}`,
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
    } catch (e) {}
    console.error("Error fetching tfm request:", err.message);
    return null;
  }
};

export const getScheduleComplaintSchedules = async (token: string) => {
  try {
    const header = await getHeaders(token);
    const response = await fetch(
      `${MASTER_URL}/schedule/complaint/master/schedules`,
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
    } catch (e) {}
    console.error("Error fetching tfm request:", err.message);
    return null;
  }
};

export const getScheduleComplaintWeekdays = async (token: string) => {
  try {
    const header = await getHeaders(token);
    const response = await fetch(
      `${MASTER_URL}/schedule/complaint/master/week-days`,
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
    } catch (e) {}
    console.error("Error fetching tfm request:", err.message);
    return null;
  }
};

export const getScheduleComplaintStatus = async (token: string) => {
  try {
    const header = await getHeaders(token);
    const response = await fetch(
      `${MASTER_URL}/schedule/complaint/master/status`,
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
    } catch (e) {}
    console.error("Error fetching tfm request:", err.message);
    return null;
  }
};
