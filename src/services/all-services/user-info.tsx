import { showToast } from "@/utilities/ToastNotification";
import { Api_Url } from "../all-api-url/api-url";
import { getHeaders } from "../header/header1";

const Gateway_Url = "us/v1/api";

export const login = async (email: string, password: string) => {
  try {
    const response = await fetch(
      `${Api_Url}/${Gateway_Url}/authKeyClock/getToken`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }), // Using email instead of username
      }
    );

    if (!response.ok) {
      throw new Error("Login failed. Server returned an error.");
    }

    const textResponse = await response.text(); // Get the response as plain text
    if (!textResponse) {
      throw new Error("Empty response from server");
    }

    const data = JSON.parse(textResponse); // Now parse the text response

    if (data?.access_token) {
      return data; // Return data if access_token is found
    } else {
      throw new Error("Access token not found in response");
    }
  } catch (error) {
    console.error("Error during login:", error);
    throw new Error("Login failed");
  }
};

export const revokeToken = async (token: string) => {
  try {
    const header = await getHeaders(token);
    const response = await fetch(
      `${Api_Url}/${Gateway_Url}/authKeyClock/getToken`,
      {
        method: "POST",
        headers: header,
      }
    );

    if (!response.ok) {
      throw new Error("Login failed. Server returned an error.");
    }

    const textResponse = await response.text(); // Get the response as plain text
    if (!textResponse) {
      throw new Error("Empty response from server");
    }

    const data = JSON.parse(textResponse); // Now parse the text response

    if (data?.access_token) {
      return data; // Return data if access_token is found
    } else {
      throw new Error("Access token not found in response");
    }
  } catch (error) {
    console.error("Error during login:", error);
    throw new Error("Login failed");
  }
};

