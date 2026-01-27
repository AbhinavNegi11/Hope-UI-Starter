"use client";

import { useState } from "react";
import { Row, Col, Button, Form } from "react-bootstrap";
import Card from "@/components/bootstrap/card";
import DataTable from "@/components/DataTable";

export default function EmployeePage() {
  /* ---------- Form State ---------- */
  const emptyEmployee = {
    name: "",
    code: "",
    email: "",
    location: "",
    designation: "",
    department: "",
    pan: "",
    uan: "",
    accountNo: "",
    pfNo: "",
    joiningDate: "",
  };

  const [employee, setEmployee] = useState(emptyEmployee);
  const [employees, setEmployees] = useState([]);

  const handleChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (!employee.name || !employee.code) return;
    setEmployees([...employees, employee]);
    setEmployee(emptyEmployee);
  };

  const handleReset = () => setEmployee(emptyEmployee);

  /* ---------- DataTable Config ---------- */
  const DataTableOptions = {
    columns: [
      { title: "Name" },
      { title: "Employee Code" },
      { title: "Action" },
    ],
    data: employees.map((emp, index) => [
      emp.name,
      emp.code,
      <Button
        key={index}
        size="sm"
        variant="outline-primary"
        disabled
      >
        View
      </Button>,
    ]),
  };

  return (
    <Row>
      <Col sm="12">
        <Card>
          {/* ===== Header ===== */}
          <Card.Header className="text-center">
            <h5 className="mb-0">Employee</h5>
          </Card.Header>

          <Card.Body>
            <Row>
              {/* ========== LEFT : FORM ========== */}
              <Col md={6}>
                <Form>
                  <Row className="g-2">
                    <Col md={6}>
                      <Form.Label>Name</Form.Label>
                      <Form.Control
                        name="name"
                        value={employee.name}
                        onChange={handleChange}
                      />
                    </Col>

                    <Col md={6}>
                      <Form.Label>Employee Code</Form.Label>
                      <Form.Control
                        name="code"
                        value={employee.code}
                        onChange={handleChange}
                      />
                    </Col>

                    <Col md={6}>
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        value={employee.email}
                        onChange={handleChange}
                      />
                    </Col>

                    <Col md={6}>
                      <Form.Label>Location</Form.Label>
                      <Form.Control
                        name="location"
                        value={employee.location}
                        onChange={handleChange}
                      />
                    </Col>

                    <Col md={6}>
                      <Form.Label>Designation</Form.Label>
                      <Form.Control
                        name="designation"
                        value={employee.designation}
                        onChange={handleChange}
                      />
                    </Col>

                    <Col md={6}>
                      <Form.Label>Department</Form.Label>
                      <Form.Control
                        name="department"
                        value={employee.department}
                        onChange={handleChange}
                      />
                    </Col>

                    <Col md={6}>
                      <Form.Label>PAN</Form.Label>
                      <Form.Control
                        name="pan"
                        value={employee.pan}
                        onChange={handleChange}
                      />
                    </Col>

                    <Col md={6}>
                      <Form.Label>UAN No</Form.Label>
                      <Form.Control
                        name="uan"
                        value={employee.uan}
                        onChange={handleChange}
                      />
                    </Col>

                    <Col md={6}>
                      <Form.Label>Account No</Form.Label>
                      <Form.Control
                        name="accountNo"
                        value={employee.accountNo}
                        onChange={handleChange}
                      />
                    </Col>

                    <Col md={6}>
                      <Form.Label>PF No</Form.Label>
                      <Form.Control
                        name="pfNo"
                        value={employee.pfNo}
                        onChange={handleChange}
                      />
                    </Col>

                    <Col md={6}>
                      <Form.Label>Date Of Joining</Form.Label>
                      <Form.Control
                        type="date"
                        name="joiningDate"
                        value={employee.joiningDate}
                        onChange={handleChange}
                      />
                    </Col>
                  </Row>

                  {/* Buttons */}
                  <div className="mt-3 d-flex gap-2">
                    <Button onClick={handleSubmit}>Submit</Button>
                    <Button variant="secondary" onClick={handleReset}>
                      Reset
                    </Button>
                  </div>
                </Form>
              </Col>

              {/* ========== RIGHT : DATATABLE ========== */}
              <Col md={6}>
                <div className="table-responsive">
                  <DataTable
                    className="table-striped table-bordered"
                    columns={DataTableOptions.columns}
                    data={DataTableOptions.data}
                  />
                </div>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}
