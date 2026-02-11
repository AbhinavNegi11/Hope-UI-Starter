import { showToast } from "@/utilities/ToastNotification";
import { Api_Url } from "../all-api-url/api-url";
import { getHeaders, getHeadersForImage } from "../header/header1";

const Gateway_Url = "energy/v1/api";

const MASTER_URL = `${Api_Url}/${Gateway_Url}`;

//Meter
export const getEnergySite = async (token: any) => {
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

export const getAllMeter = async (token: any) => {
  try {
    const header = await getHeaders(token);
    const response = await fetch(`${MASTER_URL}/meter/`, {
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

export const getMeterByCategory = async (
  token: any,
  selectedCategory?: any,
  siteSelected?: any,
  meterPage?: any,
  meterSize?: any,
  meterSearch?: any
) => {
  try {
    const header = await getHeaders(token);

    const queryParams = new URLSearchParams();
    if (siteSelected) queryParams.append("siteId", siteSelected);
    if (selectedCategory) queryParams.append("categoryId", selectedCategory);
    if (meterSearch) queryParams.append("search", meterSearch);

    const url = `${MASTER_URL}/meter/search?page=${meterPage}&size=${meterSize}&${queryParams.toString()}`;

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
    } catch (e) {
      console.error("Error parsing error message:", e);
    }
    console.error("Error getting meter:", err.message);
    return null;
  }
};

export const createMeter = async (token: string, payload: any) => {
  try {
    const header = await getHeaders(token);
    const response = await fetch(`${MASTER_URL}/meter/`, {
      method: "POST",
      headers: header,
      body: JSON.stringify(payload),
    });
    if (!response.ok) {
      const result = await response.json();
      throw new Error(JSON.stringify({ ...result, status: response.status }));
    }
    const result = await response.json();
    showToast("Meter created sucessfully", "success");
    return result;
  } catch (err: any) {
    try {
      var unstrobj = JSON.parse(err?.message);
      showToast(unstrobj?.errorMessage, "error");
    } catch (e) {}
    console.error("Error creating meter:", err.message);
    return null;
  }
};

//Meter Reading
export const createMeterReadingByMeterId = async (
  token: string,
  payload: any
) => {
  try {
    const header = await getHeaders(token);
    const response = await fetch(`${MASTER_URL}/meterReading/`, {
      method: "POST",
      headers: header,
      body: JSON.stringify(payload),
    });
    if (!response.ok) {
      const result = await response.json();
      throw new Error(JSON.stringify({ ...result, status: response.status }));
    }
    const result = await response.json();
    showToast("Meter reading updated sucessfully", "success");

    return result;
  } catch (err: any) {
    try {
      var unstrobj = JSON.parse(err?.message);
      showToast(unstrobj?.errorMessage, "error");
    } catch (e) {}
    console.error("Error creating meter reading:", err.message);
    return null;
  }
};

export const updateMeterReadingById = async (token: string, payload: any) => {
  try {
    const headers = await getHeaders(token); // Should include 'Content-Type': 'application/json'
    const response = await fetch(`${MASTER_URL}/meterReading/updateReading`, {
      method: "PUT",
      headers,
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const result = await response.json();
      throw new Error(JSON.stringify({ ...result, status: response.status }));
    }
    const result = await response.json();
    showToast("Meter reading updated sucessfully", "success");
    return result;
  } catch (err: any) {
    try {
      const parsedError = JSON.parse(err?.message);
      showToast(
        parsedError?.detail || "Failed to update meter reading.",
        "error"
      );
    } catch (parseErr) {
      console.error("Failed to parse error message:", parseErr);
      showToast("Unexpected error occurred.", "error");
    }

    console.error("Error updating meter reading:", err.message);
    return null;
  }
};

export const getAllReadingByMeterIdForMonthAndYear = async (
  token: string,
  meterId: any,
  month: any,
  year: any,
  readingSearch: any
) => {
  try {
    const header = await getHeaders(token);
    const queryParams = new URLSearchParams();

    if (readingSearch) queryParams.append("search", readingSearch);

    const url = `${MASTER_URL}/meterReading/getAllReadingByMeterIdForMonthAndYear/${meterId}/${month}/${year}?${queryParams.toString()}`;

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
    console.error("Error fetch meter reading:", err.message);
    return null;
  }
};

export const getLastTwoReadings = async (token: string, meterId: any) => {
  try {
    const header = await getHeaders(token);

    const url = `${MASTER_URL}/meterReading/getLastTwoReadingByMeterId/${meterId}`;

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
    console.error("Error fetch meter reading:", err.message);
    return null;
  }
};

export const getPreviousReading = async (token: any, selectedMeterId: any) => {
  try {
    const header = await getHeaders(token);
    const response = await fetch(
      `${MASTER_URL}/meterReading/previousReading/${selectedMeterId}`,
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
    console.error("Error fetch privious reading:", err.message);
    return null;
  }
};
export const getPreviousReadingForEdit = async (token: any, id: any) => {
  try {
    const header = await getHeaders(token);
    const response = await fetch(
      `${MASTER_URL}/meterReading/${id}/previousReadingById`,
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
    console.error("Error fetch privious reading:", err.message);
    return null;
  }
};

export const energyImageUpload = async (token: string, file: File) => {
  const formData = new FormData();
  formData.append("file", file);

  const headers = await getHeadersForImage(token);

  const response = await fetch(`${MASTER_URL}/meterReading/upload`, {
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

export const getEnergyImageByFileName = async (token: any, fileName: any) => {
  try {
    const header = await getHeaders(token);
    const response = await fetch(
      `${MASTER_URL}/meterReading/upload?filename=${fileName}`,
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
    try {
      var unstrobj = JSON.parse(err?.message);
      showToast(unstrobj?.errorMessage, "error");
    } catch (e) {}
    console.error("Error creating department:", err.message);
    return null;
  }
};

export const deleteMeterReading = async (token: string, id: any) => {
  try {
    const header = await getHeaders(token);
    const response = await fetch(`${MASTER_URL}/meterReading/${id}`, {
      method: "DELETE",
      headers: header,
    });
    if (!response.ok) {
      const result = await response.json();
      throw new Error(JSON.stringify({ ...result, status: response.status }));
    }
    return true;
  } catch (err: any) {
    try {
      var unstrobj = JSON.parse(err?.message);
      showToast(unstrobj?.errorMessage, "error");
    } catch (e) {}
    console.error("Error deleting meter reading:", err.message);
    return null;
  }
};
