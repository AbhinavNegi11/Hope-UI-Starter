import { Api_Url } from "@/services/all-api-url/api-url";
import { getHeaders, getHeadersForImage } from "@/services/header/header1";
import { showToast } from "@/utilities/ToastNotification";

const Gateway_Url = "helpdesk/v1/api";

const MASTER_URL = `${Api_Url}/${Gateway_Url}`;

// Get all sites
export const getAllSites = async (token: string) => {
  try {
    const response = await fetch(`${MASTER_URL}/work-permit-master/sites`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      }
    });
    if (!response.ok) {
      const result = await response.json();
      throw new Error(JSON.stringify({ ...result, status: response.status }));
    }
    const result = await response.json();
    return result;
  } catch (err: any) {
    console.error("Error fetching sites:", err.message);
    return null;
  }
};

export const getAllWorkPermitApproval = async (token: string, page:any, size:any,search:any, siteId:any, fromDate:any, toDate:any, selectedWorkingType:any) => {
  try {
    let url = `${MASTER_URL}/work-permit/work-order/search?`;
    if (page >= 0) {
      url += `page=${page}&`; 
    }
    if (size) {
      url += `size=${size}&`;
    }
    if (search) {
      url += `search=${search}&`;
    }
    if (siteId) {
      url += `siteId=${siteId}&`;
    }
    if (fromDate) {
      url += `startDate=${fromDate}&`;
    }
    if (toDate) {
      url += `endDate=${toDate}&`;
    }
    if (selectedWorkingType) {
      url += `workingType=${selectedWorkingType}&`;
    }

    const response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      }
    });
    if (!response.ok) {
      const result = await response.json();
      throw new Error(JSON.stringify({ ...result, status: response.status }));
    }
    const result = await response.json();
    return result;
  } catch (err: any) {
    console.error("Error fetching sites:", err.message);
    return null;
  }
};

export const getAllWorkPermit = async (token: string, page:any, size:any,search:any, siteId:any) => {
  try {
    let url = `${MASTER_URL}/work-permit/work-order/user-mapping/search?`;
    if (page >= 0) {
      url += `page=${page}&`;
    }
    if (size) {
      url += `size=${size}&`;
    }
    if (search) {
      url += `search=${search}&`;
    }
    if (siteId) {
      url += `siteId=${siteId}&`;
    }

    const response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      }
    });
    if (!response.ok) {
      const result = await response.json();
      throw new Error(JSON.stringify({ ...result, status: response.status }));
    }
    const result = await response.json();
    return result;
  } catch (err: any) {
    console.error("Error fetching sites:", err.message);
    return null;
  }
};

export const getWorkPermitUser  = async (token: string, id:any) => {
  try {
    const response = await fetch(`${MASTER_URL}/work-permit-master/user/by-site-id/${id}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      }
    });
    if (!response.ok) {
      const result = await response.json();
      throw new Error(JSON.stringify({ ...result, status: response.status }));
    }
    const result = await response.json();
    return result;
  } catch (err: any) {
    console.error("Error fetching sites:", err.message);
    return null;
  }
};

export const getWorkPermitType  = async (token: string) => {
  try {
    const response = await fetch(`${MASTER_URL}/work-permit-master/work-order-type`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      }
    });
    if (!response.ok) {
      const result = await response.json();
      throw new Error(JSON.stringify({ ...result, status: response.status }));
    }
    const result = await response.json();
    return result;
  } catch (err: any) {
    console.error("Error fetching sites:", err.message);
    return null;
  }
};

export const postWorkPermitOrderSetting  = async (token: string, payload:any) => {
  try {
    const response = await fetch(`${MASTER_URL}/work-permit/user-mapping`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    });
    if (!response.ok) {
      const result = await response.json();
      throw new Error(JSON.stringify({ ...result, status: response.status }));
    }
    const result = await response.json();
    return result;
  } catch (err: any) {
    console.error("Error fetching sites:", err.message);
    return null;
  }
};

export const deleteWorkPermitOrderSetting  = async (token: string, mappingId:any) => {
  try {
    const response = await fetch(`${MASTER_URL}/work-permit/user-mapping?mappingId=${mappingId}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      },
    });
    if (!response.ok) {
      const result = await response.json();
      throw new Error(JSON.stringify({ ...result, status: response.status }));
    }
    const result = await response.json();
    return result;
  } catch (err: any) {
    console.error("Error fetching sites:", err.message);
    return null;
  }
};

export const getJobCard = async (token: string, workOrderId: string) => {
  try {
    let url = `${MASTER_URL}/work-permit/work-order/history?workOrderId=${workOrderId}`;

    const response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      }
    });
    if (!response.ok) {
      const result = await response.json();
      throw new Error(JSON.stringify({ ...result, status: response.status }));
    }
    const result = await response.json();
    return result;
  } catch (err: any) {
    console.error("Error fetching sites:", err.message);
    return null;
  }
};


export const attachmentExiting = async (token: string, name: any) => {
  try {
    const header = await getHeaders(token);
    const response = await fetch(
      `${MASTER_URL}/work-permit/upload?filename=${name}`,
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

