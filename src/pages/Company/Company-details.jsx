"use client";

import { useState } from "react";
import { Row, Col, Form, Button, Nav } from "react-bootstrap";
import Card from "@/components/bootstrap/card";

const CompanyMaster = () => {
  const emptyCompany = {
    name: "",
    streetAddress: "",
    state: "",
    drugLicNo: "",
    phoneNo: "",
    fssal: "",
    webUrl: "",
    country: "",
    gstin: "",
    faxNo: "",
    pan: "",
    startDate: "",
    endDate: "",
    landMark: "",
    city: "",
    areaPin: "",
    email: "",
    termsText: "",
  };

  const [company, setCompany] = useState(emptyCompany);
  const [activeTab, setActiveTab] = useState("general");

  const handleChange = (e) => {
    setCompany({ ...company, [e.target.name]: e.target.value });
  };

  return (
    <Row>
      <Col sm="12">
        <Card>
          {/* ===== TOP BAR ===== */}
          <Card.Header>
            <Row className="align-items-center g-2">
              <Col md={6}>
                <Form.Select size="sm">
                  <option value="">Search company by name</option>
                </Form.Select>
              </Col>

              <Col md={6} className="d-flex justify-content-end">
                <Button size="sm">Change Working Company</Button>
              </Col>
            </Row>
          </Card.Header>

          <Card.Body>
            {/* ===== FULL WIDTH TABS ===== */}
            <Nav
              variant="tabs"
              fill
              activeKey={activeTab}
              onSelect={(k) => setActiveTab(k)}
              className="mb-3 w-100"
            >
              <Nav.Item>
                <Nav.Link eventKey="general">General Information</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="address">Address</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="messages">Messages</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="settings">Settings</Nav.Link>
              </Nav.Item>
            </Nav>

            {/* ===== GENERAL TAB ===== */}
            {activeTab === "general" && (
              <Form>
                <Row className="g-2">
                  {[
                    ["name", "Name"],
                    ["streetAddress", "Street Address"],
                    ["state", "State"],
                    ["drugLicNo", "Drug Lic No."],
                    ["phoneNo", "Phone No."],
                    ["fssal", "FSSAL"],
                    ["webUrl", "Web URL"],
                    ["country", "Country"],
                    ["gstin", "GSTIN"],
                    ["faxNo", "FAX No."],
                    ["pan", "PAN"],
                    ["startDate", "Start Date", "date"],
                    ["endDate", "End Date", "date"],
                    ["landMark", "Land Mark"],
                    ["city", "City"],
                    ["areaPin", "Area Pin"],
                    ["email", "Email", "email"],
                  ].map(([name, label, type = "text"]) => (
                    <Col md={6} key={name}>
                      <Form.Label className="small mb-1">
                        {label}
                      </Form.Label>
                      <Form.Control
                        size="sm"
                        type={type}
                        name={name}
                        value={company[name]}
                        onChange={handleChange}
                      />
                    </Col>
                  ))}
                </Row>

                {/* ===== TERMS TEXTBOX (BOTTOM RIGHT) ===== */}
                <Row className="mt-3">
                  <Col md={6}></Col>

                  <Col md={6}>
                    <Form.Label className="small mb-1">
                      Terms & Conditions
                    </Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={4}
                      size="sm"
                      name="termsText"
                      value={company.termsText}
                      onChange={handleChange}
                    />
                  </Col>
                </Row>
              </Form>
            )}
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};
CompanyMaster.layout = "Company";

export default CompanyMaster;
