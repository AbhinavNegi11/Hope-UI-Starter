import { showToast } from "@/utilities/ToastNotification";
import { getHeaders, getHeadersForImage } from "../../header/header1";
import { Api_Url } from "../../all-api-url/api-url";
import { isValidQueryParam } from "@/utilities/ValidationApi";

const Gateway_Url = "tfm/v1/api";

const MASTER_URL = `${Api_Url}/${Gateway_Url}`;

export async function getEngRequests(
  token: any,
  filters?: {
    siteSelected?: any;
    blockSelected?: any;
    groupSelected?: any;
    callerSelected?: any;
    searchData?: any;
    page?: any;
    rowsPerPage?: any;
    download?: boolean;
  }
) {
  try {
    const header = await getHeaders(token);
    const params = new URLSearchParams();

    if (filters) {
      const {
        siteSelected,
        blockSelected,
        groupSelected,
        callerSelected,
        searchData,
        page,
        rowsPerPage,
        download,
      } = filters;

      if (isValidQueryParam(siteSelected)) params.append("site", siteSelected);
      if (isValidQueryParam(blockSelected))
        params.append("block", blockSelected);
      if (isValidQueryParam(groupSelected))
        params.append("equipmentGroup", groupSelected);
      if (isValidQueryParam(callerSelected))
        params.append("enabled", callerSelected);
      if (isValidQueryParam(searchData)) params.append("search", searchData);

      if (page !== undefined) params.append("page", String(page));
      if (rowsPerPage !== undefined) params.append("size", String(rowsPerPage));
      if (typeof download === "boolean")
        params.append("download", String(download));
    }

    const queryString = params.toString();
    const url = `${MASTER_URL}/engineering/request${
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

export const CreateEngRequest = async (token: string, payload: any) => {
  try {
    const header = await getHeaders(token);
    const response = await fetch(`${MASTER_URL}/engineering/request`, {
      method: "POST",
      headers: header,
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const result = await response.json();
      throw new Error(JSON.stringify({ ...result, status: response.status }));
    }
    const result = await response.json();
    showToast("Engineering request created", "success");
    return result;
  } catch (err: any) {
    try {
      const unstrobj = JSON.parse(err?.message);
      showToast(unstrobj?.detail, "error");
    } catch (e) {}
    console.error("Error create tfm request :", err.message);
    return null;
  }
};

export const getEngSite = async (token: string) => {
  try {
    const header = await getHeaders(token);
    const response = await fetch(`${MASTER_URL}/engineering/master/sites`, {
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
    console.error("Error fetching tfm request:", err.message);
    return null;
  }
};

export const getEngBlocksBySiteId = async (token: string, siteId: string) => {
  try {
    const header = await getHeaders(token);
    const response = await fetch(
      `${MASTER_URL}/engineering/master/sites/${siteId}/blocks`,
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
      showToast(unstrobj?.detail, "error");
    } catch (e) {}
    console.error("Error creating department:", err.message);
    return null;
  }
};

export const getEngGroup = async (token: string) => {
  try {
    const header = await getHeaders(token);
    const response = await fetch(
      `${MASTER_URL}/engineering/master/equipment-group/by-login-user`,
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

export const getEngCallerType = async (token: string) => {
  try {
    const header = await getHeaders(token);
    const response = await fetch(`${MASTER_URL}/engineering/master/call-type`, {
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

export const getEngAssignUser = async (token: string, id: any) => {
  try {
    const header = await getHeaders(token);
    const response = await fetch(
      `${MASTER_URL}/engineering/master/assign/user/by-site-id/${id}`,
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
      showToast(unstrobj?.detail, "error");
    } catch (e) {}
    console.error("Error creating department:", err.message);
    return null;
  }
};

export const getEngServiceProvider = async (token: string) => {
  try {
    const header = await getHeaders(token);
    const response = await fetch(
      `${MASTER_URL}/engineering/master/service-provider/by-login-user`,
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
      showToast(unstrobj?.detail, "error");
    } catch (e) {}
    console.error("Error creating department:", err.message);
    return null;
  }
};

export const getEngUserBySiteId = async (token: string, siteId: string) => {
  try {
    const header = await getHeaders(token);
    const response = await fetch(
      `${MASTER_URL}/tfm/master/user/by-site-id/${siteId}`,
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
      showToast(unstrobj?.detail, "error");
    } catch (e) {}
    console.error("Error creating department:", err.message);
    return null;
  }
};

export const getEngDoneBy = async (token: string) => {
  try {
    const header = await getHeaders(token);
    const response = await fetch(`${MASTER_URL}/engineering/master/done-by`, {
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

export const getEngEquipmentGroup = async (token: string) => {
  try {
    const header = await getHeaders(token);
    const response = await fetch(
      `${MASTER_URL}/engineering/master/equipment-group/by-login-user`,
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
      showToast(unstrobj?.detail, "error");
    } catch (e) {}
    console.error("Error creating department:", err.message);
    return null;
  }
};

export const getEngEquipmentByGroupId = async (
  token: string,
  groupSelected: string
) => {
  try {
    const header = await getHeaders(token);
    const response = await fetch(
      `${MASTER_URL}/engineering/master/equipment-detail/by-equipment-group-id/${groupSelected}`,
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
      showToast(unstrobj?.detail, "error");
    } catch (e) {}
    console.error("Error creating department:", err.message);
    return null;
  }
};

export const uploadImageEngRequest = async (token: string, file: File) => {
  const formData = new FormData();
  formData.append("file", file);

  const headers = await getHeadersForImage(token);

  const response = await fetch(`${MASTER_URL}/engineering/request/upload`, {
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

export const getImageEngRequest = async (token: string, fileName: any) => {
  const headers = await getHeadersForImage(token);

  const response = await fetch(
    `${MASTER_URL}/engineering/request/upload?filename=${fileName}`,
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

export const engAssign = async (token: string, payload: any) => {
  try {
    const header = await getHeaders(token);
    const response = await fetch(`${MASTER_URL}/engineering/request/assign`, {
      method: "PUT",
      headers: header,
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const result = await response.json();
      throw new Error(JSON.stringify({ ...result, status: response.status }));
    }
    const result = await response.json();
    showToast("Request assign sucessfull", "success");
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

export const engWorkProgress = async (token: string, payload: any) => {
  try {
    const header = await getHeaders(token);
    const response = await fetch(
      `${MASTER_URL}/engineering/request/work-in-progress`,
      {
        method: "PUT",
        headers: header,
        body: JSON.stringify(payload),
      }
    );

    if (!response.ok) {
      const result = await response.json();
      throw new Error(JSON.stringify({ ...result, status: response.status }));
    }
    const result = await response.json();
    showToast("Request assign sucessfull", "success");
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

export const EngVisit = async (token: string, payload: any) => {
  try {
    const header = await getHeaders(token);
    const response = await fetch(`${MASTER_URL}/engineering/request/visits`, {
      method: "PUT",
      headers: header,
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const result = await response.json();
      throw new Error(JSON.stringify({ ...result, status: response.status }));
    }
    const result = await response.json();
    showToast("Request assign sucessfull", "success");
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

export const getEngJobCard = async (token: string, requestId: any) => {
  try {
    const header = await getHeaders(token);
    const response = await fetch(
      `${MASTER_URL}/engineering/request/job-card/${requestId}`,
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
