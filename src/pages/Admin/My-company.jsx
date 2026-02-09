// "use client";

// import { useState } from "react";
// import { Row, Col, Button, Form, Card } from "react-bootstrap";

// const CompanyConfiguration = () => {
//     const [formData, setFormData] = useState({
//         // Top Fields
//         companyName: "", webUrl: "", startDate: "2024-01-04", endDate: "2024-01-04",
//         streetAddress: "", streetAddressCont: "", landmark: "", city: "",
//         state: "", country: "", areaPin: "", email: "",
//         drugLicNo: "", gstin: "", phoneNo: "", faxNo: "",
//         fssai: "", pan: "", invoiceCode: "", invoiceLabel: "",
//         orderLabel: "",
//         // Banking & Display
//         bankName: "", ifscCode: "", accountNo: "", upiId: "", beneficiary: "", 
//         accountType: "SAVING", productCode: "DISPLAY", pack: "DISPLAY", 
//         mrp: "DISPLAY", hsnCode: "DISPLAY", batchNo: "DISPLAY", 
//         ptr: "DISPLAY", mfgDate: "DISPLAY", expDate: "DISPLAY", description: "DISPLAY"
//     });

//     return (
//         <div className="p-2 bg-light min-vh-100">
//             <Card className="border-0 shadow-sm rounded-1">
//                 <Card.Body className="p-4">
//                     {/* TOP HEADER SECTION */}
//                     <div className="d-flex justify-content-between align-items-center mb-4">
//                         <h4 className="text-muted fw-light mb-0" style={{ width: '150px' }}>Company</h4>
//                         <Form.Select className="mx-3" style={{ maxWidth: '400px', borderRadius: '4px' }}>
//                             <option></option>
//                         </Form.Select>
//                         <div className="d-flex gap-2">
//                             <Button variant="success" className="px-3 py-1" style={{ backgroundColor: '#42ba96', border: 'none', fontWeight: '500' }}>Change Working Company</Button>
//                             <Button variant="primary" className="px-3 py-1" style={{ backgroundColor: '#4e89ae', border: 'none', fontWeight: '500' }}>Update Company Details</Button>
//                         </div>
//                     </div>

//                     {/* MAIN FORM GRID (Image 1) */}
//                     <Row className="gx-4 gy-2">
//                         {/* Company Name & Web URL row */}
//                         <Col md={2}><label className="custom-label">Company Name :</label><Form.Control size="sm" className="custom-input" /></Col>
//                         <Col md={6}><label className="custom-label">Web Url :</label><Form.Control size="sm" className="custom-input" /></Col>
//                         <Col md={2}><label className="custom-label">Start Date :</label><Form.Control type="date" size="sm" className="custom-input" defaultValue="2024-01-04" /></Col>
//                         <Col md={2}><label className="custom-label">End Date :</label><Form.Control type="date" size="sm" className="custom-input" defaultValue="2024-01-04" /></Col>

//                         {/* Address Row */}
//                         <Col md={2}><label className="custom-label">Street Address :</label><Form.Control size="sm" className="custom-input" /></Col>
//                         <Col md={6}><label className="custom-label">Street Address (cont.) :</label><Form.Control size="sm" className="custom-input" /></Col>
//                         <Col md={2}><label className="custom-label">Land Mark(Optional.) :</label><Form.Control size="sm" className="custom-input" /></Col>
//                         <Col md={2}><label className="custom-label">City :</label><Form.Control size="sm" className="custom-input" /></Col>

//                         {/* Regional Row */}
//                         <Col md={2}><label className="custom-label">State :</label><Form.Control size="sm" className="custom-input" /></Col>
//                         <Col md={6}><label className="custom-label">Country :</label><Form.Control size="sm" className="custom-input" /></Col>
//                         <Col md={2}><label className="custom-label">Area Pin :</label><Form.Control size="sm" className="custom-input" /></Col>
//                         <Col md={2}><label className="custom-label">Email :</label><Form.Control size="sm" className="custom-input" /></Col>

