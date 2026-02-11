import { showToast } from "@/utilities/ToastNotification";
import { Api_Url } from "../all-api-url/api-url";
import { getHeaders, getHeadersForImage } from "../header/header1";

const Gateway_Url = "equipment/v1/api";

const MASTER_URL = `${Api_Url}/${Gateway_Url}`;

//Meter

export const getAllAMCData = async (
  token: any,
  siteId: any,
  groupId: any,
  EquipmentId: any
) => {
  try {
    let url = `${MASTER_URL}/amc/visit/search?page=0&size=1000`;
    if (siteId) {
      url += `&site=${siteId}`;
    }
    if (groupId) {
      url += `&group=${groupId}`;
    }
    if (EquipmentId) {
      url += `&equipment=${EquipmentId}`;
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
      showToast(unstrobj?.errorMessage, "error");
    } catch (e) {}
    console.error("Error fetch meter:", err.message);
    return null;
  }
};

export const createGroupEquipment = async (token: string, payload: any) => {
  try {
    const header = await getHeaders(token);
    const response = await fetch(`${MASTER_URL}/equipment-group/`, {
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

export const editAmcAssign = async (
  token: string,
  email: any,
  assign: any,
  id: any
) => {
  try {
    const header = await getHeaders(token);
    const response = await fetch(
      `${MASTER_URL}/amc/visit/assign?id=${id}&assignTo=${assign}&emailTo=${email}`,
      {
        method: "PUT",
        headers: header,
      }
    );
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

export const editAmcReAssign = async (
  token: string,
  email: any,
  assign: any,
  id: any
) => {
  try {
    const header = await getHeaders(token);
    const response = await fetch(
      `${MASTER_URL}/amc/visit/re-assign?id=${id}&assignTo=${assign}&emailTo=${email}`,
      {
        method: "PUT",
        headers: header,
      }
    );
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

export const getAllAMCAssign = async (token: any, siteId: any) => {
  try {
    let url = `${MASTER_URL}/master/user/by-site-id/${siteId}`;
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
      showToast(unstrobj?.errorMessage, "error");
    } catch (e) {}
    console.error("Error fetch meter:", err.message);
    return null;
  }
};

export const getAllUser = async (token: any) => {
  try {
    let url = `${MASTER_URL}/master/user`;
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
      showToast(unstrobj?.errorMessage, "error");
    } catch (e) {}
    console.error("Error fetch meter:", err.message);
    return null;
  }
};

export const amcVisitPost = async (token: string, id: any, payload: any) => {
  try {
    const header = await getHeaders(token);
    const response = await fetch(`${MASTER_URL}/amc/visit/${id}/visits`, {
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

export const jobCardAmc = async (token: string, id: any) => {
  try {
    const header = await getHeaders(token);
    const response = await fetch(`${MASTER_URL}/amc/visit/${id}/job-card`, {
      method: "GET",
      headers: header,
    });
    if (!response.ok) {
      const result = await response.json();
      throw new Error(JSON.stringify({ ...result, status: response.status }));
    }
    const result = await response.json();
    // showToast("Success saved ", "success");
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

export const checkListAmc = async (token: string, id: any) => {
  try {
    const header = await getHeaders(token);
    const response = await fetch(
      `${MASTER_URL}/master/checklist-by-amc-visit-id/${id}`,
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
    // showToast("Success saved ", "success");
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

export const attachmentUpload = async (token: string, payload: any) => {
  try {
    const header = await getHeaders(token);
    const response = await fetch(`${MASTER_URL}/equipment-detail/upload`, {
      method: "POST",
      headers: await getHeadersForImage(token),
      body: payload,
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

export const getAttachmentUpload = async (token: string, fileName: any) => {
  try {
    const header = await getHeaders(token);
    const response = await fetch(
      `${MASTER_URL}/equipment-detail/upload?filename=${fileName}`,
      {
        method: "GET",
        headers: await getHeadersForImage(token),
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

export const amcVisitChecklistPost = async (
  token: string,
  id: any,
  payload: any
) => {
  try {
    const header = await getHeaders(token);
    const response = await fetch(`${MASTER_URL}/amc/visit/${id}/checklist`, {
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
