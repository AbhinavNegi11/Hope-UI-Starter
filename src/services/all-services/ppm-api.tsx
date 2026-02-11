import { showToast } from "@/utilities/ToastNotification";
import { Api_Url } from "../all-api-url/api-url";
import { getHeaders, getHeadersForImage } from "../header/header1";

const Gateway_Url = "equipment/v1/api";

const MASTER_URL = `${Api_Url}/${Gateway_Url}`;

//Meter

export const getAllPPMData = async (
  token: any,
  siteId: any,
  blockId: any,
  floorId?: any,
  groupId?: any,
  equipmentId?: any,
  scheduleType?: any,
  doneBy?: any,
  assign?: any,
  serviceProvider?: any,
  ppmScheduleStatus?: any,
  page?: any,
  rowsPerPage?: any,
  startDate?: any,
  endDate?: any
) => {
  try {
    let url = `${MASTER_URL}/ppm/schedule/search?page=${page}&size=${rowsPerPage}`;

    if (siteId) {
      url += `&site=${siteId}`;
    }
    if (blockId) {
      url += `&block=${blockId}`;
    }
    if (floorId) {
      url += `&floor=${floorId}`;
    }
    if (groupId) {
      url += `&group=${groupId}`;
    }
    if (equipmentId) {
      url += `&equipment=${equipmentId}`;
    }

    if (assign) {
      url += `&assignInternal=${assign}`;
    }

    if (serviceProvider) {
      url += `&assignServiceProvider=${serviceProvider}`;
    }

    if (ppmScheduleStatus) {
      url += `&ppmScheduleStatus=${ppmScheduleStatus}`;
    }

    if (scheduleType) {
      url += `&scheduleType=${scheduleType}`;
    }

    if (doneBy) {
      url += `&doneBy=${doneBy}`;
    }

    if (startDate) {
      url += `&startDate=${new Date(startDate).toISOString().split(".")[0]}`;
    }

    if (endDate) {
      url += `&endDate=${new Date(endDate).toISOString().split(".")[0]}`;
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

export const getAllPPMDataExcel = async (
  token: any,
  {
    selectedSite,
    selectedBlock,
    selectedFloor,
    selectedGroup,
    selectedEquipment,
    selectedSchedule,
    selectedDoneBy,
    selectedAssignee,
    selectedServiceProvider,
    selectedPpmScheduleStatus,
    startDate,
    endDate,
  }: {
    selectedSite?: any;
    selectedBlock?: any;
    selectedFloor?: any;
    selectedGroup?: any;
    selectedEquipment?: any;
    selectedSchedule?: any;
    selectedDoneBy?: any;
    selectedAssignee?: any;
    selectedServiceProvider?: any;
    selectedPpmScheduleStatus?: any;
    startDate?: any;
    endDate?: any;
  }
) => {
  try {
    const params = new URLSearchParams();

    if (selectedSite) params.append("site", selectedSite?.id ?? selectedSite);
    if (selectedBlock)
      params.append("block", selectedBlock?.id ?? selectedBlock);
    if (selectedFloor)
      params.append("floor", selectedFloor?.id ?? selectedFloor);
    if (selectedGroup)
      params.append("group", selectedGroup?.id ?? selectedGroup);
    if (selectedEquipment)
      params.append("equipment", selectedEquipment?.id ?? selectedEquipment);
    if (selectedSchedule) params.append("scheduleType", selectedSchedule);
    if (selectedDoneBy) params.append("doneBy", selectedDoneBy);
    if (selectedAssignee) params.append("assignInternal", selectedAssignee);
    if (selectedServiceProvider)
      params.append("assignServiceProvider", selectedServiceProvider);
    if (selectedPpmScheduleStatus)
      params.append("ppmScheduleStatus", selectedPpmScheduleStatus);

    if (startDate) params.append("startDate", startDate + "T00:00:00");
    if (endDate) params.append("endDate", endDate + "T23:59:59");

    // ✅ Always required

    const url = `${MASTER_URL}/ppm/schedule/download?${params.toString()}`;

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
    } catch (e) {}
    console.error("Error fetching PPM data:", err.message);
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

export const editPpmAssign = async (token: string, id: any, payload: any) => {
  try {
    const header = await getHeaders(token);
    const response = await fetch(`${MASTER_URL}/ppm/schedule/${id}/assign`, {
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

export const editPpmSchedule = async (token: string, id: any, date: any) => {
  try {
    const header = await getHeaders(token);
    const response = await fetch(
      `${MASTER_URL}/ppm/schedule/${id}/edit?localDate=${date}`,
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

export const wipPpmSchedule = async (token: string, id: any, payload: any) => {
  try {
    const header = await getHeaders(token);
    const response = await fetch(
      `${MASTER_URL}/ppm/schedule/${id}/wip-reason`,
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

export const cancelPpmSchedule = async (
  token: string,
  id: any,
  payload: any
) => {
  try {
    const header = await getHeaders(token);
    const response = await fetch(`${MASTER_URL}/ppm/schedule/${id}/cancel`, {
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

export const editPpmReAssign = async (token: string, id: any, payload: any) => {
  try {
    const header = await getHeaders(token);
    const response = await fetch(`${MASTER_URL}/ppm/schedule/${id}/re-assign`, {
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

export const ppmVisitPost = async (token: string, id: any, payload: any) => {
  try {
    const header = await getHeaders(token);
    const response = await fetch(`${MASTER_URL}/ppm/schedule/${id}/visits`, {
      method: "POST",
      headers: header,
      body: JSON.stringify(payload),
    });
    if (!response.ok) {
      const result = await response.json();
      throw new Error(JSON.stringify({ ...result, status: response.status }));
    }
    const result = await response.json();
    showToast("Visit Saved Successfully", "success");
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

export const jobCardPpm = async (token: string, id: any) => {
  try {
    const header = await getHeaders(token);
    const response = await fetch(`${MASTER_URL}/ppm/schedule/${id}/job-card`, {
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

export const checkListppM = async (token: string, id: any) => {
  try {
    const header = await getHeaders(token);
    const response = await fetch(
      `${MASTER_URL}/master/checklist-by-ppm-schdule-id/${id}`,
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

export const ppmattachmentUpload = async (token: string, payload: any) => {
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

export const ppmVisitChecklistPost = async (
  token: string,
  id: any,
  payload: any
) => {
  try {
    const header = await getHeaders(token);
    const response = await fetch(`${MASTER_URL}/ppm/schedule/${id}/checklist`, {
      method: "POST",
      headers: header,
      body: JSON.stringify(payload),
    });
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

export const ppmExtChecklistPost = async (
  token: string,
  id: any,
  payload: any
) => {
  try {
    const header = await getHeaders(token);
    const response = await fetch(
      `${MASTER_URL}/ppm/schedule/${id}/checklist-ext`,
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
