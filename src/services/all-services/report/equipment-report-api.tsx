import { Api_Url } from "@/services/all-api-url/api-url";
import { getHeaders, getHeadersForImage } from "@/services/header/header1";
import { showToast } from "@/utilities/ToastNotification";
import { method } from "lodash";

const Gateway_Url = "report/v1/api";

const MASTER_URL = `${Api_Url}/${Gateway_Url}`;

//  Sites Controller for getting all sites
export const getAllSiteForEqup = async (token: string) => {
  try {
    const header = await getHeaders(token);
    const response = await fetch(`${MASTER_URL}/equipment-master/sites`, {
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

export const getBlocksBySiteIdEqup = async (token: string, siteId: string) => {
  try {
    const header = await getHeaders(token);
    const response = await fetch(
      `${MASTER_URL}/equipment-master/sites/${siteId}/blocks`,
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

export const getFloorBySiteIdAndBlockIdEqup = async (
  token: string,
  siteId: string,
  blockId: string
) => {
  try {
    const header = await getHeaders(token);
    const response = await fetch(
      `${MASTER_URL}/equipment-master/sites/${siteId}/blocks/${blockId}/floors`,
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

export const getChecklistDeptForEqup = async (token: string) => {
  try {
    const header = await getHeaders(token);
    const response = await fetch(
      `${MASTER_URL}/master/checklist-location/departments/by-login-user`,
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

export const getChecklistStatus = async (token: string) => {
  try {
    const header = await getHeaders(token);
    const response = await fetch(
      `${MASTER_URL}/equipment-master/daily-checklist-status`,
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

export const getZoneBySiteIdAndBlockIdAndZoneEqup = async (
  token: string,
  siteId: string,
  blockId: string,
  floorId: any
) => {
  try {
    const header = await getHeaders(token);
    const response = await fetch(
      `${MASTER_URL}/equipment-master/sites/${siteId}/blocks/${blockId}/floors/${floorId}/zones`,
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

export const getIssueByTfmDeptEqup = async (token: string, id: any) => {
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

export const getAllServiceProvidersEqup = async (token: string) => {
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

export const getEquipmentReportAllData = async (
  token: string,
  siteSelected?: any,
  page?: any,
  rowsPerPage?: any,
  seletedDept?: any,
  debonceSearch?: any,
  equipmentStatus?: any,
  selectedEquipment?: any
) => {
  try {
    let url = `${MASTER_URL}/equipment/report/?page=${page}&size=${rowsPerPage}`;
    if (siteSelected) {
      url += `&siteId=${siteSelected}`;
    }
    if (seletedDept) {
      url += `&equipmentGroupId=${seletedDept}`;
    }
    if (equipmentStatus) {
      url += `&equipmentStatus=${equipmentStatus}`;
    }
    if (debonceSearch) {
      url += `&search=${debonceSearch}`;
    }
    if (selectedEquipment) {
      url += `&equipmentId=${selectedEquipment}`;
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

export const getEquipmentReportAllDataExcel = async (
  token: string,
  {
    siteSelected,
    seletedDept,
    debonceSearch,
    equipmentStatus,
    selectedEquipment,
    page,
    rowsPerPage,
    download = false, // required param
  }: {
    siteSelected?: any;
    seletedDept?: any;
    debonceSearch?: any;
    equipmentStatus?: any;
    selectedEquipment?: any;
    page?: number;
    rowsPerPage?: number;
    download: boolean;
  }
) => {
  try {
    let url = `${MASTER_URL}/equipment/report/?download=${download}`;

    if (!download) {
      if (page !== undefined) url += `&page=${page}`;
      if (rowsPerPage !== undefined) url += `&size=${rowsPerPage}`;
    }

    if (siteSelected) url += `&siteId=${siteSelected}`;
    if (seletedDept) url += `&equipmentGroupId=${seletedDept}`;
    if (equipmentStatus) url += `&equipmentStatus=${equipmentStatus}`;
    if (debonceSearch) url += `&search=${encodeURIComponent(debonceSearch)}`;
    if (selectedEquipment) url += `&equipmentId=${selectedEquipment}`;

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
    console.error("Error fetching equipment report:", err.message);
    return null;
  }
};

export const getAllAssignyTfmEq = async (token: string, siteId: any) => {
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

export const getAmcVisitReport = async (
  token: string,
  siteSelected?: any,
  selectedGroup?: any,
  selectedEquipment?: any,
  selectedAssigny?: any,
  selectedStatus?: any,
  searchData?: any,
  page?: any,
  rowsPerPage?: any,
  selectedStartDate?: any,
  selectedEndDate?: any
) => {
  try {
    let url = `${MASTER_URL}/equipment/report/amc/visit?page=${page}&size=${rowsPerPage}`;
    if (siteSelected) {
      url += `&site=${siteSelected}`;
    }
    if (selectedEquipment) {
      url += `&equipment=${selectedEquipment}`;
    }
    if (selectedGroup) {
      url += `&group=${selectedGroup}`;
    }
    if (selectedAssigny) {
      url += `&assign=${selectedAssigny}`;
    }
    if (selectedStatus) {
      url += `&status=${selectedStatus}`;
    }
    if (searchData) {
      url += `&search=${searchData}`;
    }
    if (selectedStartDate) {
      url += `&startDate=${selectedStartDate}`;
    }
    if (selectedEndDate) {
      url += `&endDate=${selectedEndDate}`;
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

export const getAmcVisitReportExcel = async (
  token: string,
  {
    siteSelected,
    selectedGroup,
    selectedEquipment,
    selectedAssigny,
    selectedStatus,
    searchData,
    page,
    rowsPerPage,
    selectedStartDate,
    selectedEndDate,
    download, // required boolean
  }: {
    siteSelected?: any;
    selectedGroup?: any;
    selectedEquipment?: any;
    selectedAssigny?: any;
    selectedStatus?: any;
    searchData?: any;
    page?: number;
    rowsPerPage?: number;
    selectedStartDate?: any;
    selectedEndDate?: any;
    download: boolean;
  }
) => {
  try {
    let url = `${MASTER_URL}/equipment/report/amc/visit?download=${download}`;

    if (!download) {
      if (page !== undefined) url += `&page=${page}`;
      if (rowsPerPage !== undefined) url += `&size=${rowsPerPage}`;
    }

    if (siteSelected) url += `&site=${siteSelected}`;
    if (selectedEquipment) url += `&equipment=${selectedEquipment}`;
    if (selectedGroup) url += `&group=${selectedGroup}`;
    if (selectedAssigny) url += `&assign=${selectedAssigny}`;
    if (selectedStatus) url += `&enabled=${selectedStatus}`;
    if (searchData) url += `&search=${encodeURIComponent(searchData)}`;
    if (selectedStartDate) url += `&startDate=${selectedStartDate}`;
    if (selectedEndDate) url += `&endDate=${selectedEndDate}`;

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
    console.error("Error fetching AMC visit report:", err.message);
    return null;
  }
};

export const getAllEquipmentStatusEq = async (token: string) => {
  try {
    const header = await getHeaders(token);
    const response = await fetch(`${MASTER_URL}/master/equipment-status`, {
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

export const getAmcVisitStatus = async (token: string) => {
  try {
    const header = await getHeaders(token);
    const response = await fetch(`${MASTER_URL}/master/amc-visit-status`, {
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

export const getAllEquipmentDetailByIdEQ = async (
  token: string,
  page?: any,
  size?: any,
  siteSelected?: any,
  blockSelected?: any,
  selectedGroup?: any,
  selectedFloor?: any,
  searchData?: any
) => {
  try {
    const header = await getHeaders(token);
    let url = `${MASTER_URL}/equipment/report/search/equipment-detail?page=${page}&size=${size}`;
    if (siteSelected) url += `&site=${siteSelected}`;
    if (blockSelected) url += `&block=${blockSelected}`;
    if (selectedGroup) url += `&equipmentGroupId=${selectedGroup}`;
    if (selectedFloor) url += `&floor=${selectedFloor}`;
    if (searchData) url += `&search=${encodeURIComponent(searchData)}`;

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

export const getAllEquipmentByIdEQ = async (token: string, id: any) => {
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
    console.error("Error fetching service providers:", err.message);
    return null;
  }
};

export const getAllStatusEqup = async (token: string) => {
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

export const getPpmScheduleStatus = async (token: string) => {
  try {
    const header = await getHeaders(token);
    const response = await fetch(`${MASTER_URL}/master/ppm-schedule-status`, {
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

export const getAllCallTypeEqup = async (token: string) => {
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
export const getAllChecklistTypeEqup = async (token: string) => {
  try {
    const header = await getHeaders(token);
    const response = await fetch(`${MASTER_URL}/master/checklist-type`, {
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

export const getAllDepartmentsEqup = async (token: string) => {
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

export const getAllDoneByEqup = async (token: string) => {
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

export const getAllTechUserEqup = async (token: string, siteId: any) => {
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

export const getPPMReport = async (token: string, prams: any) => {
  try {
    let url = `${MASTER_URL}/equipment/report/ppm/schedule?page=${prams?.page}&size=${prams?.size}`;
    if (prams?.siteId) {
      url += `&site=${prams?.siteId}`;
    }
    if (prams?.blockId) {
      url += `&block=${prams?.blockId}`;
    }
    if (prams?.floorId) {
      url += `&floor=${prams?.floorId}`;
    }
    if (prams?.groupId) {
      url += `&group=${prams?.groupId}`;
    }
    if (prams?.equipmentId) {
      url += `&equipment=${prams?.equipmentId}`;
    }
    if (prams?.status) {
      url += `&status=${prams?.status}`;
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
    if (prams?.assigneeId) {
      url += `&assign=${prams?.assigneeId}`;
    }
    if (prams?.subGroupId) {
      url += `&equipmentDetail=${prams?.subGroupId}`;
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

export const getPPMReportExcel = async (token: string, params: any) => {
  try {
    const queryParams: Record<string, any> = {};

    if (params?.page !== undefined) queryParams.page = params.page;
    if (params?.size !== undefined) queryParams.size = params.size;
    if (params?.siteId) queryParams.site = params.siteId;
    if (params?.blockId) queryParams.block = params.blockId;
    if (params?.floorId) queryParams.floor = params.floorId;
    if (params?.groupId) queryParams.group = params.groupId;
    if (params?.equipmentId) queryParams.equipment = params.equipmentId;
    if (params?.status) queryParams.status = params.status; // fixed: no duplicate `equipmentDetail`
    if (params?.search) queryParams.search = params.search;
    if (params?.startDate) queryParams.startDate = params.startDate;
    if (params?.endDate) queryParams.endDate = params.endDate;
    if (params?.assigneeId) queryParams.assign = params.assigneeId;
    if (params?.subGroupId) queryParams.subGroup = params.subGroupId;
    if (params?.download) queryParams.download = true; // for Excel export

    const queryString = new URLSearchParams(queryParams).toString();
    const url = `${MASTER_URL}/equipment/report/ppm/schedule?${queryString}`;

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
    console.error("Error fetching PPM report:", err.message);
    return null;
  }
};

export const getLocationChecklistReport = async (token: string, prams: any) => {
  try {
    let url = `${MASTER_URL}/equipment/report/location-checklist?page=${prams?.page}&size=${prams?.size}`;
    if (prams?.siteId) {
      url += `&site=${prams?.siteId}`;
    }
    if (prams?.blockId) {
      url += `&block=${prams?.blockId}`;
    }
    if (prams?.floorId) {
      url += `&floor=${prams?.floorId}`;
    }
    if (prams?.zoneId) {
      url += `&zone=${prams?.zoneId}`;
    }
    if (prams?.departmentIds) {
      url += `&checklistDepartmentIds=${prams?.departmentIds}`;
    }
    if (prams?.dailyChecklistStatus) {
      url += `&dailyChecklistStatus=${prams?.dailyChecklistStatus}`;
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

export const getLocationChecklistExcelReport = async (
  token: string,
  prams: any
) => {
  try {
    let url = `${MASTER_URL}/equipment/report/location-checklist?download=${prams?.download}`;
    if (prams?.siteId) {
      url += `&site=${prams?.siteId}`;
    }
    if (prams?.blockId) {
      url += `&block=${prams?.blockId}`;
    }
    if (prams?.floorId) {
      url += `&floor=${prams?.floorId}`;
    }
    if (prams?.zoneId) {
      url += `&zone=${prams?.zoneId}`;
    }
    if (prams?.departmentIds) {
      url += `&checklistDepartmentIds=${prams?.departmentIds}`;
    }

    if (prams?.search) {
      url += `&search=${prams?.search}`;
    }
    if (prams?.dailyChecklistStatus) {
      url += `&dailyChecklistStatus=${prams?.dailyChecklistStatus}`;
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

export const getLocationChecklistLocationwiseReport = async (
  token: string,
  prams: any
) => {
  try {
    let url = `${MASTER_URL}/equipment/report/location-checklist/location-wise?page=${prams?.page}&size=${prams?.size}`;
    if (prams?.siteId) {
      url += `&site=${prams?.siteId}`;
    }
    if (prams?.blockId) {
      url += `&block=${prams?.blockId}`;
    }
    if (prams?.floorId) {
      url += `&floor=${prams?.floorId}`;
    }
    if (prams?.zoneId) {
      url += `&zone=${prams?.zoneId}`;
    }
    if (prams?.departmentIds) {
      url += `&checklistDepartmentId=${prams?.departmentIds}`;
    }
    if (prams?.locationId) {
      url += `&checklistLocationId=${prams?.locationId}`;
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

export const getLocationChecklistLocationwiseReportExcel = async (
  token: string,
  params: any
) => {
  try {
    let url = `${MASTER_URL}/equipment/report/location-checklist/location-wise?page=${params?.page}&size=${params?.size}`;

    if (params?.download) {
      url += `&download=true`;
    }
    if (params?.siteId) {
      url += `&site=${params?.siteId}`;
    }
    if (params?.blockId) {
      url += `&block=${params?.blockId}`;
    }
    if (params?.floorId) {
      url += `&floor=${params?.floorId}`;
    }
    if (params?.zoneId) {
      url += `&zone=${params?.zoneId}`;
    }
    if (params?.departmentIds) {
      url += `&checklistDepartmentId=${params?.departmentIds}`;
    }
    if (params?.locationId) {
      url += `&checklistLocationId=${params?.locationId}`;
    }
    if (params?.search) {
      url += `&search=${params?.search}`;
    }
    if (params?.startDate) {
      url += `&startDate=${params?.startDate}`;
    }
    if (params?.endDate) {
      url += `&endDate=${params?.endDate}`;
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
    console.error("Error fetching location checklist report:", err.message);
    return null;
  }
};

export const getTechnicalChecklistReport = async (
  token: string,
  prams: any
) => {
  try {
    let url = `${MASTER_URL}/equipment/report/technical-checklist?page=${prams?.page}&size=${prams?.size}`;
    if (prams?.siteId) {
      url += `&site=${prams?.siteId}`;
    }
    if (prams?.blockId) {
      url += `&block=${prams?.blockId}`;
    }
    if (prams?.groupId) {
      url += `&equipmentGroupId=${prams?.groupId}`;
    }
    if (prams?.equipmentId) {
      url += `&equipmentId=${prams?.equipmentId}`;
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
    if (prams?.dailyChecklistStatus) {
      url += `&dailyChecklistStatus=${prams?.dailyChecklistStatus}`;
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

export const getTechnicalChecklistReportExcel = async (
  token: string,
  params: any
) => {
  try {
    let queryParams: string[] = [];

    if (params?.page !== undefined) queryParams.push(`page=${params.page}`);
    if (params?.size !== undefined) queryParams.push(`size=${params.size}`);
    if (params?.siteId) queryParams.push(`site=${params.siteId}`);
    if (params?.blockId) queryParams.push(`block=${params.blockId}`);
    if (params?.groupId) queryParams.push(`equipmentGroupId=${params.groupId}`);
    if (params?.equipmentId)
      queryParams.push(`equipmentId=${params.equipmentId}`);
    if (params?.search) queryParams.push(`search=${params.search}`);
    if (params?.startDate) queryParams.push(`startDate=${params.startDate}`);
    if (params?.endDate) queryParams.push(`endDate=${params.endDate}`);
    if (params?.dailyChecklistStatus)
      queryParams.push(`dailyChecklistStatus=${params.dailyChecklistStatus}`);

    // Required: download boolean
    queryParams.push(`download=${params?.download === true}`);

    const url = `${MASTER_URL}/equipment/report/technical-checklist?${queryParams.join(
      "&"
    )}`;

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
    console.error("Error fetching Technical Checklist Report:", err.message);
    return null;
  }
};

export const getAMCJobCardEqup = async (token: string, id: any) => {
  try {
    const header = await getHeaders(token);
    const response = await fetch(
      `${MASTER_URL}/equipment/report/amc-visit/${id}/job-card`,
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

export const getPPMJobCardEqup = async (token: string, id: any) => {
  try {
    const header = await getHeaders(token);
    const response = await fetch(
      `${MASTER_URL}/equipment/report/ppm-schedule/${id}/job-card`,
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

export const getTechJobCardEqup = async (token: string, id: any) => {
  try {
    const header = await getHeaders(token);
    const response = await fetch(
      `${MASTER_URL}/equipment/report/daily-checklist-technical/job-card/${id}`,
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

export const getDailyJobCardEqup = async (token: string, id: any) => {
  try {
    const header = await getHeaders(token);
    const response = await fetch(
      `${MASTER_URL}/equipment/report/daily-checklist-location/job-card/${id}`,
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

export const getImageReports = async (token: string, fileName: any) => {
  const headers = await getHeadersForImage(token);

  const response = await fetch(
    `${MASTER_URL}/master/upload?filename=${fileName}`,
    {
      method: "GET",
      headers,
    }
  );

  if (!response.ok) {
    throw new Error("File retrieval failed");
  }

  const data = await response.json();
  return data;
};

export const getEqCardReport = async (token: string, id: any) => {
  try {
    let url = `${MASTER_URL}/equipment/report/${id}/card`;

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

export const getPPMCardReportEq = async (token: string, prams: any) => {
  try {
    let url = `${MASTER_URL}/equipment/report/ppm/schedule/count?`;
    const params = [];
    if (prams?.equipmentCodeId) {
      params.push(`equipmentDetailId=${prams.equipmentCodeId}`);
    }

    url += params.join("&");

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

export const getTablePPMCardReportEq = async (
  token: string,
  page: number,
  rowsPerPage: number,
  prams: any
) => {
  try {
    let url = `${MASTER_URL}/equipment/report/ppm/schedule/detail?page=${page}&size=${rowsPerPage}&pagination=false&`;
    const params = [];

    if (prams?.siteId) {
      params.push(`site=${prams.siteId}`);
    }
    if (prams?.blockId) {
      params.push(`block=${prams.blockId}`);
    }
    if (prams?.floorId) {
      params.push(`floor=${prams.floorId}`);
    }
    if (prams?.groupId) {
      params.push(`group=${prams.groupId}`);
    }
    if (prams?.equipmentId) {
      params.push(`equipment=${prams.equipmentId}`);
    }
    if (prams?.equipmentCodeId) {
      params.push(`equipmentDetail=${prams.equipmentCodeId}`);
    }

    url += params.join("&");

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

export const getAMCCardReportEq = async (token: string, prams: any) => {
  try {
    let url = `${MASTER_URL}/equipment/report/amc/visit/count?`;
    const params = [];
    if (prams?.equipmentCodeId) {
      params.push(`equipmentDetailId=${prams.equipmentCodeId}`);
    }

    url += params.join("&");

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

export const getTableAMCCardReportEq = async (
  token: string,
  page: any,
  rowsPerPage: any,
  prams: any
) => {
  try {
    let url = `${MASTER_URL}/equipment/report/amc/visit/detail?page=${page}&size=${rowsPerPage}&pagination=false&`;
    const params = [];

    if (prams?.siteId) {
      params.push(`site=${prams.siteId}`);
    }
    if (prams?.blockId) {
      params.push(`block=${prams.blockId}`);
    }
    if (prams?.floorId) {
      params.push(`floor=${prams.floorId}`);
    }
    if (prams?.groupId) {
      params.push(`group=${prams.groupId}`);
    }
    if (prams?.equipmentId) {
      params.push(`equipment=${prams.equipmentId}`);
    }
    if (prams?.equipmentCodeId) {
      params.push(`equipmentDetail=${prams.equipmentCodeId}`);
    }

    url += params.join("&");

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

export const getEngineerCardTableReportEq = async (
  token: string,
  page: number,
  rowsPerPage: number,
  prams: any
) => {
  try {
    let url = `${MASTER_URL}/equipment/report/engineering/request/detail?page=${page}&size=${rowsPerPage}&pagination=false&`;
    const params = [];

    if (prams?.siteId) {
      params.push(`site=${prams.siteId}`);
    }
    if (prams?.blockId) {
      params.push(`block=${prams.blockId}`);
    }
    if (prams?.floorId) {
      params.push(`floor=${prams.floorId}`);
    }
    if (prams?.groupId) {
      params.push(`group=${prams.groupId}`);
    }
    if (prams?.equipmentId) {
      params.push(`equipment=${prams.equipmentId}`);
    }
    if (prams?.equipmentCodeId) {
      params.push(`equipmentDetail=${prams.equipmentCodeId}`);
    }

    url += params.join("&");

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

export const getEngineerCardReportEq = async (token: string, prams: any) => {
  try {
    let url = `${MASTER_URL}/equipment/report/engineering/request/count?`;
    const params = [];
    if (prams?.equipmentCodeId) {
      params.push(`equipmentDetailId=${prams.equipmentCodeId}`);
    }

    url += params.join("&");

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

export const getEquipmentAttachment = async (token: string, id: any) => {
  try {
    let url = `${MASTER_URL}/equipment/report/attachment/${id}`;

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
