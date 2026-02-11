import { Api_Url } from "@/services/all-api-url/api-url";
import { getHeaders } from "@/services/header/header1";
import { showToast } from "@/utilities/ToastNotification";
import { method } from "lodash";

const Gateway_Url = "report/v1/api";

const MASTER_URL = `${Api_Url}/${Gateway_Url}`;

//  Sites Controller for getting all sites
export const getAllSiteForMeter = async (token: string) => {
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

export const getMeterTypeForMeter = async (token: string) => {
  try {
    const header = await getHeaders(token);
    const response = await fetch(`${MASTER_URL}/master/energy/meter-type`, {
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

export const getMeterDetailsForMeter = async (
  token: string,
  page?: any,
  size?: any,
  selectedSite?: any,
  selectedCategory?: any,
  search?: any
) => {
  if (
    !selectedSite ||
    selectedCategory === undefined ||
    selectedCategory === null ||
    selectedCategory === "" ||
    selectedCategory === "null"
  ) {
    console.warn("Skipping getMeterDetailsForMeter — invalid site/category", {
      selectedSite,
      selectedCategory,
    });
    return;
  }
  try {
    let url = `${MASTER_URL}/master/energy/meter-detail/search?page=${page}&size=${size}&site=${selectedSite}&category=${selectedCategory}`;
    if (search && search !== "") {
      url += `&search=${search}`;
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

export const getBlocksBySiteIdMeter = async (token: string, siteId: string) => {
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

export const getFloorBySiteIdAndBlockIdMeter = async (
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

export const getZoneBySiteIdAndBlockIdAndZoneMeter = async (
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

export const getIssueByTfmDeptMeter = async (token: string, id: any) => {
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

export const getAllServiceProvidersMeter = async (token: string) => {
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

export const getTfmReportMeter = async (
  token: string,
  siteSelected?: any,
  blockSelected?: any,
  page?: any,
  rowsPerPage?: any,
  selectedStatus?: any,
  selectedAssigny?: any,
  selectedDept?: any,
  selectedIssue?: any,
  startDate?: any,
  endDate?: any,
  startTime?: any,
  endTime?: any,
  debounceSearch?: any
) => {
  try {
    let url = `${MASTER_URL}/request/report/tfm?page=${page}&size=${rowsPerPage}`;
    if (siteSelected) {
      url += `&siteId=${siteSelected}`;
    }
    if (blockSelected) {
      url += `&blockId=${blockSelected}`;
    }
    if (selectedStatus) {
      url += `&status=${selectedStatus}`;
    }
    if (selectedAssigny) {
      url += `&assign=${selectedAssigny}`;
    }
    if (selectedDept) {
      url += `&department=${selectedDept}`;
    }
    if (selectedIssue) {
      url += `&issueType=${selectedIssue}`;
    }
    if (startDate != "") {
      url += `&startDate=${startDate}`;
    }
    if (endDate != "") {
      url += `&endDate=${endDate}`;
    }
    if (startTime != "") {
      url += `&fromTime=${startTime}`;
    }
    if (endTime != "") {
      url += `&toTime=${endTime}`;
    }
    if (debounceSearch && debounceSearch !== "") {
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
    console.error("Error creating department:", err.message);
    return null;
  }
};

export const getAllStatusMeter = async (token: string) => {
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

export const getAllDepartmentsMeter = async (token: string) => {
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

export const getAllAssignyMeter = async (token: string, siteId: any) => {
  try {
    const header = await getHeaders(token);
    const response = await fetch(
      `${MASTER_URL}/master/user/by-site-id/${siteId}`,
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

export const getMeterReadings = async (token: string, params: any = {}) => {
  try {
    let url = `${MASTER_URL}/meter`;
    const query = new URLSearchParams();

    if (params.page) query.append("page", params.page);
    if (params.size) query.append("size", params.size);
    if (params.categoryId) query.append("type", params.categoryId);
    if (params.siteId) query.append("site", params.siteId);
    if (params.meterId) query.append("meter", params.meterId);
    if (params.search) query.append("search", params.search);
    if (params.startDate) query.append("fromdate", params.startDate);
    if (params.endDate) query.append("todate", params.endDate);
    if (params.download === true) query.append("download", "true");

    const queryString = query.toString();
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

    const result = await response.json();
    return result;
  } catch (err: any) {
    try {
      const unstrobj = JSON.parse(err?.message);
      showToast(unstrobj?.errorMessage, "error");
    } catch (e) {}
    console.error("Error fetching meter readings:", err.message);
    return null;
  }
};

export const getMeterConsump = async (token: string, prams: any) => {
  try {
    let url = `${MASTER_URL}/meter/consumption?site=${prams.siteId}&type=${prams.meterCategory}&meter=${prams.meterId}&fromdate=${prams.startDate}&todate=${prams.endDate}`;
    // const params = new URLSearchParams();

    // if (prams?.siteId) {
    //   params.append("siteId", prams.siteId);
    // }
    // if (prams?.categoryId) {
    //   params.append("categoryId", prams.categoryId);
    // }
    // if (prams?.meterId) {
    //   params.append("meterId", prams.meterId);
    // }
    // if (prams?.search) {
    //   params.append("search", prams.search);
    // }
    // if (prams?.startDate) {
    //   params.append("startDate", prams.startDate);
    // }
    // if (prams?.endDate) {
    //   params.append("endDate", prams.endDate);
    // }

    // const finalUrl = params.toString() ? `${url}?${params.toString()}` : url;

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
    console.error("Error fetching service providers:", err.message);
    return null;
  }
};