export const getAllTenantUserData = async (token: string) => {
  try {
    // const Api_Url= process.env.API_BASE_URL
    const header = await getHeaders(token);
    const response = await fetch(`${Api_Url}/${Gateway_Url}/user/tenants`, {
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

export const getAllUserData = async (
  token: string,
  page: any,
  size: any,
  debouncedSearch: any,
  role?: any,
  userTypeSelected?: any,
  status?: any
) => {
  try {
    // const Api_Url= process.env.API_BASE_URL
    console.log("debouncedSearch api side: ", debouncedSearch?.serach);
    const header = await getHeaders(token);
    let baseUrl = `${Api_Url}/${Gateway_Url}/users/search`;

    // Construct query params
    const queryParams = new URLSearchParams({
      page: page.toString(),
      size: size.toString(),
      sortBy: "id",
      ascending: "true",
    });

    // Add optional filters
    if (debouncedSearch?.serach) {
      queryParams.append("search", debouncedSearch.serach);
    }

    if (role && role !== "Select Role") {
      queryParams.append("roleId", role);
    }

    if (userTypeSelected && userTypeSelected !== "Select UserType") {
      queryParams.append("userType", userTypeSelected);
    }
    if (status && status !== "Select Status") {
      queryParams.append("status", status);
    }

    const finalUrl = `${baseUrl}?${queryParams.toString()}`;
    console.log("finalUrl: ", finalUrl);
    const response = await fetch(finalUrl, {
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

export const changeUserStatusById = async (token: string, userId: any) => {
  try {
    // const Api_Url= process.env.API_BASE_URL
    const header = await getHeaders(token);
    const response = await fetch(
      `${Api_Url}/${Gateway_Url}/users/status/${userId}`,
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
    return result;
  } catch (err: any) {
    try {
      const unstrobj = JSON.parse(err?.message);
      showToast(unstrobj?.errorMessage, "error");
    } catch (e) {}
    console.error("Error create tfm request :", err.message);
    return null;
  }
};

export const resetPassword = async (token: string, userId: any) => {
  try {
    // const Api_Url= process.env.API_BASE_URL
    const header = await getHeaders(token);
    const response = await fetch(
      `${Api_Url}/${Gateway_Url}/users/resset-password/${userId}`,
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

export const getMatrixAllData = async (
  token: string,
  siteId: any,
  departmentId?: any,
  EscalationType?: any
) => {
  try {
    // const Api_Url= process.env.API_BASE_URL

    const header = await getHeaders(token);
    let finalUrl = `${Api_Url}/${Gateway_Url}/escalation-matrix?siteId=${siteId}&departmentId=${departmentId}&EscalationType=${EscalationType}`;
    const response = await fetch(finalUrl, {
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

export const postDefaultTenant = async (token: string, tenantId: any) => {
  try {
    // const Api_Url= process.env.API_BASE_URL
    const header = await getHeaders(token);
    const response = await fetch(
      `${Api_Url}/${Gateway_Url}/user/default/tenant/${tenantId}`,
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

export const defaultTenant = async (token: string) => {
  try {
    // const Api_Url= process.env.API_BASE_URL
    const header = await getHeaders(token);
    const response = await fetch(
      `${Api_Url}/${Gateway_Url}/user/login/details`,
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

export const userType = async (token: string) => {
  try {
    // const Api_Url= process.env.API_BASE_URL
    const header = await getHeaders(token);
    const response = await fetch(`${Api_Url}/${Gateway_Url}/users/user-type`, {
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

export const userRole = async (token: string) => {
  try {
    // const Api_Url= process.env.API_BASE_URL
    const header = await getHeaders(token);
    const response = await fetch(`${Api_Url}/${Gateway_Url}/tenant-roles`, {
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

export const permissionUpdate = async (token: string, payload: any) => {
  try {
    const header = await getHeaders(token);
    let method = "PUT";
    const response = await fetch(
      `${Api_Url}/${Gateway_Url}/tenant-roles/permission`,
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
    // showToast(`Permission updated successfully`, "success");
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

export const saveUserRole = async (token: string, payload: any) => {
  try {
    // const Api_Url= process.env.API_BASE_URL
    const header = await getHeaders(token);
    const response = await fetch(`${Api_Url}/${Gateway_Url}/tenant-roles`, {
      method: "POST",
      headers: header,
      body: JSON.stringify(payload),
    });
    if (!response.ok) {
      const result = await response.json();
      throw new Error(JSON.stringify({ ...result, status: response.status }));
    }

    const result = await response.json();
    showToast("Role Created", "success");
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

export const createESMatrix = async (token: string, payload: any) => {
  try {
    const header = await getHeaders(token);
    let method = "POST";
    const response = await fetch(
      `${Api_Url}/${Gateway_Url}/escalation-matrix`,
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
    showToast(`Matrix created successfully`, "success");
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

export const updateESMatrix = async (token: string, payload: any) => {
  try {
    const header = await getHeaders(token);
    let method = "PUT";
    const response = await fetch(
      `${Api_Url}/${Gateway_Url}/escalation-matrix/updateEscalationMatrixEmail`,
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
    showToast(`Matrix created successfully`, "success");
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

export const getAllTenantRole = async (token: string) => {
  try {
    const header = await getHeaders(token);
    let method = "GET";
    const response = await fetch(`${Api_Url}/${Gateway_Url}/tenant-roles`, {
      method: method,
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

export const createUser = async (token: string, payload: any) => {
  try {
    const header = await getHeaders(token);
    let method = "POST";
    const response = await fetch(`${Api_Url}/${Gateway_Url}/users`, {
      method: method,
      headers: header,
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const result = await response.json();
      throw new Error(JSON.stringify({ ...result, status: response.status }));
    }
    const result = await response.json();
    showToast(`User created successfully`, "success");
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

export const passwordChange = async (token: string, payload: any) => {
  try {
    const header = await getHeaders(token);
    let method = "POST";
    const response = await fetch(
      `${Api_Url}/${Gateway_Url}/users/resset-password`,
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

export const createUserRoleMap = async (token: string, payload: any) => {
  try {
    const header = await getHeaders(token);
    let method = "POST";
    const response = await fetch(
      `${Api_Url}/${Gateway_Url}/user-tenants/role-map`,
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
    showToast(`User role map successfully`, "success");
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

export const deleteSites = async (token: string, uId: any, sId: any) => {
  try {
    const header = await getHeaders(token);
    let method = "DELETE";
    const response = await fetch(
      `${Api_Url}/${Gateway_Url}/user-tenants/${uId}/sites/${sId}`,
      {
        method: method,
        headers: header,
      }
    );

    if (!response.ok) {
      const result = await response.json();
      throw new Error(JSON.stringify({ ...result, status: response.status }));
    }
    const result = await response.json();
    showToast(`Deleted successfully`, "success");
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

export const getMapUser = async (token: string, id: any) => {
  try {
    const header = await getHeaders(token);
    let method = "GET";
    const response = await fetch(`${Api_Url}/${Gateway_Url}/users/${id}`, {
      method: method,
      headers: header,
    });

    if (!response.ok) {
      const result = await response.json();
      throw new Error(JSON.stringify({ ...result, status: response.status }));
    }
    const result = await response.json();
    // showToast(`Unit created successfully`, "success");
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

export const getUserType = async (token: string) => {
  try {
    const header = await getHeaders(token);
    let method = "GET";
    const response = await fetch(`${Api_Url}/${Gateway_Url}/public/user/type`, {
      method: method,
      headers: header,
    });

    if (!response.ok) {
      const result = await response.json();
      throw new Error(JSON.stringify({ ...result, status: response.status }));
    }
    const result = await response.json();
    // showToast(`Unit created successfully`, "success");
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

export const getSites = async (token: string, page: any, size: any) => {
  try {
    const header = await getHeaders(token);
    let method = "GET";
    const response = await fetch(
      `${Api_Url}/${Gateway_Url}/sites?page=${page}&size=${size}&sortBy=id&ascending=true`,
      {
        method: method,
        headers: header,
      }
    );

    if (!response.ok) {
      const result = await response.json();
      throw new Error(JSON.stringify({ ...result, status: response.status }));
    }
    const result = await response.json();
    // showToast(`Unit created successfully`, "success");
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
export const getUserDepartment = async (token: string) => {
  try {
    const header = await getHeaders(token);
    const method = "GET";

    const response = await fetch(
      `${Api_Url}/${Gateway_Url}/sites/departments`,
      {
        method,
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
      const unstrobj = JSON.parse(err?.message);
      showToast(unstrobj?.errorMessage, "error");
    } catch (e) {}
    console.error("Error fetching blocks:", err.message);
    return null;
  }
};

export const getLoginDetails = async (token: string) => {
  try {
    const header = await getHeaders(token);
    let method = "GET";
    const response = await fetch(
      `${Api_Url}/${Gateway_Url}/user/login/details`,
      {
        method: method,
        headers: header,
      }
    );

    if (!response.ok) {
      const result = await response.json();
      throw new Error(JSON.stringify({ ...result, status: response.status }));
    }
    const result = await response.json();
    // showToast(`Unit created successfully`, "success");
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

export const saveUserTenantPref = async (token: string, formData: any) => {
  const header = await getHeaders(token);
  const apiUrl = `${Api_Url}/${Gateway_Url}/user/preference`; // Edit API endpoint
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
