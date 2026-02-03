"use client";

import { useState } from "react";
import { Row, Col, Button, Form } from "react-bootstrap";
import Card from "@/components/bootstrap/card";
import DataTable from "@/components/DataTable";

const randomEmployees = [
  { name: "Amit Sharma", code: "EMP001" },
  { name: "Neha Verma", code: "EMP002" },
  { name: "Rahul Singh", code: "EMP003" },
  { name: "Priya Patel", code: "EMP004" },
];

const generateRandomSalaryData = () => {
  return Array.from({ length: 5 }).map((_, index) => {
    const emp =
      randomEmployees[
        Math.floor(Math.random() * randomEmployees.length)
      ];

    return {
      id: index + 1,
      name: emp.name,
      code: emp.code,
      year: 2024,
      month: Math.floor(Math.random() * 12) + 1,
    };
  });
};


const SalarySlipPage=()=> {
  /* ---------- Form State ---------- */
  const emptySlip = {
    employee: "",
    code: "",
    salaryDate: "",
    paidDays: "",
    payMode: "",
    pl: "",
    lwp: "",
    arrears: "",
    arrearsAmount: "",
    arrearsDesc: "",
    cl: "",
    expense: "",
    incentive: "",
  };

  const [slip, setSlip] = useState(emptySlip);
  const [salarySlips, setSalarySlips] = useState(  generateRandomSalaryData()
);

  const handleChange = (e) => {
    setSlip({ ...slip, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (!slip.employee || !slip.salaryDate) return;

    const date = new Date(slip.salaryDate);

    setSalarySlips([
      ...salarySlips,
      {
        ...slip,
        year: date.getFullYear(),
        month: date.getMonth() + 1,
      },
    ]);

    setSlip(emptySlip);
  };

  const handleReset = () => setSlip(emptySlip);

  /* ---------- DataTable Config ---------- */
  const DataTableOptions = {
  columns: [
    { title: "Sno." },
    { title: "Name" },
    { title: "Code" },
    { title: "Year" },
    { title: "Month" },
    { title: "Action" },
  ],

  data: salarySlips.map((item, index) => [
    index + 1,               // Sno.
    item.name,               // Name
    item.code,               // Code
    item.year,               // Year
    item.month,              // Month
   `
  <button class="btn btn-sm btn-success me-1" data-id="${item.debitNoteNo}">
    Print
  </button>
  <button class="btn btn-sm btn-primary" data-id="${item.debitNoteNo}">
    Edit
  </button>
`


  ]),
};


  return (
    <Row>
      <Col sm="12">
        <Card>
          {/* ===== Header ===== */}
          <Card.Header className="text-center">
            <h5 className="mb-0">Salary Slip Details</h5>
          </Card.Header>

          <Card.Body>
            <Row>
              {/* ========== LEFT : FORM ========== */}
              <Col md={6}>
                <Form>
                  <Row className="g-2">
                    <Col md={6}>
                      <Form.Label>Employee</Form.Label>
                      <Form.Control
                        name="employee"
                        value={slip.employee}
                        onChange={handleChange}
                      />
                    </Col>

                    <Col md={6}>
                      <Form.Label>Employee Code</Form.Label>
                      <Form.Control
                        name="code"
                        value={slip.code}
                        onChange={handleChange}
                      />
                    </Col>

                    <Col md={6}>
                      <Form.Label>Salary Date</Form.Label>
                      <Form.Control
                        type="date"
                        name="salaryDate"
                        value={slip.salaryDate}
                        onChange={handleChange}
                      />
                    </Col>

                    <Col md={6}>
                      <Form.Label>Paid Days</Form.Label>
                      <Form.Control
                        name="paidDays"
                        value={slip.paidDays}
                        onChange={handleChange}
                      />
                    </Col>

                    <Col md={6}>
                      <Form.Label>Pay Mode</Form.Label>
                      <Form.Control
                        name="payMode"
                        value={slip.payMode}
                        onChange={handleChange}
                      />
                    </Col>

                    <Col md={6}>
                      <Form.Label>PL</Form.Label>
                      <Form.Control
                        name="pl"
                        value={slip.pl}
                        onChange={handleChange}
                      />
                    </Col>

                    <Col md={6}>
                      <Form.Label>LWP</Form.Label>
                      <Form.Control
                        name="lwp"
                        value={slip.lwp}
                        onChange={handleChange}
                      />
                    </Col>

                    <Col md={6}>
                      <Form.Label>CL</Form.Label>
                      <Form.Control
                        name="cl"
                        value={slip.cl}
                        onChange={handleChange}
                      />
                    </Col>

                    <Col md={6}>
                      <Form.Label>Arrears</Form.Label>
                      <Form.Control
                        name="arrears"
                        value={slip.arrears}
                        onChange={handleChange}
                      />
                    </Col>

                    <Col md={6}>
                      <Form.Label>Arrears Amount</Form.Label>
                      <Form.Control
                        name="arrearsAmount"
                        value={slip.arrearsAmount}
                        onChange={handleChange}
                      />
                    </Col>

                    <Col md={12}>
                      <Form.Label>Arrears Description</Form.Label>
                      <Form.Control
                        name="arrearsDesc"
                        value={slip.arrearsDesc}
                        onChange={handleChange}
                      />
                    </Col>

                    <Col md={6}>
                      <Form.Label>Expense</Form.Label>
                      <Form.Control
                        name="expense"
                        value={slip.expense}
                        onChange={handleChange}
                      />
                    </Col>

                    <Col md={6}>
                      <Form.Label>Incentive</Form.Label>
                      <Form.Control
                        name="incentive"
                        value={slip.incentive}
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
SalarySlipPage.layout="Accounting"
export default SalarySlipPage