//                         {/* Compliance Row */}
//                         <Col md={2}><label className="custom-label">Drug Lic No :</label><Form.Control size="sm" className="custom-input" /></Col>
//                         <Col md={6}><label className="custom-label">GSTIN :</label><Form.Control size="sm" className="custom-input" /></Col>
//                         <Col md={2}><label className="custom-label">Phone No :</label><Form.Control size="sm" className="custom-input" /></Col>
//                         <Col md={2}><label className="custom-label">FAX No :</label><Form.Control size="sm" className="custom-input" /></Col>

//                         {/* Legal Row */}
//                         <Col md={2}><label className="custom-label">fssai :</label><Form.Control size="sm" className="custom-input" /></Col>
//                         <Col md={6}><label className="custom-label">PAN :</label><Form.Control size="sm" className="custom-input" /></Col>
//                         <Col md={2}><label className="custom-label">Invoice Code :</label><Form.Control size="sm" className="custom-input" /></Col>
//                         <Col md={2}><label className="custom-label">Invoice Label :</label><Form.Control size="sm" className="custom-input" /></Col>

//                         {/* Label Row */}
//                         <Col md={2}><label className="custom-label">Order Label :</label><Form.Control size="sm" className="custom-input" /></Col>
//                     </Row>

//                     {/* EDITOR AND FINANCIAL YEAR SECTION */}
//                     <Row className="mt-4 gx-4">
//                         <Col md={8}>
//                             <label className="custom-label">Term And Condition :</label>
//                             <div className="border rounded">
//                                 {/* Simulated Editor Toolbar */}
//                                 <div className="bg-light p-1 border-bottom d-flex gap-2">
//                                     <Button variant="light" size="sm" className="border-0 font-weight-bold">B</Button>
//                                     <Button variant="light" size="sm" className="border-0 text-decoration-underline">U</Button>
//                                     <Form.Select size="sm" style={{ width: '120px' }}><option>Helvetica</option></Form.Select>
//                                 </div>
//                                 <textarea className="form-control border-0" rows="5" style={{ resize: 'none' }}></textarea>
//                             </div>
//                         </Col>
//                         <Col md={4}>
//                             <label className="custom-label">Financial Year Format :</label>
//                             <div className="ps-2">
//                                 <Form.Check type="radio" label="YYYY - YYYY (eg. 2020-2021)" name="fy" className="small mb-1" />
//                                 <Form.Check type="radio" label="YY - YY (eg. 20-21 )" name="fy" className="small mb-1" />
//                                 <Form.Check type="radio" label="Sequence (eg. 1, 2, 3, 4)" name="fy" className="small mb-2" />
//                                 <div className="d-flex align-items-center">
//                                     <Form.Control size="sm" style={{ width: '60px' }} defaultValue="0" className="me-2" />
//                                     <span className="small text-muted">Invoice edit days</span>
//                                 </div>
//                             </div>
//                         </Col>
//                     </Row>

//                     <hr className="my-4" />

//                     {/* BANKING SECTION (Image 2 - Row 1) */}
//                     <Row className="gx-2 mb-3">
//                         <Col><label className="custom-label">Bank Name :</label><Form.Control size="sm" className="custom-input" /></Col>
//                         <Col><label className="custom-label">IFSC Code :</label><Form.Control size="sm" className="custom-input" /></Col>
//                         <Col><label className="custom-label">Account No :</label><Form.Control size="sm" className="custom-input" /></Col>
//                         <Col><label className="custom-label">UPI ID :</label><Form.Control size="sm" className="custom-input" /></Col>
//                         <Col md={2}><label className="custom-label">Beneficiary :</label><Form.Control size="sm" className="custom-input" /></Col>
//                         <Col md={1}>
//                             <label className="custom-label">Account Type :</label>
//                             <Form.Select size="sm" className="custom-input"><option>SAVING</option></Form.Select>
//                         </Col>
//                     </Row>

