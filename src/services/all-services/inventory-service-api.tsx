import { showToast } from "@/utilities/ToastNotification";
import { getHeaders } from "../header/header1";
import { Api_Url } from "../all-api-url/api-url";

const Gateway_Url = "inventory/v1/api";

const MASTER_URL = `${Api_Url}/${Gateway_Url}`;

export const getInventorySite = async (token: any) => {
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

//  Sites Controller for getting all sites
export const getAllStocks = async (token: string) => {
  try {
    const header = await getHeaders(token);
    const response = await fetch(`${MASTER_URL}/stock/`, {
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
    } catch (e) {}
    console.error("Error creating department:", err.message);
    return null;
  }
};

export const updateStock = async (token: string, payload: any) => {
  try {
    const header = await getHeaders(token);
    const response = await fetch(`${MASTER_URL}/stock/`, {
      method: "PUT",
      headers: header,
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const result = await response.json();
      throw new Error(JSON.stringify({ ...result, status: response.status }));
    }
    const result = await response.json();
    showToast("Stock update successfully", "success");
    return result;
  } catch (err: any) {
    try {
      const unstrobj = JSON.parse(err?.message);
      showToast(unstrobj?.errorMessage, "error");
    } catch (e) {}
    console.error("Error updating stock :", err.message);
    return null;
  }
};

export const addNewStock = async (token: string, payload: any) => {
  try {
    const header = await getHeaders(token);
    const response = await fetch(`${MASTER_URL}/stock/`, {
      method: "POST",
      headers: header,
      body: JSON.stringify(payload),
    });
    if (!response.ok) {
      const result = await response.json();
      throw new Error(JSON.stringify({ ...result, status: response.status }));
    }
    const result = await response.json();
    showToast("Stock created sucessfully", "success");
    return result;
  } catch (err: any) {
    try {
      var unstrobj = JSON.parse(err?.message);
      showToast(unstrobj?.errorMessage, "error");
    } catch (e) {}
    console.error("Error add new stock:", err.message);
    return null;
  }
};

export const getStockJobCard = async (token: string, selectedStockId: any) => {
  try {
    const header = await getHeaders(token);
    const response = await fetch(
      `${MASTER_URL}/stock/job-card/${selectedStockId}`,
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
    console.error("Error add new stock:", err.message);
    return null;
  }
};

export const addStock = async (token: string, payload: any) => {
  try {
    const header = await getHeaders(token);
    const response = await fetch(`${MASTER_URL}/stock/add`, {
      method: "POST",
      headers: header,
      body: JSON.stringify(payload),
    });
    if (!response.ok) {
      const result = await response.json();
      throw new Error(JSON.stringify({ ...result, status: response.status }));
    }
    const result = await response.json();
    showToast("Stock add sucessfully", "success");

    return result;
  } catch (err: any) {
    try {
      var unstrobj = JSON.parse(err?.message);
      showToast(unstrobj?.errorMessage, "error");
    } catch (e) {}
    console.error("Error add stock:", err.message);
    return null;
  }
};

export const addConsumptionStock = async (token: string, payload: any) => {
  try {
    const header = await getHeaders(token);
    const response = await fetch(`${MASTER_URL}/stock/consumption`, {
      method: "POST",
      headers: header,
      body: JSON.stringify(payload),
    });
    if (!response.ok) {
      const result = await response.json();
      throw new Error(JSON.stringify({ ...result, status: response.status }));
    }
    const result = await response.json();
    showToast("Consumption update sucessfully", "success");
    return result;
  } catch (err: any) {
    try {
      var unstrobj = JSON.parse(err?.message);
      showToast(unstrobj?.errorMessage, "error");
    } catch (e) {}
    console.error("Error consumption stock:", err.message);
    return null;
  }
};

export const getStockCum = async (token: string, stockId: any) => {
  try {
    const header = await getHeaders(token);

    const response = await fetch(`${MASTER_URL}/stock/search/${stockId}`, {
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
    } catch (e) {}
    console.error("Error getting stock:", err.message);
    return null;
  }
};

export const getStockSearch = async (
  token: string,
  filters?: {
    selectedSiteId?: any;
    selectedGroups?: any;
    selectedDate?: any;
    debouncedFilters?: any;
    page?: any;
    rowsPerPage?: any;
    download?: boolean;
  }
) => {
  try {
    const header = await getHeaders(token);

    // let url = `${MASTER_URL}/stock/search/v1?page=${page}&size=${rowsPerPage}`;

    // if (selectedDate) {
    //   url += `&date=${selectedDate}`;
    // }
    // if (selectedGroups) {
    //   url += `&groupId=${selectedGroups}`;
    // }
    // if (debouncedFilters) {
    //   url += `&search=${debouncedFilters}`;
    // }
    // if (selectedSiteId) {
    //   url += `&site=${selectedSiteId}`;
    // }
    // if (download) {
    //   url += `&download=${download}`;
    // }

    const params = new URLSearchParams();

    if (filters?.page) params.append("page", String(filters.page));
    if (filters?.rowsPerPage)
      params.append("size", String(filters.rowsPerPage));
    if (filters?.selectedDate) params.append("date", filters.selectedDate);
    if (filters?.selectedGroups)
      params.append("groupId", filters.selectedGroups);
    if (filters?.debouncedFilters)
      params.append("search", filters.debouncedFilters);
    if (filters?.selectedSiteId) params.append("site", filters.selectedSiteId);
    if (typeof filters?.download === "boolean") {
      params.append("download", String(filters.download));
    }

    const url = `${MASTER_URL}/stock/search/v1?${params.toString()}`;

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
    } catch (e) {}
    console.error("Error getting stock:", err.message);
    return null;
  }
};

export const getAllGroups = async (token: string) => {
  try {
    const header = await getHeaders(token);
    const response = await fetch(`${MASTER_URL}/stock/groups`, {
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
    } catch (e) {}
    console.error("Error creating department:", err.message);
    return null;
  }
};

export const getStoreLocation = async (token: string) => {
  try {
    const header = await getHeaders(token);
    const response = await fetch(`${Api_Url}/ms/v1/api/storedetail`, {
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
    } catch (e) {}
    console.error("Error creating department:", err.message);
    return null;
  }
};

export const getInventoryFile = async (token: string, id: string) => {
  try {
    const header = await getHeaders(token);
    const response = await fetch(`${MASTER_URL}/stock/fileUpload${id}`, {
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
    } catch (e) {}
    console.error("Error creating department:", err.message);
    return null;
  }
};

export const deleteInventoryFile = async (token: string, id: string) => {
  try {
    const header = await getHeaders(token);
    const response = await fetch(`${MASTER_URL}/stock/fileUpload/${id}`, {
      method: "DELETE",
      headers: header,
    });

    if (!response.ok) {
      const result = await response.json();
      throw new Error(JSON.stringify({ ...result, status: response.status }));
    }
    const result = await response.json();
    showToast("Image Removed..", "success");
    return result;
  } catch (err: any) {
    try {
      var unstrobj = JSON.parse(err?.message);
    } catch (e) {}
    console.error("Error creating department:", err.message);
    return null;
  }
};

export const getStaffData = async (token: string) => {
  try {
    const header = await getHeaders(token);
    const response = await fetch(`${MASTER_URL}/stock/staff`, {
      method: "GET",
      headers: header,
    });

    const result = await response.json();
    return result;
  } catch (err: any) {
    console.error("Error fetching tenants:", err.message);
    throw err;
  }
};

export const returnStock = async (token: string, payload: any) => {
  try {
    const header = await getHeaders(token);
    const response = await fetch(`${MASTER_URL}/stock/return`, {
      method: "POST",
      headers: header,
      body: JSON.stringify(payload),
    });
    if (!response.ok) {
      const result = await response.json();
      throw new Error(JSON.stringify({ ...result, status: response.status }));
    }
    const result = await response.json();
    showToast("Stock Return sucessfully", "success");
    return result;
  } catch (err: any) {
    try {
      var unstrobj = JSON.parse(err?.message);
      showToast(unstrobj?.errorMessage, "error");
    } catch (e) {}
    console.error("Error return stock:", err.message);
    return null;
  }
};
