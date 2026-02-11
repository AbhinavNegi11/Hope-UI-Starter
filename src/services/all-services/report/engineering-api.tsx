import { Api_Url } from "@/services/all-api-url/api-url";
import { getHeaders } from "@/services/header/header1";
import { showToast } from "@/utilities/ToastNotification";
import { method } from "lodash";

const Gateway_Url = "report/v1/api";

const MASTER_URL = `${Api_Url}/${Gateway_Url}`;

//  Sites Controller for getting all sites
export const getAllSiteForEng = async (token: string) => {
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

export const getBlocksBySiteIdEng = async (token: string, siteId: string) => {
  try {
    const header = await getHeaders(token);
    const response = await fetch(
      `${MASTER_URL}/master/sites/${siteId}/blocks`,
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

export const getFloorBySiteIdAndBlockIdEng = async (
  token: string,
  siteId: string,
  blockId: string
) => {
  try {
    const header = await getHeaders(token);
    const response = await fetch(
      `${MASTER_URL}/master/sites/${siteId}/blocks/${blockId}/floors`,
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

export const getZoneBySiteIdAndBlockIdAndZoneEng = async (
  token: string,
  siteId: string,
  blockId: string,
  floorId: any
) => {
  try {
    const header = await getHeaders(token);
    const response = await fetch(
      `${MASTER_URL}/master/sites/${siteId}/blocks/${blockId}/floors/${floorId}/zones`,
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

export const getIssueByTfmDeptEng = async (token: string, id: any) => {
  try {
    const header = await getHeaders(token);
    const response = await fetch(
      `${MASTER_URL}/master/equipment/by-equipment-group-id/${id}`,
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
    console.error("Error fetching departments:", err.message);
    return null;
  }
};

export const getAllServiceProvidersEng = async (token: string) => {
  try {
    const header = await getHeaders(token);
    const response = await fetch(
      `${MASTER_URL}/master/service-provider/by-login-user`,
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
    console.error("Error fetching service providers:", err.message);
    return null;
  }
};
export const getJobCardEng = async (token: string, id: any) => {
  try {
    const header = await getHeaders(token);
    const response = await fetch(
      `${MASTER_URL}/request/report/engieering/job-card/${id}`,
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
    console.error("Error fetching service providers:", err.message);
    return null;
  }
};

export const getEngineeringReport = async (
  token: string,
  siteSelected?: any,
  blockSelected?: any,
  page?: any,
  rowsPerPage?: any,
  selectedCallType?: any,
  seletedDept?: any,
  selectedDoneBy?: any,
  selectedAssigny?: any,
  selectedServiceProvider?: any,
  debonceSearch?: any,
  selectedstartDate?: any,
  selecteendDate?: any
) => {
  try {
    let url = `${MASTER_URL}/request/report/engineering?page=${page}&size=${rowsPerPage}`;
    if (siteSelected) {
      url += `&site=${siteSelected}`;
    }
    if (blockSelected) {
      url += `&block=${blockSelected}`;
    }
    if (selectedCallType !== undefined && selectedCallType !== "") {
      url += `&callType=${selectedCallType}`;
    }
    if (seletedDept !== undefined && seletedDept !== "") {
      url += `&equipmentGroup=${seletedDept}`;
    }
    if (selectedDoneBy !== undefined && selectedDoneBy !== "") {
      url += `&doneBy=${selectedDoneBy}`;
    }

    if (selectedAssigny !== undefined && selectedAssigny !== "") {
      url += `&assignedTo=${selectedAssigny}`;
    }
    if (
      selectedServiceProvider !== undefined &&
      selectedServiceProvider !== ""
    ) {
      url += `&assignedServiceProvider=${selectedServiceProvider}`;
    }
    if (debonceSearch !== undefined && debonceSearch !== "") {
      url += `&search=${debonceSearch}`;
    }
    if (selectedstartDate && selectedstartDate !== "") {
      url += `&startDate=${selectedstartDate}`;
    }
    if (selecteendDate && selecteendDate !== "") {
      url += `&endDate=${selecteendDate}`;
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
    console.error("Error creating department:", err.message);
    return null;
  }
};

export const getEngineeringReportExcel = async (
  token: string,
  params: any = {}
) => {
  try {
    let url = `${MASTER_URL}/request/report/engineering`;
    const searchParams = new URLSearchParams();

    if (params.siteSelected) searchParams.append("site", params.siteSelected);
    if (params.blockSelected)
      searchParams.append("block", params.blockSelected);
    if (params.selectedCallType)
      searchParams.append("callType", params.selectedCallType);
    if (params.seletedDept)
      searchParams.append("equipmentGroup", params.seletedDept);
    if (params.selectedDoneBy)
      searchParams.append("doneBy", params.selectedDoneBy);
    if (params.selectedAssigny)
      searchParams.append("assignedTo", params.selectedAssigny);
    if (params.selectedServiceProvider)
      searchParams.append(
        "assignedServiceProvider",
        params.selectedServiceProvider
      );
    if (params.debonceSearch)
      searchParams.append("search", params.debonceSearch);
    if (params.selectedstartDate)
      searchParams.append("startDate", params.selectedstartDate);
    if (params.selecteendDate)
      searchParams.append("endDate", params.selecteendDate);
    if (typeof params.download === "boolean")
      searchParams.append("download", String(params.download));

    const queryString = searchParams.toString();
    if (queryString) {
      url += `?${queryString}`;
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

    return await response.json();
  } catch (err: any) {
    try {
      const unstrobj = JSON.parse(err?.message);
      showToast(unstrobj?.errorMessage, "error");
    } catch (e) {}
    console.error("Error fetching engineering report:", err.message);
    return null;
  }
};

export const getAllStatusEng = async (token: string) => {
  try {
    const header = await getHeaders(token);
    const response = await fetch(`${MASTER_URL}/master/tfm-status`, {
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
    console.error("Error fetching service providers:", err.message);
    return null;
  }
};

export const getAllCallType = async (token: string) => {
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
    console.error("Error fetching service providers:", err.message);
    return null;
  }
};

export const getAllDepartmentsEng = async (token: string) => {
  try {
    const header = await getHeaders(token);
    const response = await fetch(
      `${MASTER_URL}/master/equipment-group/by-login-user`,
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
    console.error("Error fetching service providers:", err.message);
    return null;
  }
};

export const getAllDoneByEng = async (token: string) => {
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
    console.error("Error fetching service providers:", err.message);
    return null;
  }
};

export const getAllTechUserEng = async (token: string, siteId: any) => {
  try {
    const header = await getHeaders(token);
    const response = await fetch(
      `${MASTER_URL}/master/technical-user/by-site-id/${siteId}`,
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
    console.error("Error fetching service providers:", err.message);
    return null;
  }
};
