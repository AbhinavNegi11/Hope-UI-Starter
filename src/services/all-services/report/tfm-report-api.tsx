import { Api_Url } from "@/services/all-api-url/api-url";
import { getHeaders } from "@/services/header/header1";
import { showToast } from "@/utilities/ToastNotification";
import { debug } from "console";
import { method } from "lodash";

const Gateway_Url = "report/v1/api";

const MASTER_URL = `${Api_Url}/${Gateway_Url}`;

//  Sites Controller for getting all sites
export const getAllSiteForRep = async (token: string) => {
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

export const getBlocksBySiteIdRepo = async (token: string, siteId: string) => {
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

export const getFloorBySiteIdAndBlockId = async (
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

export const getZoneBySiteIdAndBlockIdAndZone = async (
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

export const getIssueByTfmDept = async (token: string, id: any) => {
  try {
    const header = await getHeaders(token);
    const response = await fetch(
      `${MASTER_URL}/master/issues/by-tfm-department-id/${id}`,
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

export const getAllServiceProviders = async (token: string) => {
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

// export const getTfmReport = async (
//   token: string,
//   siteSelected?: any,
//   blockSelected?: any,
//   page?: any,
//   rowsPerPage?: any,
//   selectedStatus?: any,
//   selectedAssigny?: any,
//   selectedDept?: any,
//   selectedIssue?: any,
//   startDate?: any,
//   endDate?: any,
//   startTime?: any,
//   endTime?: any,
//   debounceSearch?: any
// ) => {
//   try {
//     let url = `${MASTER_URL}/request/report/tfm?page=${page}&size=${rowsPerPage}`;
//     if (siteSelected) {
//       url += `&site=${siteSelected}`;
//     }
//     if (blockSelected) {
//       url += `&block=${blockSelected}`;
//     }
//     if (selectedStatus) {
//       url += `&status=${selectedStatus}`;
//     }
//     if (selectedAssigny) {
//       url += `&assign=${selectedAssigny}`;
//     }
//     if (selectedDept) {
//       url += `&department=${selectedDept}`;
//     }
//     if (selectedIssue) {
//       url += `&issueType=${selectedIssue}`;
//     }
//     if (startDate != "") {
//       url += `&startDate=${startDate}`;
//     }
//     if (endDate != "") {
//       url += `&endDate=${endDate}`;
//     }
//     if (startTime != "") {
//       url += `&fromTime=${startTime}`;
//     }
//     if (endTime != "") {
//       url += `&toTime=${endTime}`;
//     }
//     if (debounceSearch && debounceSearch !== "") {
//       url += `&search=${debounceSearch}`;
//     }

//     const header = await getHeaders(token);
//     const response = await fetch(url, {
//       method: "GET",
//       headers: header,
//     });
//     if (!response.ok) {
//       const result = await response.json();
//       throw new Error(JSON.stringify({ ...result, status: response.status }));
//     }
//     const result = await response.json();
//     return result;
//   } catch (err: any) {
//     try {
//       var unstrobj = JSON.parse(err?.message);
//       showToast(unstrobj?.errorMessage, "error");
//     } catch (e) {}
//     console.error("Error creating department:", err.message);
//     return null;
//   }
// };

export const getTfmReport = async (
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
      url += `&site=${siteSelected}`;
    }
    if (blockSelected) {
      url += `&block=${blockSelected}`;
    }
    if (selectedStatus) {
      if (Array.isArray(selectedStatus)) {
        // Repeat status param for each selected status
        selectedStatus.forEach((status) => {
          url += `&status=${encodeURIComponent(status)}`;
        });
      } else {
        url += `&status=${encodeURIComponent(selectedStatus)}`;
      }
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
    if (startDate) {
      url += `&startDate=${startDate + ":00"}`;
    }
    if (endDate) {
      url += `&endDate=${endDate + ":00"}`;
    }
    if (startTime) {
      url += `&fromTime=${startTime}`;
    }
    if (endTime) {
      url += `&toTime=${endTime}`;
    }
    if (debounceSearch) {
      url += `&search=${encodeURIComponent(debounceSearch)}`;
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
    console.error("Error creating department:", err.message);
    return null;
  }
};

export const getTfmReportExcel = async (
  token: string,
  params: {
    siteSelected?: any;
    blockSelected?: any;
    selectedStatus?: string | string[];
    selectedAssigny?: any;
    selectedDept?: any;
    selectedIssue?: any;
    startDate?: any;
    endDate?: any;
    debounceSearch?: any;
    download?: boolean;
  } = {}
) => {
  try {
    let url = `${MASTER_URL}/request/report/tfm`;
    const queryParams = new URLSearchParams();

    if (params.siteSelected) queryParams.append("site", params.siteSelected);
    if (params.blockSelected) queryParams.append("block", params.blockSelected);

    if (params.selectedStatus) {
      if (Array.isArray(params.selectedStatus)) {
        params.selectedStatus.forEach((status) =>
          queryParams.append("status", status)
        );
      } else {
        queryParams.append("status", params.selectedStatus);
      }
    }

    if (params.selectedAssigny)
      queryParams.append("assign", params.selectedAssigny);
    if (params.selectedDept)
      queryParams.append("department", params.selectedDept);
    if (params.selectedIssue)
      queryParams.append("issueType", params.selectedIssue);
    if (params.startDate)
      queryParams.append("startDate", params.startDate + ":00");
    if (params.endDate) queryParams.append("endDate", params.endDate + ":00");
    if (params.debounceSearch)
      queryParams.append("search", params.debounceSearch);
    if (params.download) queryParams.append("download", "true");

    const queryString = queryParams.toString();
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
    console.error("Error fetching TFM report:", err.message);
    return null;
  }
};

export const getAllStatus = async (token: string) => {
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

export const getAllDepartmentsRepo = async (token: string) => {
  try {
    const header = await getHeaders(token);
    const response = await fetch(
      `${MASTER_URL}/master/departments/by-login-user`,
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

export const getAllAssignyTfm = async (token: string, siteId: any) => {
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
// tf
export const getJobCardTfm = async (token: string, id: any) => {
  try {
    const header = await getHeaders(token);
    const response = await fetch(
      `${MASTER_URL}/request/report/tfm/job-card/${id}`,
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
