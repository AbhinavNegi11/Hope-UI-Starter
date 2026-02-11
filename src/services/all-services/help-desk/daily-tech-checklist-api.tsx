import { Api_Url } from "@/services/all-api-url/api-url";
import { getHeaders } from "@/services/header/header1";
import { showToast } from "@/utilities/ToastNotification";

const Gateway_Url = "helpdesk/v1/api";

const MASTER_URL = `${Api_Url}/${Gateway_Url}`;

// Get all sites
export const getAllSites = async (token: string) => {
  try {
    const response = await fetch(
      `${MASTER_URL}/checklist-technical-master/sites`,
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
    console.error("Error fetching sites:", err.message);
    return null;
  }
};

// Get blocks by siteId
export const getBlocksBySiteId = async (token: string, siteId: string) => {
  try {
    const response = await fetch(
      `${MASTER_URL}/checklist-technical-master/sites/${siteId}/blocks`,
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
    console.error("Error fetching blocks:", err.message);
    return null;
  }
};

export const getEquipmentByEquipmentGroupId = async (
  token: string,
  equipmentGroupId: string
) => {
  try {
    let url = `${MASTER_URL}/checklist-technical-master/equipments?equipmentGroupId=${equipmentGroupId}`;

    const response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
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

export const getEquipmentGroup = async (token: string) => {
  try {
    let url = `${MASTER_URL}/checklist-technical-master/equipment-groups`;

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

export const getEquipmentDetails = async (
  token: string,
  equipmentGroupId?: any,
  equipmentId?: any,
  siteId?: any,
  blockId?: any,
  status?: any
) => {
  try {
    let url = `${MASTER_URL}/checklist-technical-master/equipment-details/search`;
    if (equipmentGroupId) {
      url += `?equipmentGroupId=${equipmentGroupId}`;
    }
    if (equipmentId) {
      url += `&equipmentId=${equipmentId}`;
    }
    if (siteId) {
      url += `&siteId=${siteId}`;
    }
    if (blockId) {
      url += `&blockId=${blockId}`;
    }
    if (status) {
      url += `&equipmentStatus=${status}`;
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

export const getEquipmentDetailsff = async (
  token: string,
  siteId?: any,
  blockId?: any
) => {
  try {
    let url = `${MASTER_URL}/checklist-technical-master/equipment-details/search?`;
    if (siteId) {
      url += `siteId=${siteId}`;
    }
    if (blockId) {
      url += `&blockId=${blockId}`;
    }

    url += `&equipmentStatus=Active&size=1000&page=0&sort=%5B%22string%22%5D`;

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

export const getEquipmentDetailsAllDataa = async (
  token: string,
  equipmentGroupId: any,
  equipmentId: any,
  siteId: any,
  blockId: any,
  status: any,
  debounceSearch: any,
  page: any,
  size: any
) => {
  try {
    let url = `${MASTER_URL}/checklist-technical/search?page=${page}&size=${size}`;
    if (equipmentGroupId) {
      url += `&group=${equipmentGroupId}`;
    }
    if (equipmentId) {
      url += `&equipment=${equipmentId}`;
    }
    if (siteId) {
      url += `&site=${siteId}`;
    }
    if (blockId) {
      url += `&block=${blockId}`;
    }
    if (status) {
      url += `&status=${status}`;
    }
    if (debounceSearch) {
      url += `&search=${debounceSearch}`;
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

export const getTechnicalApprovalData = async (
  token: string,
  equipmentGroupId: any,
  equipmentId: any,
  siteId: any,
  blockId: any,
  debounceSearch: any,
  page: any,
  size: any
) => {
  try {
    let url = `${MASTER_URL}/checklist/technical_approval/search?page=${page}&size=${size}`;
    if (equipmentGroupId) {
      url += `&group=${equipmentGroupId}`;
    }
    if (equipmentId) {
      url += `&equipment=${equipmentId}`;
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

export const getChecklistType = async (token: string) => {
  try {
    const response = await fetch(
      `${MASTER_URL}/checklist-technical-master/checklist-type/by-login-user`,
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
    console.error("Error fetching zones:", err.message);
    return null;
  }
};

export const getChecklistTypeWithDec = async (
  token: string,
  checklistTechnicalId: any,
  checklistTypeId: any
) => {
  try {
    const response = await fetch(
      `${MASTER_URL}/checklist-technical/description/${checklistTechnicalId}/${checklistTypeId}`,
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
    console.error("Error fetching zones:", err.message);
    return null;
  }
};

export const deleteTechChecklistDescription = async (
  token: string,
  id: any,
  checklistTechnicalId: any,
  checklistTypeId: any
) => {
  try {
    const response = await fetch(
      `${MASTER_URL}/checklist-technical/description/${id}/${checklistTechnicalId}/${checklistTypeId}`,
      {
        method: "DELETE",
        headers: await getHeaders(token),
      }
    );
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

export const createTechChecklistDescription = async (
  token: string,
  payload: any
) => {
  try {
    const header = await getHeaders(token);
    const response = await fetch(
      `${MASTER_URL}/checklist-technical/checklist-technical-description`,
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
    showToast("Checklist saved successfully", "success");
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

export const createTechCheckData = async (token: string, payload: any) => {
  try {
    const response = await fetch(`${MASTER_URL}/checklist-technical`, {
      method: "POST",
      headers: await getHeaders(token),
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
    console.error("Error fetching zones:", err.message);
    return null;
  }
};

export const techCheckStatusChange = async (token: string, payload: any) => {
  try {
    const response = await fetch(`${MASTER_URL}/checklist-technical`, {
      method: "POST",
      headers: await getHeaders(token),
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
    console.error("Error fetching zones:", err.message);
    return null;
  }
};

// export const getTechQrCodeData = async (token: string) => {
//   try {
//     const response = await fetch(
//       `${MASTER_URL}/checklist-technical/qrcode-department`,
//       {
//         method: "GET",
//         headers: {
//           Authorization: `Bearer ${token}`,
//           "Content-Type": "application/json",
//         },
//       }
//     );
//     if (!response.ok) {
//       const result = await response.json();
//       throw new Error(JSON.stringify({ ...result, status: response.status }));
//     }
//     const result = await response.json();
//     return result;
//   } catch (err: any) {
//     console.error("Error fetching zones:", err.message);
//     return null;
//   }
// };

export const getTechQrCodeData = async (
  token: any,
  selectedSite?: any,
  selectedBlock?: any,
  selectedGroup?: any,
  selectedEquipment?: any
) => {
  try {
    let url = `${MASTER_URL}/checklist-technical/qrcode-department?site=${selectedSite}`;
    if (selectedBlock) {
      url += `&block=${selectedBlock}`;
    }
    if (selectedGroup) {
      url += `&group=${selectedGroup}`;
    }
    if (selectedEquipment) {
      url += `&equipment=${selectedEquipment}`;
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

export const editTechnicalChecklistApproval = async (
  token: string,
  payload: any
) => {
  try {
    const header = await getHeaders(token);
    const response = await fetch(
      `${MASTER_URL}/checklist/technical_approval/edit`,
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

export const apporveTechChecklist = async (token: string, id: any) => {
  try {
    const header = await getHeaders(token);
    const response = await fetch(
      `${MASTER_URL}/checklist/technical_approval/approve?checklistId=${id}`,
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

export const rejectTechChecklist = async (token: string, payload: any) => {
  try {
    const header = await getHeaders(token);
    const response = await fetch(
      `${MASTER_URL}/checklist/technical_approval/reject`,
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
    showToast("Reject Success ", "success");
    return result;
  } catch (err: any) {
    try {
      var unstrobj = JSON.parse(err?.message);
      showToast(unstrobj?.errorMessage, "error");
    } catch (e) {}
    console.error("Error Reject checklist:", err.message);
    return null;
  }
};

export const createTechChecklistLocationMatrix = async (
  token: string,
  payload: any
) => {
  try {
    const header = await getHeaders(token);
    const response = await fetch(
      `${MASTER_URL}/checklist-technical/approval-matrix`,
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
    showToast("Approval matrix saved successfully", "success");
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

export const getUserTenantData = async (token: string, id: any) => {
  try {
    const response = await fetch(
      `${MASTER_URL}/checklist-technical-master/user/by-site-id/${id}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
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

export const getTechnicalUserMatrix = async (
  token: string,
  checklistId: any
) => {
  try {
    const header = await getHeaders(token);
    const response = await fetch(
      `${MASTER_URL}/checklist-technical/${checklistId}/approval-matrix`,
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

export const deleteTechnicalUserMatrix = async (
  token: string,
  equipmentDetailId: any,
  tenantId: any
) => {
  try {
    const header = await getHeaders(token);
    const response = await fetch(
      `${MASTER_URL}/checklist-technical/approval-matrix/user-tenant?equipmentDetailId=${equipmentDetailId}&userTenantId=${tenantId}`,
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
    showToast("User removed", "success");
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

export const getEqDetails = async (
  token: string,
  equipmentGroupId: any,
  equipmentId: any
) => {
  try {
    const response = await fetch(
      `${MASTER_URL}/checklist-technical-master/equipment-details?equipmentGroupId=${equipmentGroupId}&equipmentId=${equipmentId}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
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