//                     {/* DISPLAY SETTINGS (Image 2 - Row 2) */}
//                     <Row className="gx-2 mb-3">
//                         {['Product Code', 'Pack', 'MRP', 'HSN Code', 'Batch No', 'PTR'].map((label) => (
//                             <Col key={label}>
//                                 <label className="custom-label">{label} :</label>
//                                 <Form.Select size="sm" className="custom-input"><option>DISPLAY</option></Form.Select>
//                             </Col>
//                         ))}
//                         <Col md={2}><label className="custom-label">MFG / START Date :</label><Form.Select size="sm" className="custom-input"><option>DISPLAY</option></Form.Select></Col>
//                         <Col md={2}><label className="custom-label">EXP / END Date :</label><Form.Select size="sm" className="custom-input"><option>DISPLAY</option></Form.Select></Col>
//                     </Row>
//                     <Row className="gx-2">
//                         <Col md={2}><label className="custom-label">Description :</label><Form.Select size="sm" className="custom-input"><option>DISPLAY</option></Form.Select></Col>
//                     </Row>
//                 </Card.Body>
//             </Card>

//             <style jsx>{`
//                 .custom-label {
//                     font-size: 13px;
//                     color: #777;
//                     margin-bottom: 3px;
//                     display: block;
//                 }
//                 .custom-input {
//                     border: 1px solid #ccc !important;
//                     border-radius: 3px !important;
//                     height: 32px !important;
//                     font-size: 13px !important;
//                 }
//                 :global(.form-check-label) {
//                     font-size: 13px;
//                     color: #555;
//                 }
//             `}</style>
//         </div>
//     );
// };

// export default CompanyConfiguration;





"use client";

import React, { useState, useRef } from "react";
import { Row, Col, Button, Form } from "react-bootstrap";

