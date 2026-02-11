import { showToast } from "@/utilities/ToastNotification";
import { Api_Url } from "../all-api-url/api-url";
import {
  getHeaders,
  getHeadersForImage,
  getPublicHeaders,
} from "../header/header1";

// import { getHeaders } from "../header/api-header";
// const Api_Url= "https://tenant.fm.apps.workeye.in/v1/api"

export const getAllTenant = async (
  token: string,
  pageNumber: any,
  pageSize: any
) => {
  try {
    // const Api_Url= process.env.API_BASE_URL
    const header = await getHeaders(token);
    const response = await fetch(
      `${Api_Url}/ts/v1/api/tenant?page=${pageNumber}&size=${pageSize}&sortBy=id&ascending=true`,
      {
        method: "GET",
        headers: header,
      }
    );

    const result = await response.json();
    return result;
  } catch (err: any) {
    console.error("Error fetching tenants:", err.message);
    throw err;
  }
};

export const getAllDropdownTenant = async (
  token: string,
  pageNumber: any,
  pageSize: any,
  search: any
) => {
  try {
    // const Api_Url= process.env.API_BASE_URL
    const header = await getHeaders(token);
    let url = `${Api_Url}/ts/v1/api/tenant?page=${pageNumber}&size=${pageSize}&sortBy=id&ascending=true`;

    if (search && search != "") {
      url = url + `&search=${search}`;
    }
    const response = await fetch(url, {
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

export const getAllSearchTenant = async (
  token: string,
  data?: any,
  pageNumber?: any,
  pageSize?: any
) => {
  try {
    // const Api_Url= process.env.API_BASE_URL

    let url = `${Api_Url}/ts/v1/api/tenant?search=${data}&page=${pageNumber}&size=${pageSize}&sort=%5B%22id%22%5D`;
    if (!data) {
      url = `${Api_Url}/ts/v1/api/tenant?page=${pageNumber}&size=${pageSize}&sort=%5B%22id%22%5D`;
    }
    const header = await getHeaders(token);
    const response = await fetch(url, {
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

export const passwordChangeSuper = async (token: string, payload: any) => {
  try {
    const header = await getHeaders(token);
    let method = "POST";
    const response = await fetch(`${Api_Url}/ts/v1/api/users/resset-password`, {
      method: method,
      headers: header,
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const result = await response.json();
      throw new Error(JSON.stringify({ ...result, status: response.status }));
    }
    const result = await response.json();
    showToast(`Password changed successfully`, "success");
    return result;
  } catch (err: any) {
    try {
      const unstrobj = JSON.parse(err?.message);
      showToast(unstrobj?.errorMessage, "error");
    } catch (e) {}
    console.error("Error updating department issue:", err.message);
    return null;
  }
};

export const passwordChangeSuperTenant = async (
  token: string,
  payload: any
) => {
  try {
    const header = await getHeaders(token);
    let method = "POST";
    const response = await fetch(
      `${Api_Url}/ts/v1/api/users/resset-my-password`,
      {
        method: method,
        headers: header,
        body: JSON.stringify(payload),
      }
    );

    if (!response.ok) {
      const result = await response.json();
      throw new Error(JSON.stringify({ ...result, status: response.status }));
    }
    const result = await response.json();
    showToast(`Password changed successfully`, "success");
    return result;
  } catch (err: any) {
    try {
      const unstrobj = JSON.parse(err?.message);
      showToast(unstrobj?.errorMessage, "error");
    } catch (e) {}
    console.error("Error updating department issue:", err.message);
    return null;
  }
};

export const resetPasswordSuper = async (token: string, userId: any) => {
  try {
    // const Api_Url= process.env.API_BASE_URL
    const header = await getHeaders(token);
    const response = await fetch(
      `${Api_Url}/ts/v1/api/users/resset-password/${userId}`,
      {
        method: "GET",
        headers: header,
      }
    );

    const result = await response.json();
    if (response.ok) {
      showToast("Password reset successfully", "success");
    }
    return result;
  } catch (err: any) {
    console.error("Error fetching tenants:", err.message);
    throw err;
  }
};

export const addOrEditTenant = async (
  selectedTenatInfo: any,
  title: any,
  formData: any,
  token: string
) => {
  const header = await getHeaders(token);
  const apiUrl =
    title === "edit"
      ? `${Api_Url}/ts/v1/api/tenant/${selectedTenatInfo?.id}` // Edit API endpoint
      : `${Api_Url}/ts/v1/api/tenant`; // Create API endpoint

  const method = title === "edit" ? "PUT" : "POST";

  try {
    const response = await fetch(apiUrl, {
      method,
      headers: header,
      body: JSON.stringify(formData),
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

export const getRequestFlow = async (token: string) => {
  try {
    const header = await getHeaders(token);

    const response = await fetch(
      `${Api_Url}/ts/v1/api/tenant/tfm-request-flow`,
      {
        method: "GET",
        headers: header,
      }
    );

    const result = await response.json();
    return result;
  } catch (err: any) {
    console.error("Error fetching tenants:", err.message);
    throw err;
  }
};

export const getTimeZones = async (token: string) => {
  try {
    const header = await getHeaders(token);

    const response = await fetch(`${Api_Url}/ts/v1/api/public/timezones`, {
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

export const getAllTenantUserForAdminNonAdmin = async (
  token: string,
  pageNumber: any,
  pageSize: any,
  search?: string
) => {
  try {
    // const Api_Url= process.env.API_BASE_URL

    let url = `${Api_Url}/ts/v1/api/users/search/?page=${pageNumber}&size=${pageSize}&sortBy=id&ascending=true`;
    if (search) {
      url += `&search=${search}`;
    }
    const header = await getHeaders(token);
    const response = await fetch(url, {
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

export const getAllTenantUsers = async (
  token: string,
  pageNumber: any,
  pageSize: any,
  search?: string
) => {
  try {
    // const Api_Url= process.env.API_BASE_URL

    let url = `${Api_Url}/ts/v1/api/users/search/?page=${pageNumber}&size=${pageSize}&sortBy=id&ascending=true&admin=true`;
    if (search) {
      url += `&search=${search}`;
    }
    const header = await getHeaders(token);
    const response = await fetch(url, {
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

export const addOrEditTenantUsers = async (
  selectedTenatUserInfo: any,
  title: any,
  formData: any,
  token: string
) => {
  const header = await getHeaders(token);
  const apiUrl = `${Api_Url}/ts/v1/api/users`; // Create API endpoint

  const method = "POST";

  try {
    const response = await fetch(apiUrl, {
      method,
      headers: header,
      body: JSON.stringify(formData),
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

export const getAllTenantSites = async (
  token: string,
  pageNumber: any,
  pageSize: any,
  search?: any,
  tenantId?: any
) => {
  try {
    // const Api_Url= process.env.API_BASE_URL
    let url = `${Api_Url}/ts/v1/api/sites/search?page=${pageNumber}&size=${pageSize}&sortBy=id&ascending=true`;
    const header = await getHeaders(token);
    if (search) {
      url += `&keyword=${search}`;
    }
    if (tenantId) {
      url += `&tenantId=${tenantId}`;
    }
    const response = await fetch(url, {
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

export const addOrEditTenantSites = async (
  selectedTenatSiteInfo: any,
  title: any,
  formData: any,
  token: string
) => {
  const header = await getHeaders(token);
  const apiUrl = `${Api_Url}/ts/v1/api/sites`; // Create API endpoint

  const method = "POST";

  try {
    const response = await fetch(apiUrl, {
      method,
      headers: header,
      body: JSON.stringify(formData),
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

export const getAllTenantFeatures = async () => {
  try {
    const response = await fetch(
      `${Api_Url}/ts/v1/api/public/app/modules/search?page=1073741824&size=1073741824&sort=%5B%22string%22%5D`,
      {
        method: "GET",
      }
    );

    const result = await response.json();
    return result;
  } catch (err: any) {
    console.error("Error fetching tenants:", err.message);
    throw err;
  }
};

export const addOrEditTenantFeatures = async (
  selectedTenatInfo: any,
  title: any,
  formData: any,
  token: string
) => {
  const header = await getHeaders(token);
  const apiUrl = `${Api_Url}/ts/v1/api/features/tenant/${selectedTenatInfo?.id}`; // Edit API endpoint

  const method = "POST";

  try {
    const response = await fetch(apiUrl, {
      method,
      headers: header,
      body: JSON.stringify(formData),
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

export const getSavedTenantFeatures = async (
  selectedTenatInfo: any,
  token: string
) => {
  const header = await getHeaders(token);
  const apiUrl = `${Api_Url}/ts/v1/api/features/tenant/${selectedTenatInfo?.id}`; // Edit API endpoint
  const method = "GET";

  try {
    const response = await fetch(apiUrl, {
      method,
      headers: header,
    });

    if (!response.ok) {
      throw new Error(`Failed to tenant`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error submitting form:", error);
  }
};

export const updateTenantStatus = async (
  selectedTenatInfo: any,
  status: any,
  token: string
) => {
  const header = await getHeaders(token);
  const apiUrl = `${Api_Url}/ts/v1/api/tenant/${selectedTenatInfo?.id}/status/${status}`; // Edit API endpoint
  const method = "PUT";

  try {
    const response = await fetch(apiUrl, {
      method,
      headers: header,
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

export const updateUserTenantStatus = async (
  selectedUserInfo: any,
  tenantId: any,
  status: any,
  token: string
) => {
  const header = await getHeaders(token);
  const apiUrl = `${Api_Url}/ts/v1/api/users/${selectedUserInfo?.id}/tenant/${tenantId}/status/${status}`; // Edit API endpoint
  const method = "PUT";

  try {
    const response = await fetch(apiUrl, {
      method,
      headers: header,
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

export const mapUserWithTenant = async (token: string, formData: any) => {
  const header = await getHeaders(token);
  const apiUrl = `${Api_Url}/ts/v1/api/users/tenant`; // Edit API endpoint
  const method = "POST";

  try {
    const response = await fetch(apiUrl, {
      method,
      headers: header,
      body: JSON.stringify(formData),
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

export const getPrefrences = async (token: string, tenantId: any) => {
  try {
    // const Api_Url= process.env.API_BASE_URL
    const header = await getHeaders(token);
    const response = await fetch(`${Api_Url}/ts/v1/api/tenant/${tenantId}`, {
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

export const handleTenantUser = async (
  selectedUserInfo: any,
  token: string
) => {
  const header = await getHeaders(token);
  const apiUrl = `${Api_Url}/ts/v1/api/users/${selectedUserInfo.id}/tenant`; // Edit API endpoint
  const method = "GET";

  try {
    const response = await fetch(apiUrl, {
      method,
      headers: header,
    });

    if (!response.ok) {
      throw new Error(`Failed to tenant`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error submitting form:", error);
  }
};

export const updateSiteStatus = async (
  selectedSiteId: any,
  status: any,
  token: string
) => {
  const header = await getHeaders(token);
  const apiUrl = `${Api_Url}/ts/v1/api/sites/${selectedSiteId}/status/${status}`; // Edit API endpoint
  const method = "PUT";

  try {
    const response = await fetch(apiUrl, {
      method,
      headers: header,
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

export const handleAppCreate = async (token: string, formData: any) => {
  const header = await getHeaders(token);
  const apiUrl = `${Api_Url}/ts/v1/api/languages/app/add`; // Edit API endpoint
  const method = "POST";

  try {
    const response = await fetch(apiUrl, {
      method,
      headers: header,
      body: JSON.stringify(formData),
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

export const handleMenuCreate = async (token: string, formData: any) => {
  const header = await getHeaders(token);
  const apiUrl = `${Api_Url}/ts/v1/api/languages/menu/add`; // Edit API endpoint
  const method = "POST";

  try {
    const response = await fetch(apiUrl, {
      method,
      headers: header,
      body: JSON.stringify(formData),
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

export const handleKeyCreate = async (token: string, formData: any) => {
  const header = await getHeaders(token);
  const apiUrl = `${Api_Url}/ts/v1/api/languages/key/add`; // Edit API endpoint
  const method = "POST";

  try {
    const response = await fetch(apiUrl, {
      method,
      headers: header,
      body: JSON.stringify(formData),
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

export const handleScreenCreate = async (token: string, formData: any) => {
  const header = await getHeaders(token);
  const apiUrl = `${Api_Url}/ts/v1/api/languages/screen/add`; // Edit API endpoint
  const method = "POST";

  try {
    const response = await fetch(apiUrl, {
      method,
      headers: header,
      body: JSON.stringify(formData),
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

export const handleGetAllLanguage = async (token: string) => {
  const v = Math.random();
  const header = await getHeaders(token);
  const apiUrl = `${Api_Url}/ts/v1/api/languages/app/all?v=${v}`; // Edit API endpoint
  const method = "GET";

  try {
    const response = await fetch(apiUrl, {
      method,
      headers: header,
    });

    if (!response.ok) {
      throw new Error(`Failed to tenant`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error submitting form:", error);
  }
};

export const setLanguageToTenant = async (token: string, formData: any) => {
  const header = await getHeaders(token);
  const apiUrl = `${Api_Url}/ts/v1/api/languages/tenant/add/code`; // Edit API endpoint
  const method = "POST";

  try {
    const response = await fetch(apiUrl, {
      method,
      headers: header,
      body: JSON.stringify(formData),
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

export const getTenantLanguageCode = async (token: string) => {
  const header = await getHeaders(token);
  const apiUrl = `${Api_Url}/ts/v1/api/languages/code/all`; // Edit API endpoint
  const method = "GET";

  try {
    const response = await fetch(apiUrl, {
      method,
      headers: header,
    });

    if (!response.ok) {
      throw new Error(`Failed to tenant`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error submitting form:", error);
  }
};

export const getTenantLanguageById = async (token: string, tenantId: any) => {
  const header = await getHeaders(token);
  const apiUrl = `${Api_Url}/ts/v1/api/languages/tenant/${tenantId}/language`; // Edit API endpoint
  const method = "GET";

  try {
    const response = await fetch(apiUrl, {
      method,
      headers: header,
    });

    if (!response.ok) {
      throw new Error(`Failed to tenant`);
    }

    const text = await response.text();
    const data = text ? JSON.parse(text) : null;
    return data;
  } catch (error) {
    console.error("Error submitting form:", error);
  }
};

export const getTenantCodeById = async (token: string, tenantId: any) => {
  const header = await getHeaders(token);
  const apiUrl = `${Api_Url}/ts/v1/api/languages/tenant/${tenantId}/code`; // Edit API endpoint
  const method = "GET";

  try {
    const response = await fetch(apiUrl, {
      method,
      headers: header,
    });

    if (!response.ok) {
      throw new Error(`Failed to tenant`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error submitting form:", error);
  }
};

export const getDefaultLang = async (token: string) => {
  const header = await getHeaders(token);
  const apiUrl = `${Api_Url}/ts/v1/api/languages/default/language`; // Edit API endpoint
  const method = "GET";

  try {
    const response = await fetch(apiUrl, {
      method,
      headers: header,
    });

    if (!response.ok) {
      throw new Error(`Failed to tenant`);
    }

    // Check if response has content before parsing as JSON
    const text = await response.text();
    const data = text ? JSON.parse(text) : null;
    return data;
  } catch (error) {
    console.error("Error submitting form:", error);
  }
};

export const setTenantAddLanguage = async (token: string, formData: any) => {
  const header = await getHeaders(token);
  const apiUrl = `${Api_Url}/ts/v1/api/languages/tenant/add/language`; // Edit API endpoint
  const method = "POST";

  try {
    const response = await fetch(apiUrl, {
      method,
      headers: header,
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      const result = await response.json();
      throw new Error(JSON.stringify({ ...result, status: response.status }));
    }
    const result = await response.json();
    showToast("saved success", "success");
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

export const saveTenantPref = async (token: string, formData: any, id: any) => {
  const header = await getHeaders(token);
  const apiUrl = `${Api_Url}/ts/v1/api/tenant/${id}/preference`; // Edit API endpoint
  const method = "PUT";

  try {
    const response = await fetch(apiUrl, {
      method,
      headers: header,
      body: JSON.stringify(formData),
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

export const getUnitGroup = async (token: string) => {
  try {
    const header = await getHeaders(token);
    const apiUrl = `${Api_Url}/ts/v1/api/public/unit/group`;
    const response = await fetch(apiUrl, {
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
    console.error("Error updating department issue:", err.message);
    return null;
  }
};

export const getEscalationType = async () => {
  try {
    const apiUrl = `${Api_Url}/ts/v1/api/public/escalation/type`;
    const response = await fetch(apiUrl, {
      method: "GET",
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
    console.error("Error updating department issue:", err.message);
    return null;
  }
};

export const uploadImageUser = async (token: string, file: File) => {
  const formData = new FormData();
  formData.append("file", file);

  const headers = await getHeadersForImage(token);

  const response = await fetch(`${Api_Url}/ts/v1/api/uploads/avatar`, {
    method: "POST",
    headers,
    body: formData,
  });

  if (!response.ok) {
    throw new Error("File upload failed");
  }

  const data = await response.json();
  return data;
};

export const getUserPic = async (token: any, name: any) => {
  try {
    const header = await getHeaders(token);
    const apiUrl = `${Api_Url}/ts/v1/api/uploads/avatar?filename=${name}`;
    const response = await fetch(apiUrl, {
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
    console.error("Error updating department issue:", err.message);
    return null;
  }
};

export const getAllExistingUser = async (
  token: string,
  page: any,
  size: any,
  tenantId: any,
  search?: any
) => {
  try {
    let url = `${Api_Url}/ts/v1/api/tenant/${tenantId}/users?page=${page}&size=${size}&admin=false`;
    if (search) {
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
      const unstrobj = JSON.parse(err?.message);
      showToast(unstrobj?.errorMessage, "error");
    } catch (e) {}
    console.error("Error updating department issue:", err.message);
    return null;
  }
};

export const getAllAdminUser = async (
  token: string,
  page: any,
  size: any,
  tenantId: any,
  search?: any
) => {
  try {
    let url = `${Api_Url}/ts/v1/api/tenant/${tenantId}/users?page=${page}&size=${size}&admin=true`;
    if (search) {
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
      const unstrobj = JSON.parse(err?.message);
      showToast(unstrobj?.errorMessage, "error");
    } catch (e) {}
    console.error("Error updating department issue:", err.message);
    return null;
  }
};

export const getTimeZonePublic = async () => {
  try {
    const header = await getPublicHeaders();
    const response = await fetch(`${Api_Url}/ts/v1/api/public/timezones`, {
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

//Google map
export const getTokenAppSetting = async (token: string, key: any) => {
  try {
    // const Api_Url= process.env.API_BASE_URL
    const header = await getHeaders(token);
    const response = await fetch(
      `${Api_Url}/ts/v1/api/app-settings?key=${key}`,
      {
        method: "GET",
        headers: header,
      }
    );

    const result = await response.json();
    return result;
  } catch (err: any) {
    console.error("Error fetching app setting:", err.message);
    throw err;
  }
};
