import { Api_Url } from "@/services/all-api-url/api-url";
import { getHeaders } from "@/services/header/header1";
import { showToast } from "@/utilities/ToastNotification";

const Gateway_Url = "helpdesk/v1/api";

const MASTER_URL = `${Api_Url}/${Gateway_Url}`;

// Get all sites
export const getAllSites = async (token: string) => {
  try {
    const response = await fetch(`${MASTER_URL}/checklist-location-master/sites`, {
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

// Get blocks by siteId
export const getBlocksBySiteId = async (token: string, siteId: string) => {
  try {
    const response = await fetch(`${MASTER_URL}/checklist-location-master/sites/${siteId}/blocks`, {
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
    console.error("Error fetching blocks:", err.message);
    return null;
  }
};

// Get floors by blockId
export const getFloorsByBlockId = async (token: string, blockId: string, siteId:any) => {
  try {
    const response = await fetch(`${MASTER_URL}/checklist-location-master/sites/${siteId}/blocks/${blockId}/floors`, {
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
    console.error("Error fetching floors:", err.message);
    return null;
  }
};

// Get zones by floorId
export const getZonesByFloorId = async (token: string, floorId: string, siteId:any, blockId:any) => {
  try {
    const response = await fetch(`${MASTER_URL}/checklist-location-master/sites/${siteId}/blocks/${blockId}/floors/${floorId}/zones`, {
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
    console.error("Error fetching zones:", err.message);
    return null;
  }
};

export const getChecklistLocation = async (token: string, floorId: string, siteId:any, blockId:any) => {
  try {
    const response = await fetch(`${MASTER_URL}/checklist-location-master/sites/${siteId}/blocks/${blockId}/floors/${floorId}/zones`, {
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
    console.error("Error fetching zones:", err.message);
    return null;
  }
};

export const getChecklistLocationList = async (
  token: string,
  page: any,
  size: any,
  selectedSite?: string,
  selectedBlock?: string,
  selectedFloor?: string,
  selectedZone?: string,
  debouncedSearch?: string
) => {
  try {
    let url = `${MASTER_URL}/checklist-location/search?page=${page}&size=${size}`;
    if (selectedSite) {
      url += `&site=${selectedSite}`;
    }
    if (selectedBlock) {
      url += `&block=${selectedBlock}`;
    }
    if (selectedFloor) {
      url += `&floor=${selectedFloor}`;
    }
    if (selectedZone) {
      url += `&zone=${selectedZone}`;
    }
    if (debouncedSearch) {
      url += `&search=${encodeURIComponent(debouncedSearch)}`;
    }

    const response = await fetch(url, {
      method: "GET",
      headers: await getHeaders(token),
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
      // Optionally show toast or handle error
      // showToast(unstrobj?.errorMessage, "error");
    } catch (e) {}
    console.error("Error fetching checklist locations:", err.message);
    return null;
  }
};

export const getChecklistLocationDept = async (token: string) => {
  try {
    const response = await fetch(`${MASTER_URL}/checklist-location-master/departments/by-login-user`, {
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
    console.error("Error fetching zones:", err.message);
    return null;
  }
};

export const getUserTenantData = async (token: string, id:any) => {
  try {
    const response = await fetch(`${MASTER_URL}/checklist-location-master/user/by-site-id/${id}`, {
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
    console.error("Error fetching zones:", err.message);
    return null;
  }
};

export const createChecklistLocation = async (token: string, payload: any) => {
  try {
    const header = await getHeaders(token);
    const response = await fetch(`${MASTER_URL}/checklist-location`, {
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

export const createChecklistLocationMatrix = async (token: string, payload: any) => {
  try {
    const header = await getHeaders(token);
    const response = await fetch(`${MASTER_URL}/checklist-location/approval-matrix`, {
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

export const createChecklistDescription = async (token: string, payload: any) => {
  try {
    const header = await getHeaders(token);
    const response = await fetch(`${MASTER_URL}/checklist-location/checklist-department-description`, {
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

export const getChecklistLocationDesc = async (token: string, checklistLocationId:any, departmentId:any) => {
  try {
    const response = await fetch(`${MASTER_URL}/checklist-location/description/${checklistLocationId}/${departmentId}`, {
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
    console.error("Error fetching zones:", err.message);
    return null;
  }
};

export const deleteChecklistDescription = async (token: string, id:any, checklistLocationId:any, departmentId:any) => {
  try {
    const response = await fetch(`${MASTER_URL}/checklist-location/description/${id}/${checklistLocationId}/${departmentId}`, {
      method: "DELETE",
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
    showToast("Deleted ", "success");
    return result;
  } catch (err: any) {
    console.error("Error fetching zones:", err.message);
    return null;
  }
};

export const getLocationChecklistApprovalData = async (
  token: string,
  selectedSite?: string,
  selectedBlock?: string,
  selectedFloor?: string,
  selectedZone?: string,
  page?:any, size?:any,
  debouncedSearch?: string,
  selectedDate?: string
) => {
  try {
    let url = `${MASTER_URL}/checklist/location_approval/search?page=${page}&size=${size}`;
    if (selectedSite) {
      url += `&site=${selectedSite}`;
    }
    if (selectedBlock) {
      url += `&block=${selectedBlock}`;
    }
    if (selectedFloor) {
      url += `&floor=${selectedFloor}`;
    }
    if (selectedZone) {
      url += `&zone=${selectedZone}`;
    }
    if (debouncedSearch) {
      url += `&search=${encodeURIComponent(debouncedSearch)}`;
    }
    if (selectedDate) {
      url += `&date=${encodeURIComponent(selectedDate)}`;
    }

    const response = await fetch(url, {
      method: "GET",
      headers: await getHeaders(token),
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
      // Optionally show toast or handle error
      // showToast(unstrobj?.errorMessage, "error");
    } catch (e) {}
    console.error("Error fetching checklist locations:", err.message);
    return null;
  }
};

export const apporveLocationChecklist = async (token: string, id: any) => {
  try {
    const header = await getHeaders(token);
    const response = await fetch(`${MASTER_URL}/checklist/location_approval/approve?checklistId =${id}`, {
      method: "PUT",
      headers: header,
    });
    if (!response.ok) {
      const result = await response.json();
      throw new Error(JSON.stringify({ ...result, status: response.status }));
    }
    const result = await response.json();
    showToast("Approved Success ", "success");
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

export const editLocationChecklist = async (token: string, payload: any) => {
  try {
    const header = await getHeaders(token);
    const response = await fetch(`${MASTER_URL}/checklist/location_approval/edit`, {
      method: "PUT",
      headers: header,
      body: JSON.stringify(payload),
    });
    if (!response.ok) {
      const result = await response.json();
      throw new Error(JSON.stringify({ ...result, status: response.status }));
    }
    const result = await response.json();
    showToast("save success ", "success");
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

export const getLocationQrCodeData = async (token: string) => {
  try {
    const response = await fetch(`${MASTER_URL}/checklist-location/qrcode-location`, {
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
    console.error("Error fetching zones:", err.message);
    return null;
  }
};

export const getEquipmentDetailsMissed = async (token: string, siteId:any, blockId:any,floorId:any, zoneId:any, debounceSearch:any, page:any, size:any, date:any) => {
  
  try {
    let url = `${MASTER_URL}/missed/checklist_location/search?page=${page}&size=${size}`;
    if (zoneId) {
      url += `&zone=${zoneId}`;
    }
    if (floorId) {
      url += `&floor=${floorId}`; // Assuming floorId is used for equipment
    }
    if (siteId) {
      url += `&site=${siteId}`;
    }
    if (blockId) {
      url += `&block=${blockId}`;
    }
    if (debounceSearch) {
      url += `&search=${debounceSearch}`;
    }
    if (date) {
      url += `&date=${date}`;
    }

    const response = await fetch(url, {
      method: "GET",
      headers: await getHeaders(token),
    });
    if (!response.ok) {
      const result = await response.json();
      throw new Error(JSON.stringify({ ...result, status: response.status }));
    }
    const result = await response.json();
    return result;
  } catch (err: any) {
    console.error("Error fetching blocks:", err.message);
    return null;
  }
};

export const getMissedResponse = async (token: string, id:any) => {
  
  try {
    let url = `${MASTER_URL}/missed/checklist_location/${id}/response`;
    

    const response = await fetch(url, {
      method: "GET",
      headers: await getHeaders(token),
    });
    if (!response.ok) {
      const result = await response.json();
      throw new Error(JSON.stringify({ ...result, status: response.status }));
    }
    const result = await response.json();
    return result;
  } catch (err: any) {
    console.error("Error fetching blocks:", err.message);
    return null;
  }
};

export const editLocationMissedChecklist = async (token: string, payload: any) => {
  try {
    const header = await getHeaders(token);
    const response = await fetch(`${MASTER_URL}/missed/checklist_location/edit`, {
      method: "PUT",
      headers: header,
      body: JSON.stringify(payload),
    });
    if (!response.ok) {
      const result = await response.json();
      throw new Error(JSON.stringify({ ...result, status: response.status }));
    }
    const result = await response.json();
    showToast("save success ", "success");
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