const MyCompanyPage = () => {
  const editorRef = useRef(null);
  const [formData, setFormData] = useState({
    companyName: "", webUrl: "", startDate: "2024-04-01", endDate: "2025-03-31",
    streetAddress: "", streetAddressCont: "", landmark: "", city: "",
    state: "", country: "India", areaPin: "", email: "",
    drugLicNo: "", gstin: "", phoneNo: "", faxNo: "",
    fssai: "", pan: "", invoiceCode: "", invoiceLabel: "",
    orderLabel: "", termAndCondition: "", financialYear: "YYYY-YYYY", invoiceEditDays: "0",
    bankName: "", ifscCode: "", accountNo: "", upiId: "", beneficiary: "", accountType: "SAVING",
    productCode: "DISPLAY", pack: "DISPLAY", mrp: "DISPLAY", hsnCode: "DISPLAY",
    batchNo: "DISPLAY", ptr: "DISPLAY", mfgDate: "DISPLAY", expDate: "DISPLAY", description: "DISPLAY"
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const applyStyle = (command, value = null) => {
    document.execCommand(command, false, value);
    if (editorRef.current) {
      editorRef.current.focus();
      setFormData(prev => ({ ...prev, termAndCondition: editorRef.current.innerHTML }));
    }
  };

  const labelStyle = { fontSize: "12px", color: "#666", marginBottom: "2px", display: "block", fontWeight: "500" };
  const inputStyle = { borderRadius: "2px", border: "1px solid #ced4da", height: "30px", fontSize: "13px" };

  return (
    <div className="p-3 bg-white min-vh-100">
      
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div className="d-flex align-items-center gap-2">
          <h4 className="text-muted mb-0 fw-light">Company</h4>
          <Form.Select style={{ width: "350px", height: "32px" }}><option></option></Form.Select>
        </div>
        <div className="d-flex gap-2">
          <Button size="sm" style={{ backgroundColor: "#42ba96", border: "none" }}>Change Working Company</Button>
          <Button size="sm" style={{ backgroundColor: "#4e89ae", border: "none" }} onClick={() => console.log(formData)}>Update Company Details</Button>
        </div>
      </div>

      <Form>
        
        <Row className="gx-2 gy-2 mb-3">
          <Col md={2}><label style={labelStyle}>Company Name :</label><Form.Control name="companyName" onChange={handleChange} style={inputStyle} /></Col>
          <Col md={6}><label style={labelStyle}>Web Url :</label><Form.Control name="webUrl" onChange={handleChange} style={inputStyle} /></Col>
          <Col md={2}><label style={labelStyle}>Start Date :</label><Form.Control type="date" name="startDate" value={formData.startDate} onChange={handleChange} style={inputStyle} /></Col>
          <Col md={2}><label style={labelStyle}>End Date :</label><Form.Control type="date" name="endDate" value={formData.endDate} onChange={handleChange} style={inputStyle} /></Col>

          <Col md={2}><label style={labelStyle}>Street Address :</label><Form.Control name="streetAddress" onChange={handleChange} style={inputStyle} /></Col>
          <Col md={6}><label style={labelStyle}>Street Address (cont.) :</label><Form.Control name="streetAddressCont" onChange={handleChange} style={inputStyle} /></Col>
          <Col md={2}><label style={labelStyle}>Land Mark (optional) :</label><Form.Control name="landmark" onChange={handleChange} style={inputStyle} /></Col>
          <Col md={2}><label style={labelStyle}>City :</label><Form.Control name="city" onChange={handleChange} style={inputStyle} /></Col>

          <Col md={2}><label style={labelStyle}>State :</label><Form.Control name="state" onChange={handleChange} style={inputStyle} /></Col>
          <Col md={6}><label style={labelStyle}>Country :</label><Form.Control name="country" value={formData.country} onChange={handleChange} style={inputStyle} /></Col>
          <Col md={2}><label style={labelStyle}>Area Pin :</label><Form.Control name="areaPin" onChange={handleChange} style={inputStyle} /></Col>
          <Col md={2}><label style={labelStyle}>Email :</label><Form.Control name="email" onChange={handleChange} style={inputStyle} /></Col>

          <Col md={2}><label style={labelStyle}>Drug Lic No. :</label><Form.Control name="drugLicNo" onChange={handleChange} style={inputStyle} /></Col>
          <Col md={6}><label style={labelStyle}>GSTIN :</label><Form.Control name="gstin" onChange={handleChange} style={inputStyle} /></Col>
          <Col md={2}><label style={labelStyle}>Phone No. :</label><Form.Control name="phoneNo" onChange={handleChange} style={inputStyle} /></Col>
          <Col md={2}><label style={labelStyle}>FAX No. :</label><Form.Control name="faxNo" onChange={handleChange} style={inputStyle} /></Col>

          <Col md={2}><label style={labelStyle}>FSSAI :</label><Form.Control name="fssai" onChange={handleChange} style={inputStyle} /></Col>
          <Col md={6}><label style={labelStyle}>PAN :</label><Form.Control name="pan" onChange={handleChange} style={inputStyle} /></Col>
          <Col md={1}><label style={labelStyle}>Invoice Code :</label><Form.Control name="invoiceCode" onChange={handleChange} style={inputStyle} /></Col>
          <Col md={1}><label style={labelStyle}>Invoice Label :</label><Form.Control name="invoiceLabel" onChange={handleChange} style={inputStyle} /></Col>
          <Col md={2}><label style={labelStyle}>Order Label :</label><Form.Control name="orderLabel" onChange={handleChange} style={inputStyle} /></Col>
        </Row>

       
        <Row className="gx-3 mb-4">
          <Col md={8}>
            <label style={labelStyle}>Term And Condition :</label>
            <div className="border rounded bg-white shadow-sm overflow-hidden">
              <div className="bg-light p-1 border-bottom d-flex gap-1 align-items-center">
                <button type="button" className="btn btn-sm btn-white border px-2">🪄</button>
                <div className="d-flex border rounded bg-white overflow-hidden">
                  <button type="button" onClick={() => applyStyle('bold')} className="btn btn-sm btn-light border-end rounded-0 px-2 fw-bold">B</button>
                  <button type="button" onClick={() => applyStyle('underline')} className="btn btn-sm btn-light rounded-0 px-2 text-decoration-underline">U</button>
                </div>
                <Form.Select size="sm" style={{ width: "110px", height: "26px", fontSize: "11px" }} onChange={(e) => applyStyle('fontName', e.target.value)}>
                    <option value="Helvetica">Helvetica</option>
                    <option value="Arial">Arial</option>
                </Form.Select>
                <div className="d-flex border rounded bg-white overflow-hidden">
                  <button type="button" onClick={() => applyStyle('justifyLeft')} className="btn btn-sm btn-light border-end px-2">≡</button>
                  <button type="button" onClick={() => applyStyle('justifyFull')} className="btn btn-sm btn-light px-2">≣</button>
                </div>
                <button type="button" className="btn btn-sm btn-white border px-2 ms-auto">?</button>
              </div>
              <div
                ref={editorRef}
                contentEditable={true}
                onInput={(e) => setFormData(prev => ({ ...prev, termAndCondition: e.currentTarget.innerHTML }))}
                style={{ minHeight: "120px", padding: "10px", outline: "none", fontSize: "14px", backgroundColor: "#fff" }}
              ></div>
              <div className="bg-light border-top text-center py-1" style={{fontSize: '8px', color: '#ccc'}}>≡</div>
            </div>
          </Col>

          <Col md={4}>
            <label style={labelStyle}>Financial Year Format :</label>
            <div className="p-3 border rounded h-100" style={{ backgroundColor: "#fcfcfc" }}>
              <Form.Check type="radio" label="YYYY - YYYY ( eg. 2020-2021)" name="financialYear" value="YYYY-YYYY" checked={formData.financialYear === "YYYY-YYYY"} onChange={handleChange} className="small mb-2" />
              <Form.Check type="radio" label="YY - YY ( eg. 20-21 )" name="financialYear" value="YY-YY" checked={formData.financialYear === "YY-YY"} onChange={handleChange} className="small mb-2" />
              <Form.Check type="radio" label="Sequence ( eg. 1, 2, 3, 4)" name="financialYear" value="SEQUENCE" checked={formData.financialYear === "SEQUENCE"} onChange={handleChange} className="small mb-3" />
              <div className="d-flex align-items-center gap-2 pt-2 border-top">
                <Form.Control size="sm" name="invoiceEditDays" value={formData.invoiceEditDays} onChange={handleChange} style={{ width: "50px", textAlign: "center" }} />
                <span className="small text-muted">Invoice edit days</span>
              </div>
            </div>
          </Col>
        </Row>

        
        <hr className="my-4" style={{ borderStyle: "dashed", opacity: 0.3 }} />
        <Row className="gx-2 mb-3">
          <Col><label style={labelStyle}>Bank Name :</label><Form.Control name="bankName" onChange={handleChange} style={inputStyle} /></Col>
          <Col><label style={labelStyle}>IFSC Code :</label><Form.Control name="ifscCode" onChange={handleChange} style={inputStyle} /></Col>
          <Col><label style={labelStyle}>Account Number :</label><Form.Control name="accountNo" onChange={handleChange} style={inputStyle} /></Col>
          <Col><label style={labelStyle}>UPI ID :</label><Form.Control name="upiId" onChange={handleChange} style={inputStyle} /></Col>
          <Col md={2}><label style={labelStyle}>Beneficiary :</label><Form.Control name="beneficiary" onChange={handleChange} style={inputStyle} /></Col>
          <Col md={1}>
            <label style={labelStyle}>Account Type :</label>
            <Form.Select name="accountType" onChange={handleChange} style={inputStyle} className="py-0"><option>SAVING</option><option>CURRENT</option></Form.Select>
          </Col>
        </Row>

       
        <Row className="gx-2">
            {["Product Code", "Pack", "MRP", "HSN Code", "Batch No", "PTR"].map(f => (
                <Col key={f}>
                  <label style={labelStyle}>{f.toUpperCase()} :</label>
                  <Form.Select name={f.toLowerCase().replace(/ /g, '')} onChange={handleChange} style={inputStyle} className="py-0"><option>DISPLAY</option><option>HIDE</option></Form.Select>
                </Col>
            ))}
            <Col md={2}><label style={labelStyle}>MFG / START Date :</label><Form.Select name="mfgDate" style={inputStyle} className="py-0"><option>DISPLAY</option></Form.Select></Col>
            <Col md={2}><label style={labelStyle}>EXP / END Date :</label><Form.Select name="expDate" style={inputStyle} className="py-0"><option>DISPLAY</option></Form.Select></Col>
            <Col md={2} className="mt-2"><label style={labelStyle}>DESCRIPTION :</label><Form.Select name="description" style={inputStyle} className="py-0"><option>DISPLAY</option></Form.Select></Col>
        </Row>
      </Form>
    </div>
  );
};

MyCompanyPage.layout = "admin"
export default MyCompanyPage;