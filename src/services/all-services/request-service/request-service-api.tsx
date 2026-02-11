import { showToast } from "@/utilities/ToastNotification";
import { getHeaders, getHeadersForImage } from "../../header/header1";
import { Api_Url } from "../../all-api-url/api-url";
import { isValidQueryParam } from "@/utilities/ValidationApi";

const Gateway_Url = "tfm/v1/api";

const MASTER_URL = `${Api_Url}/${Gateway_Url}`;

//TFM Request

export const getTfmSite = async (token: string) => {
  try {
    const header = await getHeaders(token);
    const response = await fetch(`${MASTER_URL}/tfm/master/sites`, {
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

export async function getTfmRequests(
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
    download?: boolean;
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
        download,
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
      if (typeof download === "boolean") {
        params.append("download", String(download));
      }
    }

    const queryString = params.toString();
    const url = `${MASTER_URL}/tfm/request${
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

export async function getTfmV1Requests(
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
    download?: boolean;
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
        download,
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
      if (typeof download === "boolean") {
        params.append("download", String(download));
      }
    }

    const queryString = params.toString();
    const url = `${MASTER_URL}/tfm/v1/request${
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

export async function getTfmV4Requests(
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
    download?: boolean;
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
        download,
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
      if (typeof download === "boolean") {
        params.append("download", String(download));
      }
    }

    const queryString = params.toString();
    const url = `${MASTER_URL}/tfm/v4/request${
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

export const CreateTfmRequest = async (token: string, payload: any) => {
  try {
    const header = await getHeaders(token);
    const response = await fetch(`${MASTER_URL}/tfm/request`, {
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

export const CreateTfmV1Request = async (token: string, payload: any) => {
  try {
    const header = await getHeaders(token);
    const response = await fetch(`${MASTER_URL}/tfm/v1/request`, {
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

export const CreateTfmV2Request = async (token: string, payload: any) => {
  try {
    const header = await getHeaders(token);
    const response = await fetch(`${MASTER_URL}/tfm/v2/request`, {
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

export const CreateTfmV4Request = async (token: string, payload: any) => {
  try {
    const header = await getHeaders(token);
    const response = await fetch(`${MASTER_URL}/tfm/v4/request`, {
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

export const CreateTfmRequestByCustomer = async (
  token: string,
  payload: any
) => {
  try {
    const header = await getHeaders(token);
    const response = await fetch(`${MASTER_URL}/tfm/request/register`, {
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

export const CreateTfmRequestByV1Customer = async (
  token: string,
  payload: any
) => {
  try {
    const header = await getHeaders(token);
    const response = await fetch(`${MASTER_URL}/tfm/v1/request/register`, {
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

export const CreateTfmRequestByV2Customer = async (
  token: string,
  payload: any
) => {
  try {
    const header = await getHeaders(token);
    const response = await fetch(`${MASTER_URL}/tfm/v2/request/register`, {
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

export const uploadImageTfmRequest = async (token: string, file: File) => {
  const formData = new FormData();
  formData.append("file", file);

  const headers = await getHeadersForImage(token);

  const response = await fetch(`${MASTER_URL}/tfm/request/upload`, {
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

export const getImageTfmRequest = async (token: string, fileName: any) => {
  const headers = await getHeadersForImage(token);

  const response = await fetch(
    `${MASTER_URL}/tfm/request/upload?filename=${fileName}`,
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

export const getCallerSource = async (token: string) => {
  try {
    const header = await getHeaders(token);
    const response = await fetch(`${MASTER_URL}/tfm/master/source`, {
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

export const tfmAssign = async (token: string, payload: any) => {
  try {
    const header = await getHeaders(token);
    const response = await fetch(`${MASTER_URL}/tfm/request/assign`, {
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

export const tfmV4Assign = async (token: string, payload: any) => {
  try {
    const header = await getHeaders(token);
    const response = await fetch(`${MASTER_URL}/tfm/v4/request/assign`, {
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

export const tfmReAssign = async (token: string, payload: any) => {
  try {
    const header = await getHeaders(token);
    const response = await fetch(`${MASTER_URL}/tfm/request/job-re-assign`, {
      method: "PUT",
      headers: header,
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const result = await response.json();
      throw new Error(JSON.stringify({ ...result, status: response.status }));
    }
    const result = await response.json();
    showToast("Request re-assign sucessfull", "success");
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

export const tfmV1ReAssign = async (token: string, payload: any) => {
  try {
    const header = await getHeaders(token);
    const response = await fetch(`${MASTER_URL}/tfm/v1/request/job-re-assign`, {
      method: "PUT",
      headers: header,
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const result = await response.json();
      throw new Error(JSON.stringify({ ...result, status: response.status }));
    }
    const result = await response.json();
    showToast("Request re-assign sucessfull", "success");
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

export const tfmV4ReAssign = async (token: string, payload: any) => {
  try {
    const header = await getHeaders(token);
    const response = await fetch(`${MASTER_URL}/tfm/v4/request/job-re-assign`, {
      method: "PUT",
      headers: header,
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const result = await response.json();
      throw new Error(JSON.stringify({ ...result, status: response.status }));
    }
    const result = await response.json();
    showToast("Request re-assign sucessfull", "success");
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

export const tfmJobResponse = async (token: string, payload: any) => {
  try {
    const header = await getHeaders(token);
    const response = await fetch(`${MASTER_URL}/tfm/request/job-response`, {
      method: "PUT",
      headers: header,
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const result = await response.json();
      throw new Error(JSON.stringify({ ...result, status: response.status }));
    }
    const result = await response.json();
    showToast("Job response update sucessfully", "success");
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

export const getTfmWIPReason = async (token: string) => {
  try {
    const header = await getHeaders(token);
    const response = await fetch(`${MASTER_URL}/tfm/master/wip-reason`, {
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
    console.error("Error create tfm request :", err.message);
    return null;
  }
};

export const tfmChangeCompleteDate = async (token: string, payload: any) => {
  try {
    const header = await getHeaders(token);
    const response = await fetch(`${MASTER_URL}/tfm/request/job-change-date`, {
      method: "PUT",
      headers: header,
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const result = await response.json();
      throw new Error(JSON.stringify({ ...result, status: response.status }));
    }
    const result = await response.json();
    showToast("Completion date change sucessfully", "success");
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

export const tfmV1Wip = async (token: string, payload: any) => {
  try {
    const header = await getHeaders(token);
    const response = await fetch(`${MASTER_URL}/tfm/v1/request/wip`, {
      method: "PUT",
      headers: header,
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const result = await response.json();
      throw new Error(JSON.stringify({ ...result, status: response.status }));
    }
    const result = await response.json();
    showToast("Completion date change sucessfully", "success");
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

export const tfmV4Wip = async (token: string, payload: any) => {
  try {
    const header = await getHeaders(token);
    const response = await fetch(`${MASTER_URL}/tfm/v4/request/wip`, {
      method: "PUT",
      headers: header,
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const result = await response.json();
      throw new Error(JSON.stringify({ ...result, status: response.status }));
    }
    const result = await response.json();
    showToast("Completion date change sucessfully", "success");
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

export const tfmCloseRequest = async (token: string, payload: any) => {
  try {
    const header = await getHeaders(token);
    const response = await fetch(
      `${MASTER_URL}/tfm/request/job-close-request`,
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
    showToast("Job request closed sucessfully", "success");
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

export const tfmV1CloseRequest = async (token: string, payload: any) => {
  try {
    const header = await getHeaders(token);
    const response = await fetch(
      `${MASTER_URL}/tfm/v1/request/job-close-request`,
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
    showToast("Job request closed sucessfully", "success");
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

export const tfmV4CloseRequest = async (token: string, payload: any) => {
  try {
    const header = await getHeaders(token);
    const response = await fetch(
      `${MASTER_URL}/tfm/v4/request/job-close-request`,
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
    showToast("Job request closed sucessfully", "success");
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

export const reOpenRequest = async (token: string, payload: any) => {
  try {
    const header = await getHeaders(token);
    const response = await fetch(
      `${MASTER_URL}/tfm/request/job-re-open-request`,
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
    showToast("Job request closed sucessfully", "success");
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

export const tfmCancelRequest = async (token: string, payload: any) => {
  try {
    const header = await getHeaders(token);
    const response = await fetch(
      `${MASTER_URL}/tfm/request/job-cancle-request`,
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
    showToast("Job request cancel sucessfully", "success");
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

export const getTfmJobCard = async (token: string, requestId: any) => {
  try {
    const header = await getHeaders(token);
    const response = await fetch(
      `${MASTER_URL}/tfm/request/job-card/${requestId}`,
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

export const tfmClearRequest = async (token: string, payload: any) => {
  try {
    const header = await getHeaders(token);
    const response = await fetch(`${MASTER_URL}/tfm/request/job-clear`, {
      method: "PUT",
      headers: header,
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const result = await response.json();
      throw new Error(JSON.stringify({ ...result, status: response.status }));
    }
    const result = await response.json();
    showToast("Job request clear sucessfully", "success");
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
//TFM Request Master

export const getTfmBlocksBySiteId = async (token: string, siteId: string) => {
  try {
    const header = await getHeaders(token);
    const response = await fetch(
      `${MASTER_URL}/tfm/master/sites/${siteId}/blocks`,
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

export const getTfmFloor = async (
  token: string,
  siteId: string,
  blockId: any
) => {
  try {
    const header = await getHeaders(token);
    const response = await fetch(
      `${MASTER_URL}/tfm/master/sites/${siteId}/blocks/${blockId}/floors`,
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

export const getTfmZone = async (
  token: any,
  siteId: any,
  blockId: any,
  floorId: any
) => {
  try {
    const header = await getHeaders(token);
    const response = await fetch(
      `${MASTER_URL}/tfm/master/sites/${siteId}/blocks/${blockId}/floors/${floorId}/zones`,
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

export const getTfmMasterStatus = async (token: string) => {
  try {
    const header = await getHeaders(token);
    const response = await fetch(`${MASTER_URL}/tfm/master/status`, {
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

export const getTfmDepartment = async (token: string) => {
  try {
    const header = await getHeaders(token);
    const response = await fetch(
      `${MASTER_URL}/tfm/master/departments/by-login-user`,
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

export const getTfmDepartmentIssue = async (token: any, departmentId: any) => {
  try {
    const header = await getHeaders(token);
    const response = await fetch(
      `${MASTER_URL}/tfm/master/issues/by-tfm-department-id/${departmentId}`,
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

export const getTfmSource = async (token: any) => {
  try {
    const header = await getHeaders(token);
    const response = await fetch(`${MASTER_URL}/tfm/master/source`, {
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

export const getTfmStatus = async (token: any) => {
  try {
    const header = await getHeaders(token);
    const response = await fetch(`${MASTER_URL}/tfm/master/status`, {
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

export const getTfmV1Status = async (token: any) => {
  try {
    const header = await getHeaders(token);
    const response = await fetch(`${MASTER_URL}/tfm/master/v1/status`, {
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

export const getTfmV2Status = async (token: any) => {
  try {
    const header = await getHeaders(token);
    const response = await fetch(`${MASTER_URL}/tfm/master/v2/status`, {
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

export const getTfmV4Status = async (token: any) => {
  try {
    const header = await getHeaders(token);
    const response = await fetch(`${MASTER_URL}/tfm/master/v4/status`, {
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

export const getTfmUser = async (token: any, siteId: any) => {
  try {
    const header = await getHeaders(token);
    const response = await fetch(`${MASTER_URL}/tfm/master/user-type`, {
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

export const getTfmUserRequestId = async (token: any, requestId: any) => {
  try {
    const header = await getHeaders(token);
    const response = await fetch(
      `${MASTER_URL}/tfm/master/user/by-tfm-request-id/${requestId}`,
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

export const getTfmUserBySiteId = async (token: any, siteId: any) => {
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
    } catch (e) {}
    console.error("Error fetching tfm request:", err.message);
    return null;
  }
};

export const getAssignedUserBySiteId = async (token: any, siteId: any) => {
  try {
    const header = await getHeaders(token);
    const response = await fetch(
      `${MASTER_URL}/tfm/master/assign/user/by-site-id/${siteId}`,
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

export const getAssignedUserV2BySiteId = async (token: any, siteId: any) => {
  try {
    const header = await getHeaders(token);
    const response = await fetch(
      `${MASTER_URL}/tfm/master/v2/assign/user/by-site-id/${siteId}`,
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

export const getAssignedUserV4BySiteId = async (token: any, siteId: any) => {
  try {
    const header = await getHeaders(token);
    const response = await fetch(
      `${MASTER_URL}/tfm/master/v4/assign/user/by-site-id/${siteId}`,
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

export const getAssignedV1UserByDepartmentId = async (
  token: any,
  depId: any
) => {
  try {
    const header = await getHeaders(token);
    const response = await fetch(
      `${MASTER_URL}/tfm/master/v1/assign/user/by-department-id/${depId}`,
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

export const getTfmReAssignUserBySiteId = async (token: any, siteId: any) => {
  try {
    const header = await getHeaders(token);
    const response = await fetch(
      `${MASTER_URL}/tfm/master/re-assign/user/by-site-id/${siteId}`,
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

export const getTfmV1ReAssignUserByDeptId = async (token: any, deptId: any) => {
  try {
    const header = await getHeaders(token);
    const response = await fetch(
      `${MASTER_URL}/tfm/master/v1/re-assign/user/${deptId}`,
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

export const getInventryBySiteId = async (token: any, siteId: any) => {
  try {
    const header = await getHeaders(token);
    const response = await fetch(
      `${MASTER_URL}/tfm/master/inventory/by-site-id/${siteId}`,
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

export const getTechnicanByRequestId = async (token: any, requestId: any) => {
  try {
    const header = await getHeaders(token);
    const response = await fetch(
      `${MASTER_URL}/tfm/master/technical/by-tfm-request-id/${requestId}`,
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

export const getTfmCallType = async (token: string) => {
  try {
    const header = await getHeaders(token);
    const response = await fetch(`${MASTER_URL}/tfm/master/call-type`, {
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

export const getTfmAssetsSearch = async (token: string, search: any) => {
  try {
    const header = await getHeaders(token);
    const response = await fetch(
      `${MASTER_URL}/tfm/master/assets/search?search=${search}`,
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
