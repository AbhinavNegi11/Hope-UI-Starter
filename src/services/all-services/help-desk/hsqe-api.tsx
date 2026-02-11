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

export const getEventType = async (token: string) => {
  try {
    const response = await fetch(`${MASTER_URL}/hsqeforms/event-type`, {
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

export const getIncidentType = async (token: string) => {
  try {
    const response = await fetch(`${MASTER_URL}/hsqeforms/incident-type`, {
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

export const getInvolves = async (token: string) => {
  try {
    const response = await fetch(`${MASTER_URL}/hsqeforms/involves`, {
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

export const getActivityType = async (token: string) => {
  try {
    const response = await fetch(`${MASTER_URL}/hsqeforms/activity-type`, {
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

export const getInjuryType = async (token: string) => {
  try {
    const response = await fetch(`${MASTER_URL}/hsqeforms/injury-type`, {
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

export const getBodyPartAffacted = async (token: string) => {
  try {
    const response = await fetch(`${MASTER_URL}/hsqeforms/bodypart-affacted`, {
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

export const getAttachedInfo = async (token: string) => {
  try {
    const response = await fetch(`${MASTER_URL}/hsqeforms/attached-information`, {
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


export const getHsqeForm = async (token: string, siteId:any) => {
  try {
    const response = await fetch(`${MASTER_URL}/hsqeforms/${siteId}`, {
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

export const getHsqeAnalysisFactor = async (token: string) => {
  try {
    const response = await fetch(`${MASTER_URL}/hsqe-analysis-report/factors`, {
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

export const getStep1HsqeAnalysisFactor = async (token: string, id:any) => {
  try {
    const response = await fetch(`${MASTER_URL}/hsqe-analysis-report/${id}/step2-factor`, {
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

export const postStep1HsqeAnalysisFactor = async (token: string, id:any, payload:any) => {
  try {
    
    const response = await fetch(`${MASTER_URL}/hsqe-analysis-report/${id}/step2-factor`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload),
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

export const getStep0HsqeAnalysisIssue = async (token: string, id:any) => {
  try {
    const response = await fetch(`${MASTER_URL}/hsqe-analysis-report/${id}/step1`, {
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

export const postStep0HsqeAnalysisIssue = async (token: string, id:any, payload:any) => {
  try {
    const response = await fetch(`${MASTER_URL}/hsqe-analysis-report/${id}/step1`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload),
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

export const getStep1HsqeAnalysisSubFactor = async (token: string, id:any) => {
  try {
    const response = await fetch(`${MASTER_URL}/hsqe-analysis-report/${id}/step2-sub-factor`, {
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

export const postStep1HsqeAnalysisSubFactor = async (token: string, id:any, payload:any) => {
  try {
    const response = await fetch(`${MASTER_URL}/hsqe-analysis-report/${id}/step2-sub-factor`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload),
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

export const getHsqeAnalysisSubFactor = async (token: string, id:any) => {
  try {
    const response = await fetch(`${MASTER_URL}/hsqe-analysis-report/sub-factors/${id}`, {
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

export const getHsqeAnalysisStep3 = async (token: string, id:any) => {
  try {
    const response = await fetch(`${MASTER_URL}/hsqe-analysis-report/${id}`, {
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

export const createHsqeAnalysis = async (token: string, payload:any) => {
  try {
    const response = await fetch(`${MASTER_URL}/hsqe-analysis-report`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      },
        body: JSON.stringify(payload),
    });
    if (!response.ok) {
      const result = await response.json();
      throw new Error(JSON.stringify({ ...result, status: response.status }));
    }
    const result = await response.json();
    // showToast("HSQE Form created successfully", "success");
    return result;
  } catch (err: any) {
    console.error("Error fetching zones:", err.message);
    return null;
  }
};

export const createHsqeAnalysisStep4 = async (token: string, payload:any) => {
  try {
    const response = await fetch(`${MASTER_URL}/hsqe-analysis-report/submit`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      },
        body: JSON.stringify(payload),
    });
    if (!response.ok) {
      const result = await response.json();
      throw new Error(JSON.stringify({ ...result, status: response.status }));
    }
    const result = await response.json();
    showToast("HSQE Form created successfully", "success");
    return result;
  } catch (err: any) {
    console.error("Error fetching zones:", err.message);
    return null;
  }
};

export const createHsqeForm = async (token: string, payload:any) => {
  try {
    const response = await fetch(`${MASTER_URL}/hsqeforms`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      },
        body: JSON.stringify(payload),
    });
    if (!response.ok) {
      const result = await response.json();
      throw new Error(JSON.stringify({ ...result, status: response.status }));
    }
    const result = await response.json();
    showToast("HSQE Form created successfully", "success");
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
  selectedZone?: string
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