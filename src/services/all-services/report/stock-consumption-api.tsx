import { Api_Url } from "@/services/all-api-url/api-url";
import { getHeaders } from "@/services/header/header1";
import { showToast } from "@/utilities/ToastNotification";
import { method } from "lodash";

const Gateway_Url = "report/v1/api";

const MASTER_URL = `${Api_Url}/${Gateway_Url}`;

//  Sites Controller for getting all sites
export const getAllSiteForStock = async (token: string) => {
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

export const getBlocksBySiteIdStock = async (token: string, siteId: string) => {
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

export const getFloorBySiteIdAndBlockIdStock = async (
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

export const getZoneBySiteIdAndBlockIdAndZoneStock = async (
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

export const getIssueByTfmDeptStock = async (token: string, id: any) => {
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

export const getAllServiceProvidersStock = async (token: string) => {
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

export const getStockConsumReport = async (
  token: string,
  siteSelected?: any,
  seletedDept?: any,
  startDate?: any,
  endDate?: any
) => {
  try {
    let url = `${MASTER_URL}/inventory/report/consumption-stock?startDate=${startDate}&endDate=${endDate}`;
    if (siteSelected) {
      url += `&siteId=${siteSelected}`;
    }
    if (seletedDept) {
      url += `&GroupId=${seletedDept}`;
    }
    // if (startDate) {
    //   url += `&startDate=${startDate}`;
    // }
    // if (endDate) {
    //   url += `&endDate=${endDate}`;
    // }

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

export const getStockConsumReportExcel = async (
  token: string,
  params: {
    siteSelected?: any;
    seletedDept?: any;
    startDate?: any;
    endDate?: any;
    download?: boolean;
  } = {}
) => {
  try {
    let url = `${MASTER_URL}/inventory/report/consumption-stock`;
    const queryParams = new URLSearchParams();

    if (params.startDate) queryParams.append("startDate", params.startDate);
    if (params.endDate) queryParams.append("endDate", params.endDate);
    if (params.siteSelected) queryParams.append("siteId", params.siteSelected);
    if (params.seletedDept) queryParams.append("GroupId", params.seletedDept);
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

    const result = await response.json();
    return result;
  } catch (err: any) {
    try {
      const unstrobj = JSON.parse(err?.message);
      showToast(unstrobj?.errorMessage, "error");
    } catch (e) {}
    console.error("Error fetching stock consumption report:", err.message);
    return null;
  }
};

export const getStockAddedHistory = async (
  token: string,
  id?: any,
  startDate?: any,
  endDate?: any
) => {
  try {
    const header = await getHeaders(token);
    const response = await fetch(
      `${MASTER_URL}/inventory/report/add-stock-by-id?inventoryId=${id}&startDate=${startDate}&endDate=${endDate}`,
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

export const getStockConsumptionHistory = async (
  token: string,
  id?: any,
  startDate?: any,
  endDate?: any
) => {
  try {
    const header = await getHeaders(token);
    const response = await fetch(
      `${MASTER_URL}/inventory/report/consumption-stock-by-id?id=${id}&startDate=${startDate}&endDate=${endDate}`,
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

export const getAllStatusStock = async (token: string) => {
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

export const getAllCallTypeStock = async (token: string) => {
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

export const getAllDepartmentsStock = async (token: string) => {
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

export const getAllDoneByStock = async (token: string) => {
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

export const getAllTechUserStock = async (token: string, siteId: any) => {
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

export const getAllItemsStock = async (
  token: string,
  selectedSite: any,
  selectedGroup: any
) => {
  try {
    const header = await getHeaders(token);
    const response = await fetch(
      `${MASTER_URL}/master/inventory?site=${selectedSite}&group=${selectedGroup}`,
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

export const getAddStockReport = async (token: string, prams: any) => {
  try {
    let url = `${MASTER_URL}/inventory/add_stock?page=${prams?.page}&size=${prams?.size}`;
    if (prams?.siteId) {
      url += `&siteId=${prams?.siteId}`;
    }
    if (prams?.groupId) {
      url += `&groupId=${prams?.groupId}`;
    }
    if (prams?.itemId) {
      url += `&itemId=${prams?.itemId}`;
    }

    if (prams?.search) {
      url += `&search=${prams?.search}`;
    }
    if (prams?.startDate) {
      url += `&startDate=${prams?.startDate}`;
    }
    if (prams?.endDate) {
      url += `&endDate=${prams?.endDate}`;
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
    console.error("Error fetching service providers:", err.message);
    return null;
  }
};

export const getAddStockJobCardEqup = async (token: string, id: any) => {
  try {
    const header = await getHeaders(token);
    const response = await fetch(
      `${MASTER_URL}/inventory/inventory/job-card/${id}`,
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

export const getConsumptionRequest = async (token: string, prams: any) => {
  try {
    let url = `${MASTER_URL}/inventory/stock_Consumption/request?page=${prams?.page}&size=${prams?.size}`;
    if (prams?.siteId) {
      url += `&siteId=${prams?.siteId}`;
    }
    if (prams?.blockId) {
      url += `&blockId=${prams?.blockId}`;
    }
    if (prams?.groupId) {
      url += `&groupId=${prams?.groupId}`;
    }

    if (prams?.search) {
      url += `&search=${prams?.search}`;
    }
    if (prams?.fromDate) {
      url += `&fromDate=${prams?.fromDate}`;
    }
    if (prams?.toDate) {
      url += `&toDate=${prams?.toDate}`;
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
    console.error("Error fetching service providers:", err.message);
    return null;
  }
};

export const getAllLowStock = async (token: string, params: any = {}) => {
  try {
    let url = `${MASTER_URL}/inventory/report/low-stock`;
    const queryParams = new URLSearchParams();

    // Optional parameters
    if (params.siteId) queryParams.append("siteId", params.siteId);
    if (params.groupId) queryParams.append("groupId", params.groupId);
    if (params.download === true) queryParams.append("download", "true");

    const queryString = queryParams.toString();
    if (queryString) {
      url += `?${queryString}`;
    }

    const headers = await getHeaders(token);
    const response = await fetch(url, {
      method: "GET",
      headers,
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(
        JSON.stringify({ ...errorData, status: response.status })
      );
    }

    const result = await response.json();
    return result;
  } catch (err: any) {
    try {
      const parsedError = JSON.parse(err?.message);
      showToast(parsedError?.errorMessage, "error");
    } catch (e) {}
    console.error("Error fetching low stock data:", err.message);
    return null;
  }
};
