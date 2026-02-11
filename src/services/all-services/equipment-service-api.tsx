import { showToast } from "@/utilities/ToastNotification";
import { Api_Url } from "../all-api-url/api-url";
import { getHeaders, getHeadersForImage } from "../header/header1";

const Gateway_Url = "equipment/v1/api";

const MASTER_URL = `${Api_Url}/${Gateway_Url}`;

//Meter

export const getEqSite = async (token: any) => {
  try {
    const header = await getHeaders(token);
    const response = await fetch(`${MASTER_URL}/master/sites`, {
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

export const getAllGroupEquipment = async (token: any, status?: any) => {
  try {
    const header = await getHeaders(token);

    const url = new URL(`${MASTER_URL}/equipment-group/`);
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

    showToast("Group created successfully", "success");
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

export const EquipmentGroupStatus = async (token: string, payload: any) => {
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
    if (result) {
      if (result.status === "ACTIVE") {
        showToast("Activated successfully", "success");
      } else {
        showToast("Deactivated successfully", "success");
      }
    } else {
      alert("Failed to update equipment status.");
    }
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

export const updateGroupEquipment = async (token: string, payload: any) => {
  try {
    const header = await getHeaders(token);
    const response = await fetch(`${MASTER_URL}/equipment-group/`, {
      method: "PUT",
      headers: header,
      body: JSON.stringify(payload),
    });
    if (!response.ok) {
      const result = await response.json();
      throw new Error(JSON.stringify({ ...result, status: response.status }));
    }
    const result = await response.json();
    showToast("Group updated successfully", "success");
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

export const getAllGroupEquipmentSearch = async (
  token: any,
  id: any,
  status?: any
) => {
  try {
    const header = await getHeaders(token);
    const url = new URL(`${MASTER_URL}/equipment/search?groupId=${id}`);
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
    console.error("Error fetch meter:", err.message);
    return null;
  }
};

export const createEquipment = async (token: string, payload: any) => {
  try {
    const header = await getHeaders(token);
    const response = await fetch(`${MASTER_URL}/equipment/`, {
      method: "POST",
      headers: header,
      body: JSON.stringify(payload),
    });
    if (!response.ok) {
      const result = await response.json();
      throw new Error(JSON.stringify({ ...result, status: response.status }));
    }
    const result = await response.json();
    showToast("Equipment created successfully", "success");
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

export const equipmentStatusUpdate = async (token: string, payload: any) => {
  try {
    const header = await getHeaders(token);
    const response = await fetch(`${MASTER_URL}/equipment/`, {
      method: "POST",
      headers: header,
      body: JSON.stringify(payload),
    });
    if (!response.ok) {
      const result = await response.json();
      throw new Error(JSON.stringify({ ...result, status: response.status }));
    }
    const result = await response.json();
    if (result.status === "ACTIVE") {
      showToast("Activated successfully", "success");
    } else {
      showToast("Deactivated successfully", "success");
    }
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

export const updateEquipment = async (token: string, payload: any) => {
  try {
    const header = await getHeaders(token);
    const response = await fetch(`${MASTER_URL}/equipment/`, {
      method: "PUT",
      headers: header,
      body: JSON.stringify(payload),
    });
    if (!response.ok) {
      const result = await response.json();
      throw new Error(JSON.stringify({ ...result, status: response.status }));
    }
    const result = await response.json();
    showToast("Equipment updated successfully", "success");
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

export const getAllEquipmentDetail = async (
  token: any,
  selectedSite: any,
  selectedBlock: any,
  selectedStatusData: any,
  page: any,
  size: any,
  selectedGroupEq?: any,
  selectedEquipment?: any,
  debounceSearch?: any
) => {
  try {
    let url = `${MASTER_URL}/equipment-detail/?&page=${page}&size=${size}`;
    if (selectedSite) {
      url += `&siteId=${selectedSite}`;
    }
    if (selectedGroupEq) {
      url += `&equipmentGroupId=${selectedGroupEq}`;
    }
    if (selectedBlock) {
      url += `&blockId=${selectedBlock}`;
    }
    if (selectedStatusData) {
      url += `&equipmentStatus=${selectedStatusData}`;
    }
    if (selectedEquipment) {
      url += `&equipmentId=${selectedEquipment}`;
    }
    if (debounceSearch) {
      url += `&search=${debounceSearch}`;
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

export const getAllEquipmentDetailExcel = async (
  token: any,
  filters: {
    selectedSite: any;
    selectedBlock: any;
    selectedStatusData: any;
    selectedGroupEq?: any;
    selectedEquipment?: any;
    debounceSearch?: any;
    download?: boolean;
  }
) => {
  try {
    let url = `${MASTER_URL}/equipment-detail/?download=${filters.download}`;
    if (filters.selectedSite) {
      url += `&siteId=${filters.selectedSite}`;
    }
    if (filters.selectedGroupEq) {
      url += `&equipmentGroupId=${filters.selectedGroupEq}`;
    }
    if (filters.selectedBlock) {
      url += `&blockId=${filters.selectedBlock}`;
    }
    if (filters.selectedStatusData) {
      url += `&equipmentStatus=${filters.selectedStatusData}`;
    }
    if (filters.selectedEquipment) {
      url += `&equipmentId=${filters.selectedEquipment}`;
    }
    if (filters.debounceSearch) {
      url += `&search=${filters.debounceSearch}`;
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

export const createEquipmentDetail = async (token: string, payload: any) => {
  try {
    const header = await getHeaders(token);
    const response = await fetch(`${MASTER_URL}/equipment-detail/`, {
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

export const updateEquipmentDetail = async (token: string, payload: any) => {
  try {
    const header = await getHeaders(token);
    const response = await fetch(`${MASTER_URL}/equipment-detail/`, {
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

export const getEquipmentAssign = async (token: any) => {
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

export const getEquipmentServiceProvider = async (token: any) => {
  try {
    let url = `${MASTER_URL}/master/service-provider`;
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

export const getEquipmentDoneBy = async (token: string) => {
  try {
    const header = await getHeaders(token);
    const response = await fetch(`${MASTER_URL}/master/done-by`, {
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

export const getEquipmentSite = async (token: string) => {
  try {
    const header = await getHeaders(token);
    const response = await fetch(`${MASTER_URL}/master/sites`, {
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

export const getBlockBySiteId = async (token: any, id: any) => {
  try {
    const header = await getHeaders(token);
    const response = await fetch(`${MASTER_URL}/master/blocks/${id}`, {
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

export const getFloorByBlockId = async (token: any, id: any) => {
  try {
    const header = await getHeaders(token);
    const response = await fetch(`${MASTER_URL}/master/floor/${id}`, {
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

export const equipmentDetailAttachment = async (
  token: string,
  payload: any
) => {
  try {
    const header = await getHeaders(token);
    const response = await fetch(`${MASTER_URL}/equipment-detail/attachment`, {
      method: "POST",
      headers: await getHeaders(token),
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

export const getImageByFileName = async (token: string, fileName: any) => {
  try {
    const header = await getHeaders(token);
    const response = await fetch(
      `${MASTER_URL}/equipment-detail/upload?filename=${fileName}`,
      {
        method: "GET",
        headers: await getHeaders(token),
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

export const attachmentExiting = async (token: string, id: any) => {
  try {
    const header = await getHeaders(token);
    const response = await fetch(
      `${MASTER_URL}/equipment-detail/attachment/${id}`,
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

export const getZoneByFloorId = async (token: any, id: any) => {
  try {
    const header = await getHeaders(token);
    const response = await fetch(`${MASTER_URL}/master/zone/${id}`, {
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

export const deleteAttachmentById = async (token: any, id: any) => {
  try {
    const header = await getHeaders(token);
    const response = await fetch(
      `${MASTER_URL}/equipment-detail/attachment/${id}`,
      {
        method: "DELETE",
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
    console.error("Error fetch meter:", err.message);
    return null;
  }
};

export const getStatus = async (token: any) => {
  try {
    const header = await getHeaders(token);
    const response = await fetch(`${MASTER_URL}/master/status`, {
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

export const getCriticality = async (token: any) => {
  try {
    const header = await getHeaders(token);
    const response = await fetch(`${MASTER_URL}/master/criticality`, {
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

export const getFamily = async (token: any) => {
  try {
    const header = await getHeaders(token);
    const response = await fetch(`${MASTER_URL}/master/family-type`, {
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

export const getAllSchedule = async (token: any) => {
  try {
    const header = await getHeaders(token);
    const response = await fetch(`${MASTER_URL}/master/schedule`, {
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

export const getAllDoneBy = async (token: any) => {
  try {
    const header = await getHeaders(token);
    const response = await fetch(`${MASTER_URL}/master/done-by`, {
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

export const getAllCallType = async (token: any) => {
  try {
    const header = await getHeaders(token);
    const response = await fetch(`${MASTER_URL}/master/call-type`, {
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

export const getAllEngRequestStatus = async (token: any) => {
  try {
    const header = await getHeaders(token);
    const response = await fetch(`${MASTER_URL}/master/engineering/status`, {
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

export const getAllRequestStatus = async (token: any) => {
  try {
    const header = await getHeaders(token);
    const response = await fetch(
      `${MASTER_URL}/master/equipment-request-status`,
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
    console.error("Error fetch meter:", err.message);
    return null;
  }
};

export const getAllServiceType = async (token: any) => {
  try {
    const header = await getHeaders(token);
    const response = await fetch(`${MASTER_URL}/master/service-provider`, {
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

export const getAllUserBySiteId = async (token: any, id: any) => {
  try {
    const header = await getHeaders(token);
    const response = await fetch(`${MASTER_URL}/master/user/by-site-id/${id}`, {
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

export const createPPMSch = async (token: string, payload: any) => {
  try {
    const header = await getHeaders(token);
    const response = await fetch(`${MASTER_URL}/equipment-detail/ppm`, {
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

export const updatePPMSch = async (token: string, payload: any) => {
  try {
    const header = await getHeaders(token);
    const response = await fetch(`${MASTER_URL}/equipment-detail/ppm`, {
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

export const getAllPPMDetails = async (token: any, id: any) => {
  try {
    const header = await getHeaders(token);
    const response = await fetch(
      `${MASTER_URL}/equipment-detail/ppm/by/${id}`,
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
    console.error("Error fetch meter:", err.message);
    return null;
  }
};

export const historyCard = async (token: string, payload: any) => {
  try {
    const header = await getHeaders(token);
    const response = await fetch(
      `${MASTER_URL}/equipment-detail/history/card`,
      {
        method: "POST",
        headers: header,
        body: JSON.stringify(payload),
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

export const getHistoryCardDetails = async (token: any, id: any) => {
  try {
    const header = await getHeaders(token);
    const response = await fetch(
      `${MASTER_URL}/equipment-detail/${id}/history/card`,
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
    console.error("Error fetch meter:", err.message);
    return null;
  }
};

export const getServiceType = async (token: any) => {
  try {
    const header = await getHeaders(token);
    const response = await fetch(`${MASTER_URL}/master/service-type`, {
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

export const getAllPPMSchDetails = async (
  token: any,
  id: any,
  scheduleType?: any,
  doneby?: any
) => {
  try {
    let url = `${MASTER_URL}/equipment-detail/ppm/schedule/${id}?`;
    if (scheduleType) {
      url += `scheduleType=${scheduleType}`;
    }
    if (doneby) {
      url += `&doneBy=${doneby}`;
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

export const getAllAMCVisit = async (token: any, id: any) => {
  try {
    let url = `${MASTER_URL}/equipment-detail/amc/visite/${id}`;

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

export const getWarrantyType = async (token: any) => {
  try {
    const header = await getHeaders(token);
    const response = await fetch(`${MASTER_URL}/master/warranty-type`, {
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

export const getManufacturer = async (token: any) => {
  try {
    const header = await getHeaders(token);
    const response = await fetch(`${MASTER_URL}/master/manufacturer`, {
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

export const getServiceProvider = async (token: any) => {
  try {
    const header = await getHeaders(token);
    const response = await fetch(`${MASTER_URL}/master/service-provider`, {
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

export const createManufacturerDetail = async (token: string, payload: any) => {
  try {
    const header = await getHeaders(token);
    const response = await fetch(
      `${MASTER_URL}/equipment-detail/manufacturer`,
      {
        method: "POST",
        headers: header,
        body: JSON.stringify(payload),
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

export const getManufacturerDetails = async (token: any, id: string) => {
  try {
    const header = await getHeaders(token);
    const response = await fetch(
      `${MASTER_URL}/equipment-detail/${id}/manufacturer`,
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
    console.error("Error fetch meter:", err.message);
    return null;
  }
};

export const getAllAMCType = async (token: any) => {
  try {
    const header = await getHeaders(token);
    const response = await fetch(`${MASTER_URL}/master/amc-type`, {
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

export const getAllPpmScheduleType = async (token: any) => {
  try {
    const header = await getHeaders(token);
    const response = await fetch(`${MASTER_URL}/master/ppm-schedule-type`, {
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

export const getAllPpmScheduleStatus = async (token: any) => {
  try {
    const header = await getHeaders(token);
    const response = await fetch(`${MASTER_URL}/master/ppm-schedule-status`, {
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

export const getAllAmcScheduleStatus = async (token: any) => {
  try {
    const header = await getHeaders(token);
    const response = await fetch(`${MASTER_URL}/master/amc-visit-status`, {
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

export const getPaymentsTerm = async (token: any) => {
  try {
    const header = await getHeaders(token);
    const response = await fetch(`${MASTER_URL}/master/payment-terms`, {
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

export const getPaymentsTerms = async (token: any) => {
  try {
    const header = await getHeaders(token);
    const response = await fetch(`${MASTER_URL}/master/amc-payment-term`, {
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

export const createAMC = async (token: string, payload: any) => {
  try {
    const header = await getHeaders(token);
    const response = await fetch(`${MASTER_URL}/equipment-detail/amc`, {
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

export const updateAMC = async (token: string, payload: any) => {
  try {
    const header = await getHeaders(token);
    const response = await fetch(`${MASTER_URL}/equipment-detail/amc`, {
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

export const updateAMCVisitDate = async (
  token: string,
  id: any,
  visitDate: any
) => {
  try {
    const header = await getHeaders(token);
    const response = await fetch(
      `${MASTER_URL}/amc/visit/${id}/date?visitDate=${visitDate}`,
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

export const getAmcExDetails = async (token: any, id: any) => {
  try {
    const header = await getHeaders(token);
    const response = await fetch(`${MASTER_URL}/equipment-detail/amc/${id}`, {
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

export const getAllAmcDetails = async (
  token: any,
  selectedSite: any,
  page: any,
  size: any,
  selectedGroupEq?: any,
  selectedEquipment?: any,
  selectedAssignee?: any,
  selectedMonth?: any,
  selectedYear?: any,
  selectedAmcScheduleStatus?: any
) => {
  try {
    let url = `${MASTER_URL}/amc/visit/search?page=${page}&size=${size}`;
    if (selectedSite) {
      url += `&site=${selectedSite}`;
    }
    if (selectedGroupEq) {
      url += `&group=${selectedGroupEq}`;
    }
    if (selectedEquipment) {
      url += `&equipment=${selectedEquipment}`;
    }
    if (selectedAssignee) {
      url += `&assign=${selectedAssignee}`;
    }
    if (selectedMonth) {
      url += `&month=${selectedMonth}`;
    }
    if (selectedYear) {
      url += `&year=${selectedYear}`;
    }
    if (selectedAmcScheduleStatus) {
      url += `&status=${selectedAmcScheduleStatus}`;
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

export const getAllAmcDetailsExcel = async (
  token: any,
  {
    selectedSite,
    selectedGroupEq,
    selectedEquipment,
    selectedAssignee,
    selectedMonth,
    selectedYear,
  }: {
    selectedSite?: any;
    selectedGroupEq?: any;
    selectedEquipment?: any;
    selectedAssignee?: any;
    selectedMonth?: any;
    selectedYear?: any;
  }
) => {
  try {
    const params = new URLSearchParams();

    // Add only if defined
    if (selectedSite) params.append("site", selectedSite);
    if (selectedGroupEq) params.append("group", selectedGroupEq);
    if (selectedEquipment) params.append("equipment", selectedEquipment);
    if (selectedAssignee) params.append("assign", selectedAssignee);
    if (selectedMonth) params.append("month", selectedMonth);
    if (selectedYear) params.append("year", selectedYear);

    const url = `${MASTER_URL}/amc/visit/download?${params.toString()}`;

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
      const unstrobj = JSON.parse(err?.message);
      showToast(unstrobj?.errorMessage, "error");
    } catch {}
    console.error("Error fetching AMC details:", err.message);
    return null;
  }
};

export const createEquipmentRequest = async (token: string, payload: any) => {
  try {
    const header = await getHeaders(token);
    const response = await fetch(`${MASTER_URL}/equipment-detail/request`, {
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
