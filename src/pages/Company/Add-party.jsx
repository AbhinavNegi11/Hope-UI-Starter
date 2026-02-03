"use client";

import { useState } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import Card from "@/components/bootstrap/card";

const AddParty = () => {
  const emptyParty = {
    partyName: "",
    contactName: "",
    state: "",
    drugLicNo: "",
    phoneNo: "",
    fssal: "",
    webUrl: "",
    streetAddress: "",
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
    partyType: "",
    userLogin: "",
  };

  const [party, setParty] = useState(emptyParty);

  const handleChange = (e) => {
    setParty({ ...party, [e.target.name]: e.target.value });
  };

  const handleReset = () => setParty(emptyParty);

  return (
    <Row>
      <Col sm="12">
        <Card>
          {/* ===== HEADER ===== */}
          <Card.Header className="d-flex justify-content-between align-items-center">
            <h5 className="mb-0">Party Details</h5>

            <div className="d-flex gap-2">
              <Button size="sm" variant="secondary">
                Home
              </Button>
              <Button size="sm" variant="secondary">
                Party List
              </Button>
              <Button size="sm" variant="primary">
                Add Party
              </Button>
            </div>
          </Card.Header>

          {/* ===== BODY ===== */}
          <Card.Body>
            <Form>
              <Row className="g-2">
                {[
                  ["partyName", "Party Name"],
                  ["contactName", "Contact Name"],
                  ["state", "State"],
                  ["drugLicNo", "Drug Lic No."],
                  ["phoneNo", "Phone No."],
                  ["fssal", "FSSAL"],
                  ["webUrl", "Web URL"],
                  ["streetAddress", "Street Address"],
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
                  ["partyType", "Party Type"],
                  ["userLogin", "User Login"],
                ].map(([name, label, type = "text"]) => (
                  <Col md={6} key={name}>
                    <Form.Label className="small mb-1">
                      {label}
                    </Form.Label>
                    <Form.Control
                      size="sm"
                      type={type}
                      name={name}
                      value={party[name]}
                      onChange={handleChange}
                    />
                  </Col>
                ))}
              </Row>

              {/* ===== ACTIONS ===== */}
              <div className="mt-3 d-flex gap-2">
                <Button size="sm" variant="primary">
                  Submit
                </Button>
                <Button size="sm" variant="secondary" onClick={handleReset}>
                  Cancel
                </Button>
              </div>
            </Form>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default AddParty;
